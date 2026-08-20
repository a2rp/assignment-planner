import React from "react";

import { Styled } from "./styled";

const Loader = ({ text = "Loading...", fullScreen = false }) => {
    return (
        <Styled.Wrapper
            className={fullScreen ? "fullScreen" : ""}
            role="status"
            aria-live="polite"
            aria-label={text}
        >
            <span className="spinner" />

            <span className="text">{text}</span>
        </Styled.Wrapper>
    );
};

export default Loader;
