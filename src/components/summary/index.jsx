import React from "react";
import {
    FiAlertCircle,
    FiCheckCircle,
    FiClock,
    FiList,
    FiPlayCircle,
} from "react-icons/fi";

import { Styled } from "./styled";

const Summary = ({ total = 0, todo = 0, doing = 0, done = 0, overdue = 0 }) => {
    const items = [
        {
            key: "total",
            label: "Total",
            value: total,
            text: "All assignments",
            icon: FiList,
        },
        {
            key: "todo",
            label: "To-do",
            value: todo,
            text: "Not started",
            icon: FiClock,
        },
        {
            key: "doing",
            label: "Doing",
            value: doing,
            text: "In progress",
            icon: FiPlayCircle,
        },
        {
            key: "done",
            label: "Done",
            value: done,
            text: "Completed",
            icon: FiCheckCircle,
        },
        {
            key: "overdue",
            label: "Overdue",
            value: overdue,
            text: "Needs attention",
            icon: FiAlertCircle,
        },
    ];

    return (
        <Styled.Wrapper>
            <div className="heading">
                <div>
                    <span className="label">Overview</span>

                    <h2>Assignment Summary</h2>
                </div>

                <p>A quick view of your current workload.</p>
            </div>

            <div className="grid">
                {items.map((item) => {
                    const Icon = item.icon;

                    return (
                        <article key={item.key} className={`card ${item.key}`}>
                            <div className="cardTop">
                                <span className="cardLabel">{item.label}</span>

                                <span className="icon">
                                    <Icon />
                                </span>
                            </div>

                            <strong>{item.value}</strong>

                            <small>{item.text}</small>
                        </article>
                    );
                })}
            </div>
        </Styled.Wrapper>
    );
};

export default Summary;
