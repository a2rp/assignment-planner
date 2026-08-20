import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        padding: 18px;

        border: 1px solid var(--border-color);
        border-radius: 16px;

        background: var(--surface-color);

        box-shadow: 0 14px 36px var(--shadow-color);

        .heading {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 14px;

            .label {
                color: var(--text-muted-color);
                font-size: 0.64rem;
                font-weight: 700;
                letter-spacing: 0.1em;
                text-transform: uppercase;
            }

            h2 {
                margin-top: 4px;

                font-family: Antonio, Verdana, sans-serif;

                font-size: 1.45rem;
                line-height: 1.15;
            }

            p {
                margin-top: 5px;
                max-width: 360px;

                color: var(--text-muted-color);

                font-size: 0.68rem;
                line-height: 1.55;
            }
        }

        .requiredText {
            flex-shrink: 0;

            color: var(--text-muted-color);
            font-size: 0.6rem;
        }

        .form {
            margin-top: 18px;
        }

        .formGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
        }

        .field {
            min-width: 0;

            display: grid;
            gap: 6px;
        }

        .fieldFull {
            grid-column: 1 / -1;
        }

        .fieldLabel {
            color: var(--text-soft-color);

            font-size: 0.67rem;
            font-weight: 700;
        }

        input,
        select,
        textarea {
            width: 100%;

            border: 1px solid var(--border-color);
            border-radius: 10px;

            outline: 0;

            background: var(--background-color);
            color: var(--text-color);

            font-size: 0.76rem;

            transition:
                border-color 160ms ease,
                background 160ms ease,
                box-shadow 160ms ease;
        }

        input,
        select {
            height: 42px;
            padding: 0 11px;
        }

        textarea {
            min-height: 104px;
            padding: 10px 11px;

            resize: vertical;
        }

        input::placeholder,
        textarea::placeholder {
            color: var(--text-muted-color);
        }

        input:focus,
        select:focus,
        textarea:focus {
            border-color: var(--border-strong-color);

            background: var(--surface-soft-color);

            box-shadow: 0 0 0 3px var(--shadow-color);
        }

        .inputWrapper {
            position: relative;

            display: flex;
            align-items: center;

            > svg {
                position: absolute;
                left: 11px;
                z-index: 1;

                width: 14px;
                height: 14px;

                color: var(--text-muted-color);

                pointer-events: none;
            }

            input {
                padding-left: 34px;
            }
        }

        .estimateField {
            position: relative;

            span {
                position: absolute;
                top: 50%;
                right: 11px;

                transform: translateY(-50%);

                color: var(--text-muted-color);

                font-size: 0.62rem;

                pointer-events: none;
            }

            input {
                padding-right: 42px;
            }
        }

        .actions {
            margin-top: 14px;

            display: flex;
            align-items: center;
            gap: 8px;
        }

        .primaryButton,
        .secondaryButton {
            min-height: 40px;
            padding: 8px 12px;

            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 7px;

            border: 1px solid var(--border-color);
            border-radius: 10px;

            font-size: 0.72rem;
            font-weight: 700;

            cursor: pointer;

            transition:
                background 160ms ease,
                border-color 160ms ease,
                color 160ms ease,
                transform 160ms ease;

            svg {
                width: 15px;
                height: 15px;
            }

            &:hover {
                transform: translateY(-1px);
            }

            &:active {
                transform: translateY(0);
            }
        }

        .primaryButton {
            border-color: var(--primary-color);

            background: var(--primary-color);
            color: var(--primary-text-color);

            &:hover {
                border-color: var(--primary-hover-color);
                background: var(--primary-hover-color);
            }
        }

        .secondaryButton {
            background: var(--surface-soft-color);
            color: var(--text-soft-color);

            &:hover {
                border-color: var(--border-strong-color);

                background: var(--surface-strong-color);
                color: var(--text-color);
            }
        }

        .info {
            margin-top: 14px;
            padding: 10px 11px;

            display: flex;
            align-items: flex-start;
            gap: 8px;

            border: 1px solid var(--border-color);
            border-radius: 10px;

            background: var(--surface-soft-color);

            color: var(--text-muted-color);

            .infoIcon {
                margin-top: 2px;
                flex-shrink: 0;

                svg {
                    width: 13px;
                    height: 13px;
                }
            }

            p {
                font-size: 0.63rem;
                line-height: 1.55;
            }
        }

        @media (max-width: 640px) {
            padding: 15px;

            .heading {
                flex-direction: column;
            }

            .formGrid {
                grid-template-columns: 1fr;
            }

            .fieldFull {
                grid-column: auto;
            }

            .actions {
                flex-direction: column;

                button {
                    width: 100%;
                }
            }
        }
    `,
};
