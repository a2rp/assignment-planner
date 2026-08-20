import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        min-height: 180px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px;

        color: var(--text-muted-color);

        &.fullScreen {
            min-height: 100vh;
        }

        .spinner {
            width: 34px;
            height: 34px;

            border: 3px solid var(--border-color);

            border-top-color: var(--primary-color);

            border-radius: 50%;

            animation: loaderSpin 700ms linear infinite;
        }

        .text {
            font-size: 0.68rem;
            font-weight: 700;

            letter-spacing: 0.03em;
        }

        @keyframes loaderSpin {
            to {
                transform: rotate(360deg);
            }
        }

        @media (max-width: 480px) {
            min-height: 150px;

            .spinner {
                width: 30px;
                height: 30px;
            }

            .text {
                font-size: 0.64rem;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .spinner {
                animation-duration: 1.5s;
            }
        }
    `,
};
