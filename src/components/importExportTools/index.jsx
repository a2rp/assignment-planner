import React from "react";
import { FiDownload, FiPrinter, FiTrash2, FiUpload, FiX } from "react-icons/fi";

import { Styled } from "./styled";

const ImportExportTools = ({
    isOpen,
    onClose,
    onExportCsv,
    onImportCsv,
    onPrint,
    onClearAll,
    totalAssignments = 0,
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
        <Styled.Wrapper onMouseDown={handleBackdropClick}>
            <div
                className="panel"
                role="dialog"
                aria-modal="true"
                aria-labelledby="toolsTitle"
                onMouseDown={(event) => event.stopPropagation()}
            >
                <div className="header">
                    <div>
                        <span className="label">Planner tools</span>

                        <h2 id="toolsTitle">Import, Export & Print</h2>

                        <p>
                            Move planner data, create a printable copy, or clear
                            stored assignments.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="closeButton"
                        onClick={onClose}
                        aria-label="Close planner tools"
                        title="Close"
                    >
                        <FiX />
                    </button>
                </div>

                <div className="content">
                    <div className="toolGrid">
                        <button
                            type="button"
                            className="toolCard"
                            onClick={onExportCsv}
                            disabled={totalAssignments === 0}
                        >
                            <span className="icon">
                                <FiDownload />
                            </span>

                            <span className="text">
                                <strong>Export CSV</strong>

                                <small>
                                    Download all assignments as a CSV file.
                                </small>
                            </span>
                        </button>

                        <label className="toolCard importCard">
                            <span className="icon">
                                <FiUpload />
                            </span>

                            <span className="text">
                                <strong>Import CSV</strong>

                                <small>
                                    Add assignments from a compatible CSV file.
                                </small>
                            </span>

                            <input
                                type="file"
                                accept=".csv,text/csv"
                                onChange={onImportCsv}
                            />
                        </label>

                        <button
                            type="button"
                            className="toolCard"
                            onClick={onPrint}
                            disabled={totalAssignments === 0}
                        >
                            <span className="icon">
                                <FiPrinter />
                            </span>

                            <span className="text">
                                <strong>Print Planner</strong>

                                <small>
                                    Open the browser print view for assignments.
                                </small>
                            </span>
                        </button>

                        <button
                            type="button"
                            className="toolCard danger"
                            onClick={onClearAll}
                            disabled={totalAssignments === 0}
                        >
                            <span className="icon">
                                <FiTrash2 />
                            </span>

                            <span className="text">
                                <strong>Clear All</strong>

                                <small>
                                    Permanently remove every stored assignment.
                                </small>
                            </span>
                        </button>
                    </div>

                    <div className="info">
                        <span>{totalAssignments}</span>

                        <p>
                            {totalAssignments === 1
                                ? "assignment currently stored in this browser."
                                : "assignments currently stored in this browser."}
                        </p>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ImportExportTools;
