export const downloadBlob = (blob, filename) => {
    if (!blob || !filename) {
        return;
    }

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = filename;

    link.style.display = "none";

    document.body.appendChild(link);

    link.click();
    link.remove();

    window.setTimeout(() => {
        URL.revokeObjectURL(url);
    }, 0);
};

export const downloadTextFile = ({
    content,
    filename,
    type = "text/plain;charset=utf-8",
}) => {
    const blob = new Blob([content], {
        type,
    });

    downloadBlob(blob, filename);
};

export const downloadCsvFile = (csv, filename = "assignments.csv") => {
    downloadTextFile({
        content: csv,
        filename,
        type: "text/csv;charset=utf-8",
    });
};

export const downloadCalendarFile = (calendar, filename) => {
    downloadTextFile({
        content: calendar,
        filename,
        type: "text/calendar;charset=utf-8",
    });
};
