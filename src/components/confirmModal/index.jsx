import React from "react";
import { FiAlertTriangle, FiTrash2, FiX } from "react-icons/fi";

import { Styled } from "./styled";

const ConfirmModal = ({
    isOpen,
    title = "Delete Assignment?",
    message = "",
    confirmText = "Delete",
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

    return (
        <Styled.Wrapper
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
                    aria-label="Close"
                    title="Close"
                >
                    <FiX />
                </button>

                <div className="icon">
                    <FiAlertTriangle />
                </div>

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
                        className="deleteButton"
                        onClick={onConfirm}
                    >
                        <FiTrash2 />

                        <span>{confirmText}</span>
                    </button>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ConfirmModal;
