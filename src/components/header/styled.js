import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        position: sticky;
        top: 0;
        z-index: 50;

        width: 100%;

        border-bottom: 1px solid var(--border-color);

        background: color-mix(
            in srgb,
            var(--background-color) 88%,
            transparent
        );

        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);

        .content {
            width: min(100%, 1500px);

            margin: 0 auto;
            padding: 14px 20px;

            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
        }

        .brand {
            min-width: 0;

            display: flex;
            align-items: center;
            gap: 12px;
        }

        .logo {
            width: 46px;
            height: 46px;

            flex-shrink: 0;

            display: grid;
            place-items: center;

            border: 1px solid var(--border-color);
            border-radius: 13px;

            background: linear-gradient(
                145deg,
                var(--surface-strong-color),
                var(--surface-color)
            );

            box-shadow: 0 10px 26px var(--shadow-color);

            span {
                font-family: Antonio, Verdana, sans-serif;
                font-size: 1rem;
                font-weight: 700;
                letter-spacing: 0.04em;
            }
        }

        .brandText {
            min-width: 0;

            h1 {
                font-family: Antonio, Verdana, sans-serif;
                font-size: 1.7rem;
                line-height: 1.1;
                letter-spacing: 0.01em;
            }

            p {
                margin-top: 3px;

                color: var(--text-muted-color);

                font-size: 0.7rem;
                line-height: 1.5;
            }
        }

        .actions {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 8px;

            flex-wrap: wrap;
        }

        .actionButton,
        .themeButton {
            min-height: 38px;

            padding: 8px 11px;

            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 7px;

            border: 1px solid var(--border-color);
            border-radius: 10px;

            background: var(--surface-soft-color);
            color: var(--text-soft-color);

            font-size: 0.71rem;
            font-weight: 700;

            white-space: nowrap;

            cursor: pointer;

            transition:
                transform 160ms ease,
                background 160ms ease,
                border-color 160ms ease,
                color 160ms ease;

            svg {
                width: 15px;
                height: 15px;

                flex-shrink: 0;
            }

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

        .actionButton.active {
            border-color: color-mix(
                in srgb,
                var(--success-color) 40%,
                var(--border-color)
            );

            background: var(--success-soft-color);
            color: var(--success-color);
        }

        .importButton {
            position: relative;

            input {
                position: absolute;

                width: 1px;
                height: 1px;

                opacity: 0;
                pointer-events: none;
            }
        }

        .themeButton {
            min-width: 82px;
        }

        @media (max-width: 1100px) {
            .content {
                align-items: flex-start;

                flex-direction: column;
            }

            .actions {
                width: 100%;

                justify-content: flex-start;
            }
        }

        @media (max-width: 760px) {
            position: static;

            .content {
                padding: 12px 14px;
            }

            .brandText {
                h1 {
                    font-size: 1.45rem;
                }

                p {
                    display: none;
                }
            }

            .logo {
                width: 42px;
                height: 42px;
            }

            .actions {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));

                gap: 7px;
            }

            .actionButton,
            .themeButton {
                width: 100%;

                justify-content: flex-start;
            }
        }

        @media (max-width: 480px) {
            .actions {
                grid-template-columns: 1fr;
            }

            .actionButton,
            .themeButton {
                justify-content: center;
            }
        }
    `,
};
