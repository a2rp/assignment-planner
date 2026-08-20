import React from "react";
import { FiClock, FiSave, FiTrash2, FiX } from "react-icons/fi";

import { Styled } from "./styled";

const EditModal = ({
    isOpen,
    formData,
    onChange,
    onSave,
    onDelete,
    onClose,
}) => {
    if (!isOpen) {
        return null;
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        onChange(name, value);
    };

    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <Styled.Wrapper
            role="dialog"
            aria-modal="true"
            aria-labelledby="editAssignmentTitle"
            onMouseDown={handleBackdropClick}
        >
            <div
                className="modal"
                onMouseDown={(event) => event.stopPropagation()}
            >
                <div className="header">
                    <div>
                        <span className="label">Update assignment</span>

                        <h2 id="editAssignmentTitle">Edit Assignment</h2>

                        <p>
                            Update the assignment details, deadline, status, or
                            reminder.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="closeButton"
                        onClick={onClose}
                        aria-label="Close edit assignment"
                        title="Close"
                    >
                        <FiX />
                    </button>
                </div>

                <form className="form" onSubmit={onSave}>
                    <div className="formGrid">
                        <label className="field">
                            <span className="fieldLabel">Title*</span>

                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label className="field">
                            <span className="fieldLabel">Course</span>

                            <input
                                type="text"
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                            />
                        </label>

                        <label className="field">
                            <span className="fieldLabel">Due Date*</span>

                            <input
                                type="date"
                                name="dueDate"
                                value={formData.dueDate}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label className="field">
                            <span className="fieldLabel">Due Time</span>

                            <div className="inputWrapper">
                                <FiClock />

                                <input
                                    type="time"
                                    name="dueTime"
                                    value={formData.dueTime}
                                    onChange={handleChange}
                                />
                            </div>
                        </label>

                        <label className="field">
                            <span className="fieldLabel">Priority</span>

                            <select
                                name="priority"
                                value={formData.priority}
                                onChange={handleChange}
                            >
                                <option value="High">High</option>

                                <option value="Medium">Medium</option>

                                <option value="Low">Low</option>
                            </select>
                        </label>

                        <label className="field">
                            <span className="fieldLabel">Estimate</span>

                            <div className="estimateField">
                                <input
                                    type="number"
                                    name="estimateHours"
                                    value={formData.estimateHours}
                                    onChange={handleChange}
                                    min="0"
                                    step="0.5"
                                />

                                <span>hrs</span>
                            </div>
                        </label>

                        <label className="field">
                            <span className="fieldLabel">Status</span>

                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                            >
                                <option value="todo">To-do</option>

                                <option value="doing">Doing</option>

                                <option value="done">Done</option>
                            </select>
                        </label>

                        <label className="field fieldFull">
                            <span className="fieldLabel">Notes</span>

                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                rows="5"
                                placeholder="Add instructions, references, or anything useful..."
                            />
                        </label>
                    </div>

                    <div className="actions">
                        <button
                            type="button"
                            className="deleteButton"
                            onClick={onDelete}
                        >
                            <FiTrash2 />
                            <span>Delete</span>
                        </button>

                        <div className="rightActions">
                            <button
                                type="button"
                                className="secondaryButton"
                                onClick={onClose}
                            >
                                Cancel
                            </button>

                            <button type="submit" className="primaryButton">
                                <FiSave />
                                <span>Save Changes</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Styled.Wrapper>
    );
};

export default EditModal;
