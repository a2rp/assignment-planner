import { CSV_HEADERS } from "../data/constants";

import { createAssignmentId } from "./assignmentUtils";

const escapeCsvValue = (value) => {
    const text = String(value ?? "");

    if (text.includes('"') || text.includes(",") || text.includes("\n")) {
        return `"${text.replaceAll('"', '""')}"`;
    }

    return text;
};

const parseCsvLine = (line) => {
    const values = [];

    let current = "";
    let inQuotes = false;

    for (let index = 0; index < line.length; index += 1) {
        const character = line[index];

        if (inQuotes) {
            if (character === '"') {
                if (line[index + 1] === '"') {
                    current += '"';
                    index += 1;
                } else {
                    inQuotes = false;
                }
            } else {
                current += character;
            }

            continue;
        }

        if (character === '"') {
            inQuotes = true;
        } else if (character === ",") {
            values.push(current);
            current = "";
        } else {
            current += character;
        }
    }

    values.push(current);

    return values;
};

export const assignmentsToCsv = (assignments) => {
    const header = CSV_HEADERS.join(",");

    const rows = assignments.map((assignment) =>
        CSV_HEADERS.map((field) => escapeCsvValue(assignment[field])).join(","),
    );

    return [header, ...rows].join("\n");
};

export const csvToAssignments = (text) => {
    const lines = text.split(/\r?\n/).filter((line) => line.trim().length > 0);

    if (!lines.length) {
        return [];
    }

    const headers = parseCsvLine(lines[0]).map((header) => header.trim());

    const fieldIndexes = CSV_HEADERS.reduce((map, field) => {
        map[field] = headers.indexOf(field);

        return map;
    }, {});

    const importedAssignments = [];

    for (let index = 1; index < lines.length; index += 1) {
        const columns = parseCsvLine(lines[index]);

        const record = {};

        CSV_HEADERS.forEach((field) => {
            const fieldIndex = fieldIndexes[field];

            record[field] = fieldIndex >= 0 ? (columns[fieldIndex] ?? "") : "";
        });

        if (!record.title?.trim() || !record.dueDate?.trim()) {
            continue;
        }

        const now = Date.now();

        importedAssignments.push({
            id: createAssignmentId(),

            title: record.title.trim(),

            course: record.course?.trim() || "",

            dueDate: record.dueDate,

            dueTime: record.dueTime || "",

            priority: ["High", "Medium", "Low"].includes(record.priority)
                ? record.priority
                : "Medium",

            estimateHours: Number(record.estimateHours) || 0,

            status: ["todo", "doing", "done"].includes(record.status)
                ? record.status
                : "todo",

            notes: record.notes || "",

            createdAt: now,
            updatedAt: now,
        });
    }

    return importedAssignments;
};
