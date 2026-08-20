import { useCallback, useMemo, useState } from "react";

import {
    DEFAULT_ASSIGNMENT_FORM,
    DEFAULT_FILTERS,
    STORAGE_KEYS,
} from "../data/constants";

import {
    createAssignmentId,
    getAssignmentSummary,
    getFilteredAssignments,
    getUniqueCourses,
    normalizeAssignment,
} from "../utils/assignmentUtils";

import useLocalStorage from "./useLocalStorage";

const useAssignments = (currentTime) => {
    const [assignments, setAssignments] = useLocalStorage(
        STORAGE_KEYS.assignments,
        [],
    );

    const [filters, setFilters] = useLocalStorage(
        STORAGE_KEYS.filters,
        DEFAULT_FILTERS,
    );

    const [formData, setFormData] = useState({
        ...DEFAULT_ASSIGNMENT_FORM,
    });

    const [editFormData, setEditFormData] = useState({
        ...DEFAULT_ASSIGNMENT_FORM,
    });

    const [editingId, setEditingId] = useState(null);

    const updateFormField = useCallback((name, value) => {
        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    }, []);

    const resetForm = useCallback(() => {
        setFormData({
            ...DEFAULT_ASSIGNMENT_FORM,
        });
    }, []);

    const addAssignment = useCallback(() => {
        const title = formData.title.trim();

        if (!title || !formData.dueDate) {
            return {
                success: false,
                message: "Title and due date are required.",
            };
        }

        const now = Date.now();

        const assignment = normalizeAssignment({
            ...formData,

            id: createAssignmentId(),

            createdAt: now,
            updatedAt: now,
        });

        setAssignments((current) => [...current, assignment]);

        resetForm();

        return {
            success: true,
            assignment,
        };
    }, [formData, resetForm, setAssignments]);

    const updateAssignment = useCallback(
        (id, changes) => {
            setAssignments((current) =>
                current.map((assignment) =>
                    assignment.id === id
                        ? {
                              ...assignment,
                              ...changes,

                              updatedAt: Date.now(),
                          }
                        : assignment,
                ),
            );
        },
        [setAssignments],
    );

    const deleteAssignment = useCallback(
        (id) => {
            setAssignments((current) =>
                current.filter((assignment) => assignment.id !== id),
            );

            if (editingId === id) {
                setEditingId(null);
            }
        },
        [editingId, setAssignments],
    );

    const clearAllAssignments = useCallback(() => {
        setAssignments([]);
        setEditingId(null);
    }, [setAssignments]);

    const toggleDone = useCallback(
        (id) => {
            setAssignments((current) =>
                current.map((assignment) => {
                    if (assignment.id !== id) {
                        return assignment;
                    }

                    return {
                        ...assignment,

                        status: assignment.status === "done" ? "todo" : "done",

                        updatedAt: Date.now(),
                    };
                }),
            );
        },
        [setAssignments],
    );

    const openEdit = useCallback(
        (id) => {
            const assignment = assignments.find((item) => item.id === id);

            if (!assignment) {
                return false;
            }

            setEditingId(id);

            setEditFormData({
                title: assignment.title || "",

                course: assignment.course || "",

                dueDate: assignment.dueDate || "",

                dueTime: assignment.dueTime || "",

                priority: assignment.priority || "Medium",

                estimateHours: String(assignment.estimateHours ?? 1),

                status: assignment.status || "todo",

                notes: assignment.notes || "",
            });

            return true;
        },
        [assignments],
    );

    const closeEdit = useCallback(() => {
        setEditingId(null);

        setEditFormData({
            ...DEFAULT_ASSIGNMENT_FORM,
        });
    }, []);

    const updateEditField = useCallback((name, value) => {
        setEditFormData((current) => ({
            ...current,
            [name]: value,
        }));
    }, []);

    const saveEdit = useCallback(() => {
        if (!editingId) {
            return {
                success: false,
                message: "No assignment is selected.",
            };
        }

        if (!editFormData.title.trim() || !editFormData.dueDate) {
            return {
                success: false,
                message: "Title and due date are required.",
            };
        }

        updateAssignment(editingId, {
            title: editFormData.title.trim(),

            course: editFormData.course.trim(),

            dueDate: editFormData.dueDate,

            dueTime: editFormData.dueTime,

            priority: editFormData.priority,

            estimateHours: Number(editFormData.estimateHours) || 0,

            status: editFormData.status,

            notes: editFormData.notes.trim(),
        });

        closeEdit();

        return {
            success: true,
        };
    }, [closeEdit, editFormData, editingId, updateAssignment]);

    const updateFilter = useCallback(
        (name, value) => {
            setFilters((current) => ({
                ...current,
                [name]: value,
            }));
        },
        [setFilters],
    );

    const clearFilters = useCallback(() => {
        setFilters({
            ...DEFAULT_FILTERS,
        });
    }, [setFilters]);

    const importAssignments = useCallback(
        (items) => {
            if (!items.length) {
                return;
            }

            setAssignments((current) => [...current, ...items]);
        },
        [setAssignments],
    );

    const courses = useMemo(() => getUniqueCourses(assignments), [assignments]);

    const filteredAssignments = useMemo(
        () => getFilteredAssignments(assignments, filters),
        [assignments, filters],
    );

    const summary = useMemo(
        () => getAssignmentSummary(assignments, currentTime),
        [assignments, currentTime],
    );

    return {
        assignments,
        setAssignments,

        formData,
        updateFormField,
        resetForm,
        addAssignment,

        editFormData,
        editingId,
        isEditOpen: Boolean(editingId),

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
    };
};

export default useAssignments;
