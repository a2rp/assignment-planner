import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        position: fixed;
        inset: 0;
        z-index: 100;

        padding: 18px;

        display: flex;
        align-items: center;
        justify-content: center;

        background: var(--overlay-color);

        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);

        .modal {
            width: min(680px, 100%);
            max-height: calc(100vh - 36px);

            overflow-y: auto;

            border: 1px solid var(--border-color);
            border-radius: 18px;

            background: var(--surface-color);

            box-shadow: 0 28px 90px var(--shadow-color);
        }

        .header {
            position: sticky;
            top: 0;
            z-index: 2;

            padding: 18px;

            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 16px;

            border-bottom: 1px solid var(--border-color);

            background: color-mix(
                in srgb,
                var(--surface-color) 94%,
                transparent
            );

            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);

            .label {
                color: var(--text-muted-color);

                font-size: 0.63rem;
                font-weight: 700;

                letter-spacing: 0.1em;
                text-transform: uppercase;
            }

            h2 {
                margin-top: 4px;

                font-family: Antonio, Verdana, sans-serif;

                font-size: 1.5rem;
                line-height: 1.15;
            }

            p {
                margin-top: 5px;

                max-width: 430px;

                color: var(--text-muted-color);

                font-size: 0.66rem;
                line-height: 1.55;
            }
        }

        .closeButton {
            width: 38px;
            height: 38px;

            flex-shrink: 0;

            display: grid;
            place-items: center;

            border: 1px solid var(--border-color);
            border-radius: 10px;

            background: var(--surface-soft-color);

            color: var(--text-muted-color);

            cursor: pointer;

            transition:
                background 160ms ease,
                border-color 160ms ease,
                color 160ms ease,
                transform 160ms ease;

            svg {
                width: 17px;
                height: 17px;
            }

            &:hover {
                border-color: var(--border-strong-color);

                background: var(--surface-strong-color);

                color: var(--text-color);
            }

            &:active {
                transform: scale(0.95);
            }
        }

        .form {
            padding: 18px;
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

            outline: none;

            background: var(--background-color);

            color: var(--text-color);

            font-size: 0.74rem;

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
            min-height: 112px;

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

            input {
                padding-right: 42px;
            }

            span {
                position: absolute;
                top: 50%;
                right: 11px;

                transform: translateY(-50%);

                color: var(--text-muted-color);

                font-size: 0.61rem;

                pointer-events: none;
            }
        }

        .actions {
            margin-top: 18px;

            padding-top: 16px;

            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;

            border-top: 1px solid var(--border-color);
        }

        .rightActions {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .primaryButton,
        .secondaryButton,
        .deleteButton {
            min-height: 40px;

            padding: 8px 12px;

            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 7px;

            border: 1px solid var(--border-color);
            border-radius: 10px;

            font-size: 0.7rem;
            font-weight: 700;

            cursor: pointer;

            transition:
                background 160ms ease,
                border-color 160ms ease,
                color 160ms ease,
                transform 160ms ease;

            svg {
                width: 14px;
                height: 14px;
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

        .deleteButton {
            border-color: color-mix(
                in srgb,
                var(--danger-color) 30%,
                var(--border-color)
            );

            background: var(--danger-soft-color);

            color: var(--danger-color);

            &:hover {
                border-color: color-mix(
                    in srgb,
                    var(--danger-color) 55%,
                    var(--border-color)
                );

                background: color-mix(
                    in srgb,
                    var(--danger-soft-color) 75%,
                    var(--surface-color)
                );
            }
        }

        @media (max-width: 640px) {
            padding: 10px;

            .modal {
                max-height: calc(100vh - 20px);
            }

            .header,
            .form {
                padding: 15px;
            }

            .formGrid {
                grid-template-columns: 1fr;
            }

            .fieldFull {
                grid-column: auto;
            }

            .actions {
                align-items: stretch;

                flex-direction: column-reverse;
            }

            .rightActions {
                width: 100%;

                flex-direction: column-reverse;

                button {
                    width: 100%;
                }
            }

            .deleteButton {
                width: 100%;
            }
        }
    `,
};
