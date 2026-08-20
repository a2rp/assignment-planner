import React from "react";
import {
    FiBell,
    FiDownload,
    FiMoon,
    FiPrinter,
    FiSun,
    FiUpload,
} from "react-icons/fi";

import { Styled } from "./styled";

const Header = ({
    theme,
    onToggleTheme,
    onExportCsv,
    onImportCsv,
    onPrint,
}) => {
    const isDark = theme === "dark";

    return (
        <Styled.Wrapper>
            <div className="content">
                <div className="brand">
                    <div className="logo">
                        <span>AP</span>
                    </div>

                    <div className="brandText">
                        <h1>Assignment Planner</h1>

                        <p>
                            Plan smarter, track deadlines, and stay on top of
                            every assignment.
                        </p>
                    </div>
                </div>

                <div className="actions">
                    <button
                        type="button"
                        className="actionButton"
                        onClick={onExportCsv}
                    >
                        <FiDownload />
                        <span>Export CSV</span>
                    </button>

                    <label className="actionButton importButton">
                        <FiUpload />
                        <span>Import CSV</span>

                        <input
                            type="file"
                            accept=".csv,text/csv"
                            onChange={onImportCsv}
                        />
                    </label>

                    <button
                        type="button"
                        className="actionButton"
                        onClick={onPrint}
                    >
                        <FiPrinter />
                        <span>Print</span>
                    </button>

                    <button
                        type="button"
                        className="themeButton"
                        onClick={onToggleTheme}
                        aria-label={`Switch to ${
                            isDark ? "light" : "dark"
                        } theme`}
                        title={`Switch to ${isDark ? "light" : "dark"} theme`}
                    >
                        {isDark ? <FiSun /> : <FiMoon />}

                        <span>{isDark ? "Light" : "Dark"}</span>
                    </button>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Header;
