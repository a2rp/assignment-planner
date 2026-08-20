import {
    DUE_SOON_WINDOW_MS,
    PRIORITY_RANK,
    STATUS_LABELS,
} from "../data/constants";

export const createAssignmentId = (prefix = "asg") => {
    return `${prefix}_${Math.random()
        .toString(36)
        .slice(2, 8)}_${Date.now().toString(36)}`;
};

export const getDueTimestamp = (assignment) => {
    if (!assignment?.dueDate) {
        return 0;
    }

    const [year, month, day] = assignment.dueDate.split("-").map(Number);

    const [hour, minute] = (assignment.dueTime || "23:59")
        .split(":")
        .map(Number);

    if (
        !Number.isFinite(year) ||
        !Number.isFinite(month) ||
        !Number.isFinite(day)
    ) {
        return 0;
    }

    return new Date(
        year,
        month - 1,
        day,
        Number.isFinite(hour) ? hour : 23,
        Number.isFinite(minute) ? minute : 59,
        0,
        0,
    ).getTime();
};

export const isAssignmentOverdue = (assignment, currentTime) => {
    if (
        !assignment ||
        assignment.status === "done" ||
        !assignment.dueDate ||
        !currentTime
    ) {
        return false;
    }

    return getDueTimestamp(assignment) < currentTime;
};

export const isAssignmentDueSoon = (assignment, currentTime) => {
    if (
        !assignment ||
        assignment.status === "done" ||
        !assignment.dueDate ||
        !currentTime
    ) {
        return false;
    }

    const remaining = getDueTimestamp(assignment) - currentTime;

    return remaining > 0 && remaining <= DUE_SOON_WINDOW_MS;
};

export const getStatusLabel = (status) => {
    return STATUS_LABELS[status] || "To-do";
};

export const getPriorityClass = (priority) => {
    if (priority === "High") {
        return "high";
    }

    if (priority === "Low") {
        return "low";
    }

    return "medium";
};

export const formatDueDate = (assignment) => {
    const timestamp = getDueTimestamp(assignment);

    if (!timestamp) {
        return {
            dateText: "No date",
            timeText: "",
        };
    }

    const date = new Date(timestamp);

    const dateText = date.toLocaleDateString([], {
        weekday: "short",
        month: "short",
        day: "numeric",
    });

    const timeText = assignment.dueTime
        ? date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
          })
        : "";

    return {
        dateText,
        timeText,
    };
};

export const matchesAssignmentFilters = (assignment, filters) => {
    if (!assignment || !filters) {
        return true;
    }

    const search = filters.search?.trim().toLowerCase() || "";

    if (search) {
        const searchableText = [
            assignment.title,
            assignment.course,
            assignment.notes,
        ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

        if (!searchableText.includes(search)) {
            return false;
        }
    }

    if (filters.course && assignment.course !== filters.course) {
        return false;
    }

    if (filters.priority && assignment.priority !== filters.priority) {
        return false;
    }

    if (filters.status && assignment.status !== filters.status) {
        return false;
    }

    if (filters.hideDone && assignment.status === "done") {
        return false;
    }

    return true;
};

export const sortAssignments = (assignments, sort = "dueAsc") => {
    const items = [...assignments];

    const byDue = (a, b) => getDueTimestamp(a) - getDueTimestamp(b);

    return items.sort((a, b) => {
        switch (sort) {
            case "priorityDesc":
                return (
                    (PRIORITY_RANK[b.priority] || 0) -
                        (PRIORITY_RANK[a.priority] || 0) || byDue(a, b)
                );

            case "courseAsc":
                return (
                    (a.course || "").localeCompare(b.course || "") ||
                    byDue(a, b)
                );

            case "titleAsc":
                return (
                    (a.title || "").localeCompare(b.title || "") || byDue(a, b)
                );

            case "statusAsc":
                return (
                    (a.status || "").localeCompare(b.status || "") ||
                    byDue(a, b)
                );

            case "dueAsc":
            default:
                return (
                    byDue(a, b) || (a.title || "").localeCompare(b.title || "")
                );
        }
    });
};

export const getFilteredAssignments = (assignments, filters) => {
    return sortAssignments(
        assignments.filter((assignment) =>
            matchesAssignmentFilters(assignment, filters),
        ),
        filters.sort,
    );
};

export const getUniqueCourses = (assignments) => {
    return [
        ...new Set(
            assignments
                .map((assignment) => assignment.course?.trim())
                .filter(Boolean),
        ),
    ].sort((a, b) => a.localeCompare(b));
};

export const getAssignmentSummary = (assignments, currentTime) => {
    return assignments.reduce(
        (summary, assignment) => {
            summary.total += 1;

            if (assignment.status === "todo") {
                summary.todo += 1;
            }

            if (assignment.status === "doing") {
                summary.doing += 1;
            }

            if (assignment.status === "done") {
                summary.done += 1;
            }

            if (isAssignmentOverdue(assignment, currentTime)) {
                summary.overdue += 1;
            }

            return summary;
        },
        {
            total: 0,
            todo: 0,
            doing: 0,
            done: 0,
            overdue: 0,
        },
    );
};

export const normalizeAssignment = (assignment) => {
    const now = Date.now();

    return {
        id: assignment.id || createAssignmentId(),

        title: assignment.title?.trim() || "",

        course: assignment.course?.trim() || "",

        dueDate: assignment.dueDate || "",

        dueTime: assignment.dueTime || "",

        priority: ["High", "Medium", "Low"].includes(assignment.priority)
            ? assignment.priority
            : "Medium",

        estimateHours: Number(assignment.estimateHours) || 0,

        status: ["todo", "doing", "done"].includes(assignment.status)
            ? assignment.status
            : "todo",

        notes: assignment.notes?.trim() || "",

        createdAt: assignment.createdAt || now,

        updatedAt: now,
    };
};
