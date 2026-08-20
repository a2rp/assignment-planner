import { FiFilter, FiSearch, FiX } from "react-icons/fi";

import { Styled } from "./styled";

const Filters = ({ filters, courses = [], onChange, onClear }) => {
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        onChange(name, type === "checkbox" ? checked : value);
    };

    const hasActiveFilters =
        filters.search ||
        filters.course ||
        filters.priority ||
        filters.status ||
        filters.hideDone ||
        filters.sort !== "dueAsc";

    return (
        <Styled.Wrapper>
            <div className="heading">
                <div>
                    <span className="label">Planner</span>

                    <h2>Your Assignments</h2>

                    <p>Search, filter, and sort your workload.</p>
                </div>

                <span className="filterIcon">
                    <FiFilter />
                </span>
            </div>

            <div className="filtersGrid">
                <label className="searchField">
                    <span className="visuallyHidden">Search assignments</span>

                    <FiSearch />

                    <input
                        type="search"
                        name="search"
                        value={filters.search}
                        onChange={handleChange}
                        placeholder="Search title, course, or notes..."
                    />
                </label>

                <label className="field">
                    <span className="visuallyHidden">Filter by course</span>

                    <select
                        name="course"
                        value={filters.course}
                        onChange={handleChange}
                    >
                        <option value="">All courses</option>

                        {courses.map((course) => (
                            <option key={course} value={course}>
                                {course}
                            </option>
                        ))}
                    </select>
                </label>

                <label className="field">
                    <span className="visuallyHidden">Filter by priority</span>

                    <select
                        name="priority"
                        value={filters.priority}
                        onChange={handleChange}
                    >
                        <option value="">All priorities</option>

                        <option value="High">High</option>

                        <option value="Medium">Medium</option>

                        <option value="Low">Low</option>
                    </select>
                </label>

                <label className="field">
                    <span className="visuallyHidden">Filter by status</span>

                    <select
                        name="status"
                        value={filters.status}
                        onChange={handleChange}
                    >
                        <option value="">All statuses</option>

                        <option value="todo">To-do</option>

                        <option value="doing">Doing</option>

                        <option value="done">Done</option>
                    </select>
                </label>

                <label className="field">
                    <span className="visuallyHidden">Sort assignments</span>

                    <select
                        name="sort"
                        value={filters.sort}
                        onChange={handleChange}
                    >
                        <option value="dueAsc">Due soon</option>

                        <option value="priorityDesc">Priority</option>

                        <option value="courseAsc">Course</option>

                        <option value="titleAsc">Title</option>

                        <option value="statusAsc">Status</option>
                    </select>
                </label>

                <label className="checkboxField">
                    <input
                        type="checkbox"
                        name="hideDone"
                        checked={filters.hideDone}
                        onChange={handleChange}
                    />

                    <span>Hide done</span>
                </label>

                <button
                    type="button"
                    className={`clearButton ${
                        hasActiveFilters ? "active" : ""
                    }`}
                    onClick={onClear}
                    disabled={!hasActiveFilters}
                >
                    <FiX />
                    <span>Clear filters</span>
                </button>
            </div>
        </Styled.Wrapper>
    );
};

export default Filters;
