import React, { useEffect, useRef, useState } from "react";
import { FiCalendar, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

import { Styled } from "./styled";

const WEEK_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const pad = (value) => {
    return String(value).padStart(2, "0");
};

const toDateValue = (date) => {
    return [
        date.getFullYear(),
        pad(date.getMonth() + 1),
        pad(date.getDate()),
    ].join("-");
};

const parseDateValue = (value) => {
    if (!value) {
        return null;
    }

    const [year, month, day] = value.split("-").map(Number);

    if (
        !Number.isFinite(year) ||
        !Number.isFinite(month) ||
        !Number.isFinite(day)
    ) {
        return null;
    }

    return new Date(year, month - 1, day);
};

const isSameDate = (a, b) => {
    if (!a || !b) {
        return false;
    }

    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
};

const DatePicker = ({ value, onChange, placeholder = "Select date" }) => {
    const wrapperRef = useRef(null);

    const selectedDate = parseDateValue(value);

    const today = new Date();

    const initialViewDate = selectedDate || today;

    const [isOpen, setIsOpen] = useState(false);

    const [viewYear, setViewYear] = useState(initialViewDate.getFullYear());

    const [viewMonth, setViewMonth] = useState(initialViewDate.getMonth());

    useEffect(() => {
        if (!isOpen) {
            return undefined;
        }

        const handleOutsideClick = (event) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);

            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    useEffect(() => {
        if (!selectedDate) {
            return;
        }

        setViewYear(selectedDate.getFullYear());

        setViewMonth(selectedDate.getMonth());
    }, [value]);

    const handlePreviousMonth = () => {
        setViewMonth((current) => {
            if (current === 0) {
                setViewYear((year) => year - 1);

                return 11;
            }

            return current - 1;
        });
    };

    const handleNextMonth = () => {
        setViewMonth((current) => {
            if (current === 11) {
                setViewYear((year) => year + 1);

                return 0;
            }

            return current + 1;
        });
    };

    const handleSelectDate = (date) => {
        onChange(toDateValue(date));

        setIsOpen(false);
    };

    const handleToday = () => {
        const now = new Date();

        onChange(toDateValue(now));

        setViewYear(now.getFullYear());

        setViewMonth(now.getMonth());

        setIsOpen(false);
    };

    const handleClear = () => {
        onChange("");
        setIsOpen(false);
    };

    const firstDayOfMonth = new Date(viewYear, viewMonth, 1).getDay();

    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

    const daysInPreviousMonth = new Date(viewYear, viewMonth, 0).getDate();

    const calendarDays = [];

    for (let index = firstDayOfMonth - 1; index >= 0; index -= 1) {
        calendarDays.push({
            date: new Date(
                viewYear,
                viewMonth - 1,
                daysInPreviousMonth - index,
            ),
            currentMonth: false,
        });
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
        calendarDays.push({
            date: new Date(viewYear, viewMonth, day),
            currentMonth: true,
        });
    }

    while (calendarDays.length < 42) {
        const day = calendarDays.length - (firstDayOfMonth + daysInMonth) + 1;

        calendarDays.push({
            date: new Date(viewYear, viewMonth + 1, day),
            currentMonth: false,
        });
    }

    const monthTitle = new Date(viewYear, viewMonth, 1).toLocaleDateString([], {
        month: "long",
        year: "numeric",
    });

    const displayValue = selectedDate
        ? selectedDate.toLocaleDateString([], {
              day: "2-digit",
              month: "short",
              year: "numeric",
          })
        : "";

    return (
        <Styled.Wrapper ref={wrapperRef}>
            <button
                type="button"
                className={`trigger ${isOpen ? "active" : ""}`}
                onClick={() => setIsOpen((current) => !current)}
                aria-haspopup="dialog"
                aria-expanded={isOpen}
            >
                <FiCalendar />

                <span className={displayValue ? "value" : "placeholder"}>
                    {displayValue || placeholder}
                </span>

                {value ? (
                    <span
                        className="clearIcon"
                        onClick={(event) => {
                            event.stopPropagation();
                            handleClear();
                        }}
                    >
                        <FiX />
                    </span>
                ) : (
                    <span className="calendarIcon">
                        <FiCalendar />
                    </span>
                )}
            </button>

            {isOpen && (
                <div
                    className="calendar"
                    role="dialog"
                    aria-label="Choose due date"
                >
                    <div className="calendarHeader">
                        <button
                            type="button"
                            className="navButton"
                            onClick={handlePreviousMonth}
                            aria-label="Previous month"
                        >
                            <FiChevronLeft />
                        </button>

                        <strong>{monthTitle}</strong>

                        <button
                            type="button"
                            className="navButton"
                            onClick={handleNextMonth}
                            aria-label="Next month"
                        >
                            <FiChevronRight />
                        </button>
                    </div>

                    <div className="weekDays">
                        {WEEK_DAYS.map((day) => (
                            <span key={day}>{day}</span>
                        ))}
                    </div>

                    <div className="days">
                        {calendarDays.map(({ date, currentMonth }) => {
                            const selected = isSameDate(date, selectedDate);

                            const isToday = isSameDate(date, today);

                            return (
                                <button
                                    type="button"
                                    key={date.toISOString()}
                                    className={[
                                        "day",
                                        !currentMonth ? "outside" : "",
                                        selected ? "selected" : "",
                                        isToday ? "today" : "",
                                    ]
                                        .filter(Boolean)
                                        .join(" ")}
                                    onClick={() => handleSelectDate(date)}
                                >
                                    {date.getDate()}
                                </button>
                            );
                        })}
                    </div>

                    <div className="calendarFooter">
                        <button
                            type="button"
                            onClick={handleClear}
                            disabled={!value}
                        >
                            Clear
                        </button>

                        <button
                            type="button"
                            className="todayButton"
                            onClick={handleToday}
                        >
                            Today
                        </button>
                    </div>
                </div>
            )}
        </Styled.Wrapper>
    );
};

export default DatePicker;
