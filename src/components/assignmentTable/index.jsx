import React, { useEffect, useState } from "react";
import {
    FiCalendar,
    FiCheck,
    FiEdit3,
    FiRotateCcw,
    FiTrash2,
} from "react-icons/fi";

import { Styled } from "./styled";

const AssignmentTable = ({
    assignments = [],
    onEdit,
    onDelete,
    onToggleDone,
    onExportCalendar,
}) => {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        const updateCurrentTime = () => {
            setCurrentTime(Date.now());
        };

        updateCurrentTime();

        const intervalId = window.setInterval(updateCurrentTime, 60 * 1000);

        return () => {
            window.clearInterval(intervalId);
        };
    }, []);

    const getPriorityClass = (priority) => {
        if (priority === "High") {
            return "high";
        }

        if (priority === "Low") {
            return "low";
        }

        return "medium";
    };

    const getStatusLabel = (status) => {
        if (status === "doing") {
            return "Doing";
        }

        if (status === "done") {
            return "Done";
        }

        return "To-do";
    };

    const getDueTimestamp = (assignment) => {
        if (!assignment.dueDate) {
            return 0;
        }

        const [year, month, day] = assignment.dueDate.split("-").map(Number);

        const [hour, minute] = (assignment.dueTime || "23:59")
            .split(":")
            .map(Number);

        return new Date(year, month - 1, day, hour, minute).getTime();
    };

    const formatDueDate = (assignment) => {
        if (!assignment.dueDate) {
            return "No date";
        }

        const dueTimestamp = getDueTimestamp(assignment);

        const date = new Date(dueTimestamp);

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

        return (
            <div className="dueContent">
                <span>{dateText}</span>

                {timeText && <small>{timeText}</small>}
            </div>
        );
    };

    const isOverdue = (assignment) => {
        if (
            currentTime === 0 ||
            assignment.status === "done" ||
            !assignment.dueDate
        ) {
            return false;
        }

        return getDueTimestamp(assignment) < currentTime;
    };

    const isDueSoon = (assignment) => {
        if (
            currentTime === 0 ||
            assignment.status === "done" ||
            !assignment.dueDate
        ) {
            return false;
        }

        const remaining = getDueTimestamp(assignment) - currentTime;

        return remaining > 0 && remaining <= 6 * 60 * 60 * 1000;
    };

    if (!assignments.length) {
        return (
            <Styled.Wrapper>
                <div className="emptyState">
                    <div className="emptyIcon">
                        <FiCalendar />
                    </div>

                    <h3>No assignments found</h3>

                    <p>
                        Add a new assignment or change the current filters to
                        see results here.
                    </p>
                </div>
            </Styled.Wrapper>
        );
    }

    return (
        <Styled.Wrapper>
            <div className="tableScroll">
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Course</th>
                            <th>Due</th>
                            <th>Priority</th>
                            <th>Estimate</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {assignments.map((assignment) => {
                            const overdue = isOverdue(assignment);

                            const dueSoon = !overdue && isDueSoon(assignment);

                            return (
                                <tr
                                    key={assignment.id}
                                    onClick={() => onEdit(assignment.id)}
                                >
                                    <td>
                                        <div className="titleContent">
                                            <strong>
                                                {assignment.title || "Untitled"}
                                            </strong>

                                            {assignment.notes && (
                                                <small>
                                                    {assignment.notes}
                                                </small>
                                            )}
                                        </div>
                                    </td>

                                    <td>
                                        <span className="courseBadge">
                                            {assignment.course || "—"}
                                        </span>
                                    </td>

                                    <td>
                                        <div className="dueCell">
                                            {formatDueDate(assignment)}

                                            {overdue && (
                                                <span className="dueBadge overdue">
                                                    Overdue
                                                </span>
                                            )}

                                            {dueSoon && (
                                                <span className="dueBadge soon">
                                                    Due soon
                                                </span>
                                            )}
                                        </div>
                                    </td>

                                    <td>
                                        <span
                                            className={`priorityBadge ${getPriorityClass(
                                                assignment.priority,
                                            )}`}
                                        >
                                            {assignment.priority}
                                        </span>
                                    </td>

                                    <td>
                                        <span className="estimate">
                                            {assignment.estimateHours
                                                ? `${assignment.estimateHours}h`
                                                : "—"}
                                        </span>
                                    </td>

                                    <td>
                                        <span
                                            className={`statusBadge ${assignment.status}`}
                                        >
                                            {getStatusLabel(assignment.status)}
                                        </span>
                                    </td>

                                    <td>
                                        <div
                                            className="actions"
                                            onClick={(event) =>
                                                event.stopPropagation()
                                            }
                                        >
                                            <button
                                                type="button"
                                                className="actionButton"
                                                onClick={() =>
                                                    onToggleDone(assignment.id)
                                                }
                                                title={
                                                    assignment.status === "done"
                                                        ? "Move back to To-do"
                                                        : "Mark as done"
                                                }
                                                aria-label={
                                                    assignment.status === "done"
                                                        ? "Move assignment back to To-do"
                                                        : "Mark assignment as done"
                                                }
                                            >
                                                {assignment.status ===
                                                "done" ? (
                                                    <FiRotateCcw />
                                                ) : (
                                                    <FiCheck />
                                                )}
                                            </button>

                                            <button
                                                type="button"
                                                className="actionButton"
                                                onClick={() =>
                                                    onExportCalendar(
                                                        assignment.id,
                                                    )
                                                }
                                                title="Export calendar event"
                                                aria-label="Export calendar event"
                                            >
                                                <FiCalendar />
                                            </button>

                                            <button
                                                type="button"
                                                className="actionButton"
                                                onClick={() =>
                                                    onEdit(assignment.id)
                                                }
                                                title="Edit assignment"
                                                aria-label="Edit assignment"
                                            >
                                                <FiEdit3 />
                                            </button>

                                            <button
                                                type="button"
                                                className="actionButton danger"
                                                onClick={() =>
                                                    onDelete(assignment.id)
                                                }
                                                title="Delete assignment"
                                                aria-label="Delete assignment"
                                            >
                                                <FiTrash2 />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </Styled.Wrapper>
    );
};

export default AssignmentTable;
