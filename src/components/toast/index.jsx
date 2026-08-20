import React from "react";
import { FiAlertCircle, FiCheckCircle, FiInfo, FiX } from "react-icons/fi";

import { Styled } from "./styled";

const Toast = ({ message = "", type = "info", visible = false, onClose }) => {
    if (!visible || !message) {
        return null;
    }

    const getIcon = () => {
        if (type === "success") {
            return <FiCheckCircle />;
        }

        if (type === "error") {
            return <FiAlertCircle />;
        }

        return <FiInfo />;
    };

    return (
        <Styled.Wrapper
            className={type}
            role="status"
            aria-live="polite"
            aria-atomic="true"
        >
            <span className="icon">{getIcon()}</span>

            <p>{message}</p>

            <button
                type="button"
                className="closeButton"
                onClick={onClose}
                aria-label="Close notification"
                title="Close"
            >
                <FiX />
            </button>
        </Styled.Wrapper>
    );
};

export default Toast;
