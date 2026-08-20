import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        position: fixed;
        inset: 0;
        z-index: 250;

        padding: 18px;

        display: flex;
        align-items: center;
        justify-content: center;

        background: rgba(0, 0, 0, 0.72);

        backdrop-filter: blur(7px);
        -webkit-backdrop-filter: blur(7px);

        .modal {
            position: relative;

            width: min(430px, 100%);

            padding: 24px;

            border: 1px solid var(--border-color);
            border-radius: 18px;

            background: var(--surface-color);

            box-shadow: 0 30px 90px rgba(0, 0, 0, 0.42);
        }

        .closeButton {
            position: absolute;
            top: 12px;
            right: 12px;

            width: 34px;
            height: 34px;

            display: grid;
            place-items: center;

            border: 1px solid var(--border-color);
            border-radius: 9px;

            background: var(--surface-soft-color);

            color: var(--text-muted-color);

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
                border-color: var(--border-strong-color);

                background: var(--surface-strong-color);

                color: var(--text-color);
            }

            &:active {
                transform: scale(0.95);
            }
        }

        .icon {
            width: 48px;
            height: 48px;

            display: grid;
            place-items: center;

            border: 1px solid var(--border-color);
            border-radius: 14px;

            background: var(--surface-soft-color);
            color: var(--text-soft-color);

            svg {
                width: 21px;
                height: 21px;
            }
        }

        .content {
            margin-top: 18px;

            .label {
                color: var(--text-muted-color);

                font-size: 0.62rem;
                font-weight: 700;

                letter-spacing: 0.08em;
                text-transform: uppercase;
            }

            h2 {
                margin-top: 5px;

                font-family: Antonio, Verdana, sans-serif;

                font-size: 1.55rem;
                line-height: 1.15;
            }

            p {
                margin-top: 9px;

                color: var(--text-muted-color);

                font-size: 0.7rem;
                line-height: 1.65;
            }
        }

        .actions {
            margin-top: 22px;

            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 9px;
        }

        .cancelButton,
        .confirmButton {
            min-height: 42px;

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
                transform 160ms ease,
                filter 160ms ease;

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

        .cancelButton {
            background: var(--surface-soft-color);
            color: var(--text-soft-color);

            &:hover {
                border-color: var(--border-strong-color);

                background: var(--surface-strong-color);

                color: var(--text-color);
            }
        }

        .confirmButton {
            background: var(--text-color);
            color: var(--background-color);

            &:hover {
                filter: brightness(1.08);
            }
        }

        &.danger {
            .icon {
                border-color: color-mix(
                    in srgb,
                    var(--danger-color) 34%,
                    var(--border-color)
                );

                background: var(--danger-soft-color);
                color: var(--danger-color);
            }

            .content .label {
                color: var(--danger-color);
            }

            .confirmButton {
                border-color: var(--danger-color);
                background: var(--danger-color);
                color: #ffffff;
            }
        }

        &.reset {
            .icon {
                border-color: color-mix(
                    in srgb,
                    var(--primary-color) 28%,
                    var(--border-color)
                );

                color: var(--text-color);
            }
        }

        @media (max-width: 480px) {
            padding: 12px;

            .modal {
                padding: 20px;
            }

            .actions {
                grid-template-columns: 1fr;
            }
        }
    `,
};
