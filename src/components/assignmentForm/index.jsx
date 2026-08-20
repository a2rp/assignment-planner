import React, { useRef } from "react";
import {
    FiCalendar,
    FiClock,
    FiFileText,
    FiPlus,
    FiRotateCcw,
} from "react-icons/fi";

import { Styled } from "./styled";

const AssignmentForm = ({ formData, onChange, onSubmit, onReset }) => {
    const handleChange = (event) => {
        const { name, value } = event.target;

        onChange(name, value);
    };

    return (
        <Styled.Wrapper>
            <div className="heading">
                <div>
                    <span className="label">New assignment</span>

                    <h2>Add Assignment</h2>

                    <p>
                        Add the assignment details, deadline, priority, and
                        reminder.
                    </p>
                </div>

                <span className="requiredText">* Required</span>
            </div>

            <form className="form" onSubmit={onSubmit} autoComplete="off">
                <div className="formGrid">
                    <label className="field">
                        <span className="fieldLabel">Title*</span>

                        <div className="inputWrapper">
                            <FiFileText />

                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="e.g. Operating systems lab report"
                                required
                            />
                        </div>
                    </label>

                    <label className="field">
                        <span className="fieldLabel">Course</span>

                        <input
                            type="text"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            placeholder="e.g. CS301"
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
                            <option value="Medium">Medium</option>

                            <option value="High">High</option>

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

                    <label className="field fieldFull">
                        <span className="fieldLabel">Notes</span>

                        <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Add instructions, references, or anything useful..."
                        />
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
                </div>

                <div className="actions">
                    <button type="submit" className="primaryButton">
                        <FiPlus />
                        <span>Add Assignment</span>
                    </button>

                    <button
                        type="button"
                        className="secondaryButton"
                        onClick={onReset}
                    >
                        <FiRotateCcw />
                        <span>Reset</span>
                    </button>
                </div>
            </form>
        </Styled.Wrapper>
    );
};

export default AssignmentForm;
