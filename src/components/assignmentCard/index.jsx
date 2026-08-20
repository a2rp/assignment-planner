import React, { useEffect, useState } from "react";
import {
    FiCalendar,
    FiCheck,
    FiClock,
    FiEdit3,
    FiRotateCcw,
    FiTrash2,
} from "react-icons/fi";

import { Styled } from "./styled";

const AssignmentCard = ({
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
            return "No due date";
        }

        const date = new Date(getDueTimestamp(assignment));

        const dateText = date.toLocaleDateString([], {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
        });

        if (!assignment.dueTime) {
            return dateText;
        }

        const timeText = date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });

        return `${dateText} at ${timeText}`;
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

    const getStatusLabel = (status) => {
        if (status === "doing") {
            return "Doing";
        }

        if (status === "done") {
            return "Done";
        }

        return "To-do";
    };

    const getPriorityClass = (priority) => {
        if (priority === "High") {
            return "high";
        }

        if (priority === "Low") {
            return "low";
        }

        return "medium";
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
            <div className="cards">
                {assignments.map((assignment) => {
                    const overdue = isOverdue(assignment);

                    const dueSoon = !overdue && isDueSoon(assignment);

                    return (
                        <article key={assignment.id} className="card">
                            <div className="top">
                                <div className="titleBlock">
                                    <h3>{assignment.title || "Untitled"}</h3>

                                    <span className="course">
                                        {assignment.course || "No course"}
                                    </span>
                                </div>

                                <span
                                    className={`priority ${getPriorityClass(
                                        assignment.priority,
                                    )}`}
                                >
                                    {assignment.priority}
                                </span>
                            </div>

                            {assignment.notes && (
                                <p className="notes">{assignment.notes}</p>
                            )}

                            <div className="infoGrid">
                                <div className="infoItem">
                                    <span className="infoLabel">Due</span>

                                    <div className="infoValue dueValue">
                                        <FiClock />

                                        <span>{formatDueDate(assignment)}</span>
                                    </div>

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

                                <div className="infoItem">
                                    <span className="infoLabel">Status</span>

                                    <span
                                        className={`status ${assignment.status}`}
                                    >
                                        {getStatusLabel(assignment.status)}
                                    </span>
                                </div>

                                <div className="infoItem">
                                    <span className="infoLabel">Estimate</span>

                                    <strong>
                                        {assignment.estimateHours
                                            ? `${assignment.estimateHours}h`
                                            : "—"}
                                    </strong>
                                </div>
                            </div>

                            <div className="actions">
                                <button
                                    type="button"
                                    onClick={() => onToggleDone(assignment.id)}
                                >
                                    {assignment.status === "done" ? (
                                        <FiRotateCcw />
                                    ) : (
                                        <FiCheck />
                                    )}

                                    <span>
                                        {assignment.status === "done"
                                            ? "Undo"
                                            : "Done"}
                                    </span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        onExportCalendar(assignment.id)
                                    }
                                >
                                    <FiCalendar />
                                    <span>Calendar</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => onEdit(assignment.id)}
                                >
                                    <FiEdit3 />
                                    <span>Edit</span>
                                </button>

                                <button
                                    type="button"
                                    className="danger"
                                    onClick={() => onDelete(assignment.id)}
                                >
                                    <FiTrash2 />
                                    <span>Delete</span>
                                </button>
                            </div>
                        </article>
                    );
                })}
            </div>
        </Styled.Wrapper>
    );
};

export default AssignmentCard;
