import React from "react";
import { FiAlertTriangle, FiRefreshCw, FiTrash2, FiX } from "react-icons/fi";

import { Styled } from "./styled";

const ConfirmModal = ({
    isOpen,
    type = "danger",
    title = "Are you sure?",
    message = "",
    confirmText = "Confirm",
    cancelText = "Cancel",
    onConfirm,
    onClose,
}) => {
    if (!isOpen) {
        return null;
    }

    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    const getIcon = () => {
        if (type === "reset") {
            return <FiRefreshCw />;
        }

        return type === "danger" ? <FiTrash2 /> : <FiAlertTriangle />;
    };

    return (
        <Styled.Wrapper
            className={type}
            onMouseDown={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="confirmModalTitle"
        >
            <div
                className="modal"
                onMouseDown={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    className="closeButton"
                    onClick={onClose}
                    aria-label="Close confirmation"
                    title="Close"
                >
                    <FiX />
                </button>

                <div className="icon">{getIcon()}</div>

                <div className="content">
                    <span className="label">Confirmation required</span>

                    <h2 id="confirmModalTitle">{title}</h2>

                    <p>{message}</p>
                </div>

                <div className="actions">
                    <button
                        type="button"
                        className="cancelButton"
                        onClick={onClose}
                    >
                        {cancelText}
                    </button>

                    <button
                        type="button"
                        className="confirmButton"
                        onClick={onConfirm}
                    >
                        {getIcon()}

                        <span>{confirmText}</span>
                    </button>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ConfirmModal;
