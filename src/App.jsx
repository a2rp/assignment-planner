import React, { Suspense, lazy, useEffect, useMemo, useState } from "react";
import ConfirmModal from "./components/confirmModal";
import Header from "./components/header";
import AssignmentForm from "./components/assignmentForm";
import Summary from "./components/summary";
import Filters from "./components/filters";
import AssignmentTable from "./components/assignmentTable";
import AssignmentCard from "./components/assignmentCard";
import Toast from "./components/toast";
import Loader from "./components/loader";
import GoToTop from "./components/goToTop";
import Footer from "./components/footer";

import useAssignments from "./hooks/useAssignments";

import { STORAGE_KEYS } from "./data/constants";

import { assignmentsToCsv, csvToAssignments } from "./utils/csv";

import {
    createAssignmentIcs,
    getAssignmentIcsFilename,
} from "./utils/calendar";

import { downloadCalendarFile, downloadCsvFile } from "./utils/fileDownload";

import { Styled } from "./App.styled";

const EditModal = lazy(() => import("./components/editModal"));

const ImportExportTools = lazy(() => import("./components/importExportTools"));

const getInitialTheme = () => {
    const storedTheme = localStorage.getItem(STORAGE_KEYS.theme);

    if (storedTheme === "light" || storedTheme === "dark") {
        return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
};

const App = () => {
    const [currentTime, setCurrentTime] = useState(() => Date.now());

    const [theme, setTheme] = useState(getInitialTheme);

    const [isToolsOpen, setIsToolsOpen] = useState(false);

    const [toast, setToast] = useState({
        visible: false,
        message: "",
        type: "info",
    });

    const [deleteTarget, setDeleteTarget] = useState(null);
    const [confirmation, setConfirmation] = useState(null);

    const {
        assignments,

        formData,
        updateFormField,
        resetForm,
        addAssignment,

        editFormData,
        editingId,
        isEditOpen,
        openEdit,
        closeEdit,
        updateEditField,
        saveEdit,

        updateAssignment,
        deleteAssignment,
        clearAllAssignments,
        toggleDone,

        filters,
        updateFilter,
        clearFilters,

        courses,
        filteredAssignments,
        summary,

        importAssignments,
    } = useAssignments(currentTime);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setCurrentTime(Date.now());
        }, 60 * 1000);

        return () => {
            window.clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);

        localStorage.setItem(STORAGE_KEYS.theme, theme);
    }, [theme]);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key !== "Escape") {
                return;
            }

            if (isEditOpen) {
                closeEdit();
            }

            if (isToolsOpen) {
                setIsToolsOpen(false);
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, [closeEdit, isEditOpen, isToolsOpen]);

    useEffect(() => {
        const modalOpen = isEditOpen || isToolsOpen;

        document.body.style.overflow = modalOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isEditOpen, isToolsOpen]);

    useEffect(() => {
        if (!toast.visible) {
            return undefined;
        }

        const timeoutId = window.setTimeout(() => {
            setToast((current) => ({
                ...current,
                visible: false,
            }));
        }, 2400);

        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [toast]);

    const showToast = (message, type = "info") => {
        setToast({
            visible: true,
            message,
            type,
        });
    };

    const handleToggleTheme = () => {
        setTheme((current) => (current === "dark" ? "light" : "dark"));
    };

    const handleSubmitAssignment = (event) => {
        event.preventDefault();

        const result = addAssignment();

        if (!result.success) {
            showToast(result.message, "error");

            return;
        }

        showToast("Assignment added.", "success");
    };

    const handleResetForm = () => {
        const hasChanges = Boolean(
            formData.title.trim() ||
            formData.course.trim() ||
            formData.dueDate ||
            formData.dueTime ||
            formData.notes.trim() ||
            formData.priority !== "Medium" ||
            String(formData.estimateHours) !== "1" ||
            formData.status !== "todo",
        );

        if (!hasChanges) {
            resetForm();

            return;
        }

        setConfirmation({
            type: "reset",
            title: "Reset Form?",
            message:
                "All values entered in the assignment form will be cleared.",
            confirmText: "Reset Form",
            cancelText: "Keep Editing",
            action: "reset",
        });
    };

    const handleSaveEdit = (event) => {
        event.preventDefault();

        const result = saveEdit();

        if (!result.success) {
            showToast(result.message, "error");

            return;
        }

        showToast("Assignment updated.", "success");
    };

    const handleDelete = (id) => {
        const assignment = assignments.find((item) => item.id === id);

        if (!assignment) {
            return;
        }

        setDeleteTarget(assignment);
    };

    const handleDeleteFromEdit = () => {
        if (!editingId) {
            return;
        }

        handleDelete(editingId);
    };

    const handleToggleDone = (id) => {
        const assignment = assignments.find((item) => item.id === id);

        if (!assignment) {
            return;
        }

        const willBeDone = assignment.status !== "done";

        toggleDone(id);

        showToast(
            willBeDone
                ? "Assignment completed."
                : "Assignment moved back to To-do.",
            "success",
        );
    };

    const handleExportCsv = () => {
        if (!assignments.length) {
            showToast("There are no assignments to export.", "info");

            return;
        }

        const csv = assignmentsToCsv(assignments);

        downloadCsvFile(csv, "assignments.csv");

        showToast("CSV exported.", "success");
    };

    const handleImportCsv = async (event) => {
        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        try {
            const text = await file.text();

            const imported = csvToAssignments(text);

            if (!imported.length) {
                showToast(
                    "No valid assignments were found in the CSV.",
                    "error",
                );

                return;
            }

            importAssignments(imported);

            showToast(
                `Imported ${imported.length} assignment${
                    imported.length === 1 ? "" : "s"
                }.`,
                "success",
            );
        } catch {
            showToast("CSV import failed.", "error");
        } finally {
            event.target.value = "";
        }
    };

    const handleExportCalendar = (id) => {
        const assignment = assignments.find((item) => item.id === id);

        if (!assignment) {
            return;
        }

        const calendar = createAssignmentIcs(assignment);

        if (!calendar) {
            showToast(
                "This assignment does not have a valid due date.",
                "error",
            );

            return;
        }

        downloadCalendarFile(calendar, getAssignmentIcsFilename(assignment));

        showToast("Calendar event exported.", "success");
    };

    const handleClearAll = () => {
        if (!assignments.length) {
            showToast("There are no assignments to clear.", "info");

            return;
        }

        setConfirmation({
            type: "danger",
            title: "Clear All Assignments?",
            message: `This will permanently delete all ${assignments.length} assignments. This action cannot be undone.`,
            confirmText: "Clear All",
            cancelText: "Keep Assignments",
            action: "clearAll",
        });
    };

    const handleConfirmation = () => {
        if (!confirmation) {
            return;
        }

        if (confirmation.action === "reset") {
            resetForm();

            showToast("Form reset.", "info");
        }

        if (confirmation.action === "clearAll") {
            clearAllAssignments();

            setIsToolsOpen(false);

            showToast("All assignments cleared.", "success");
        }

        setConfirmation(null);
    };

    const plannerContent = useMemo(
        () => ({
            total: summary.total,
            todo: summary.todo,
            doing: summary.doing,
            done: summary.done,
            overdue: summary.overdue,
        }),
        [summary],
    );

    const handleConfirmDelete = () => {
        if (!deleteTarget) {
            return;
        }

        deleteAssignment(deleteTarget.id);

        setDeleteTarget(null);

        closeEdit();

        showToast("Assignment deleted.", "success");
    };

    return (
        <Styled.Wrapper>
            <Header
                theme={theme}
                onToggleTheme={handleToggleTheme}
                onExportCsv={handleExportCsv}
                onImportCsv={handleImportCsv}
                onPrint={() => window.print()}
            />

            <main className="main">
                <section className="intro">
                    <div className="introContent">
                        <span className="label">Study dashboard</span>

                        <h2>Stay ahead of every deadline.</h2>

                        <p>
                            Organize assignments, track progress, manage
                            priorities, and keep upcoming work visible from one
                            focused planner.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="toolsButton"
                        onClick={() => setIsToolsOpen(true)}
                    >
                        Planner Tools
                    </button>
                </section>

                <section className="summarySection">
                    <Summary {...plannerContent} />
                </section>

                <section className="planner">
                    <aside className="left">
                        <AssignmentForm
                            formData={formData}
                            onChange={updateFormField}
                            onSubmit={handleSubmitAssignment}
                            onReset={handleResetForm}
                        />
                    </aside>

                    <div className="right">
                        <Filters
                            filters={filters}
                            courses={courses}
                            onChange={updateFilter}
                            onClear={clearFilters}
                        />

                        <div className="list">
                            <AssignmentTable
                                assignments={filteredAssignments}
                                onEdit={openEdit}
                                onDelete={handleDelete}
                                onToggleDone={handleToggleDone}
                                onExportCalendar={handleExportCalendar}
                            />

                            <AssignmentCard
                                assignments={filteredAssignments}
                                onEdit={openEdit}
                                onDelete={handleDelete}
                                onToggleDone={handleToggleDone}
                                onExportCalendar={handleExportCalendar}
                            />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            <GoToTop />

            <Toast
                visible={toast.visible}
                message={toast.message}
                type={toast.type}
                onClose={() =>
                    setToast((current) => ({
                        ...current,
                        visible: false,
                    }))
                }
            />

            <ConfirmModal
                isOpen={Boolean(deleteTarget)}
                title="Delete Assignment?"
                message={
                    deleteTarget
                        ? `Are you sure you want to delete "${deleteTarget.title}"? This action cannot be undone.`
                        : ""
                }
                confirmText="Delete Assignment"
                cancelText="Keep Assignment"
                onConfirm={handleConfirmDelete}
                onClose={() => setDeleteTarget(null)}
            />

            {isEditOpen && (
                <Suspense fallback={<Loader text="Loading editor..." />}>
                    <EditModal
                        isOpen={isEditOpen}
                        formData={editFormData}
                        onChange={updateEditField}
                        onSave={handleSaveEdit}
                        onDelete={handleDeleteFromEdit}
                        onClose={closeEdit}
                    />
                </Suspense>
            )}

            {isToolsOpen && (
                <Suspense fallback={<Loader text="Loading tools..." />}>
                    <ImportExportTools
                        isOpen={isToolsOpen}
                        onClose={() => setIsToolsOpen(false)}
                        onExportCsv={handleExportCsv}
                        onImportCsv={handleImportCsv}
                        onPrint={() => window.print()}
                        onClearAll={handleClearAll}
                        totalAssignments={assignments.length}
                    />
                </Suspense>
            )}

            <ConfirmModal
                isOpen={Boolean(confirmation)}
                type={confirmation?.type}
                title={confirmation?.title}
                message={confirmation?.message}
                confirmText={confirmation?.confirmText}
                cancelText={confirmation?.cancelText}
                onConfirm={handleConfirmation}
                onClose={() => setConfirmation(null)}
            />
        </Styled.Wrapper>
    );
};

export default App;
