export const STORAGE_KEYS = {
    assignments: "assignmentPlanner.assignments",
    filters: "assignmentPlanner.filters",
    theme: "assignmentPlanner.theme",
};

export const DUE_SOON_WINDOW_MS = 6 * 60 * 60 * 1000;

export const DEFAULT_ASSIGNMENT_FORM = {
    title: "",
    course: "",
    dueDate: "",
    dueTime: "",
    priority: "Medium",
    estimateHours: "1",
    status: "todo",
    notes: "",
};

export const DEFAULT_FILTERS = {
    search: "",
    course: "",
    priority: "",
    status: "",
    hideDone: false,
    sort: "dueAsc",
};

export const PRIORITY_OPTIONS = [
    {
        value: "High",
        label: "High",
    },
    {
        value: "Medium",
        label: "Medium",
    },
    {
        value: "Low",
        label: "Low",
    },
];

export const STATUS_OPTIONS = [
    {
        value: "todo",
        label: "To-do",
    },
    {
        value: "doing",
        label: "Doing",
    },
    {
        value: "done",
        label: "Done",
    },
];

export const SORT_OPTIONS = [
    {
        value: "dueAsc",
        label: "Due soon",
    },
    {
        value: "priorityDesc",
        label: "Priority",
    },
    {
        value: "courseAsc",
        label: "Course",
    },
    {
        value: "titleAsc",
        label: "Title",
    },
    {
        value: "statusAsc",
        label: "Status",
    },
];

export const CSV_HEADERS = [
    "title",
    "course",
    "dueDate",
    "dueTime",
    "priority",
    "estimateHours",
    "status",
    "notes",
];

export const PRIORITY_RANK = {
    High: 3,
    Medium: 2,
    Low: 1,
};

export const STATUS_LABELS = {
    todo: "To-do",
    doing: "Doing",
    done: "Done",
};

export const REMINDER_LABELS = {
    0: "At due",
    15: "15m before",
    30: "30m before",
    60: "1h before",
    1440: "1d before",
};
