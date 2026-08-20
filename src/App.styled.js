import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        min-height: 100vh;

        display: flex;
        flex-direction: column;

        background:
            radial-gradient(
                circle at 8% -8%,
                color-mix(in srgb, var(--primary-color) 6%, transparent),
                transparent 28%
            ),
            var(--background-color);

        color: var(--text-color);

        .main {
            width: min(100%, 1500px);

            flex: 1;

            margin: 0 auto;
            padding: 30px 20px 44px;
        }

        .intro {
            padding-bottom: 26px;

            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 24px;

            border-bottom: 1px solid var(--border-color);
        }

        .introContent {
            max-width: 760px;

            .label {
                color: var(--text-muted-color);

                font-size: 0.64rem;
                font-weight: 700;

                letter-spacing: 0.1em;
                text-transform: uppercase;
            }

            h2 {
                margin-top: 7px;

                font-family: Antonio, Verdana, sans-serif;

                font-size: clamp(2.2rem, 5vw, 3.8rem);

                line-height: 1;
                letter-spacing: -0.02em;
            }

            p {
                margin-top: 12px;

                max-width: 700px;

                color: var(--text-soft-color);

                font-size: 0.8rem;
                line-height: 1.75;
            }
        }

        .toolsButton {
            min-height: 40px;

            padding: 8px 13px;

            flex-shrink: 0;

            border: 1px solid var(--border-color);
            border-radius: 10px;

            background: var(--surface-soft-color);

            color: var(--text-soft-color);

            font-size: 0.7rem;
            font-weight: 700;

            cursor: pointer;

            transition:
                border-color 160ms ease,
                background 160ms ease,
                color 160ms ease,
                transform 160ms ease;

            &:hover {
                border-color: var(--border-strong-color);

                background: var(--surface-strong-color);

                color: var(--text-color);

                transform: translateY(-1px);
            }

            &:active {
                transform: translateY(0);
            }
        }

        .summarySection {
            padding: 26px 0;
        }

        .planner {
            display: grid;
            grid-template-columns:
                minmax(320px, 390px)
                minmax(0, 1fr);

            align-items: start;
            gap: 18px;
        }

        .left {
            position: sticky;
            top: 92px;
        }

        .right {
            min-width: 0;

            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .list {
            min-width: 0;
        }

        @media (max-width: 1100px) {
            .planner {
                grid-template-columns: 1fr;
            }

            .left {
                position: static;
            }
        }

        @media (max-width: 760px) {
            .main {
                padding: 24px 14px 36px;
            }

            .intro {
                align-items: flex-start;

                flex-direction: column;
            }

            .toolsButton {
                width: 100%;
            }

            .summarySection {
                padding: 22px 0;
            }
        }

        @media (max-width: 480px) {
            .introContent {
                h2 {
                    font-size: 2.2rem;
                }

                p {
                    font-size: 0.73rem;
                }
            }
        }

        @media print {
            background: #ffffff !important;

            .intro,
            .summarySection,
            .left {
                display: none !important;
            }

            .main {
                width: 100%;

                padding: 0;
            }

            .planner {
                display: block;
            }

            .right {
                display: block;
            }
        }
    `,
};
