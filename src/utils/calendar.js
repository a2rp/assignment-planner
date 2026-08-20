import { getDueTimestamp } from "./assignmentUtils";

const escapeIcsValue = (value = "") => {
    return String(value)
        .replaceAll("\\", "\\\\")
        .replaceAll("\n", "\\n")
        .replaceAll(",", "\\,")
        .replaceAll(";", "\\;");
};

const formatIcsTimestamp = (date) => {
    return date
        .toISOString()
        .replace(/[-:]/g, "")
        .replace(/\.\d{3}Z$/, "Z");
};

const getPriorityValue = (priority) => {
    if (priority === "High") {
        return 1;
    }

    if (priority === "Medium") {
        return 5;
    }

    return 9;
};

export const createAssignmentIcs = (assignment) => {
    const dueTimestamp = getDueTimestamp(assignment);

    if (!dueTimestamp) {
        return "";
    }

    const start = new Date(dueTimestamp);

    const durationMinutes = Math.max(
        30,
        Math.round((Number(assignment.estimateHours) || 1) * 60),
    );

    const end = new Date(start.getTime() + durationMinutes * 60 * 1000);

    const description = [assignment.course, assignment.notes]
        .filter(Boolean)
        .join(" - ");

    return [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Assignment Planner//EN",
        "CALSCALE:GREGORIAN",
        "BEGIN:VEVENT",

        `UID:${assignment.id}@assignment-planner`,

        `DTSTAMP:${formatIcsTimestamp(new Date())}`,

        `DTSTART:${formatIcsTimestamp(start)}`,

        `DTEND:${formatIcsTimestamp(end)}`,

        `SUMMARY:${escapeIcsValue(assignment.title)}`,

        `DESCRIPTION:${escapeIcsValue(description)}`,

        `PRIORITY:${getPriorityValue(assignment.priority)}`,

        "END:VEVENT",
        "END:VCALENDAR",
    ].join("\r\n");
};

export const getAssignmentIcsFilename = (assignment) => {
    const safeTitle =
        assignment.title
            ?.replace(/[^a-z0-9]+/gi, "-")
            .replace(/^-+|-+$/g, "")
            .toLowerCase() || "assignment";

    return `assignment-${safeTitle}.ics`;
};
