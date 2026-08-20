import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

import { Styled } from "./styled";

const SCROLL_THRESHOLD = 300;

const GoToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > SCROLL_THRESHOLD);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleGoToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!visible) {
        return null;
    }

    return (
        <Styled.Wrapper>
            <button
                type="button"
                onClick={handleGoToTop}
                aria-label="Go to top"
                title="Go to top"
            >
                <FiArrowUp />
            </button>
        </Styled.Wrapper>
    );
};

export default GoToTop;
