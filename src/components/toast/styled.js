import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        position: fixed;
        left: 50%;
        bottom: 22px;
        z-index: 200;

        width: min(420px, calc(100vw - 28px));

        padding: 11px 12px;

        display: grid;
        grid-template-columns: auto minmax(0, 1fr) auto;
        align-items: center;
        gap: 10px;

        border: 1px solid var(--border-color);
        border-radius: 12px;

        background: var(--surface-strong-color);
        color: var(--text-color);

        box-shadow: 0 18px 48px var(--shadow-color);

        transform: translateX(-50%);

        .icon {
            width: 30px;
            height: 30px;

            display: grid;
            place-items: center;

            border: 1px solid var(--border-color);
            border-radius: 9px;

            background: var(--surface-soft-color);
            color: var(--text-muted-color);

            svg {
                width: 15px;
                height: 15px;
            }
        }

        p {
            min-width: 0;

            color: var(--text-soft-color);

            font-size: 0.68rem;
            line-height: 1.5;
        }

        .closeButton {
            width: 30px;
            height: 30px;

            display: grid;
            place-items: center;

            border-radius: 8px;

            color: var(--text-muted-color);

            cursor: pointer;

            transition:
                background 160ms ease,
                color 160ms ease,
                transform 160ms ease;

            svg {
                width: 14px;
                height: 14px;
            }

            &:hover {
                background: var(--surface-soft-color);
                color: var(--text-color);
            }

            &:active {
                transform: scale(0.94);
            }
        }

        &.success {
            border-color: color-mix(
                in srgb,
                var(--success-color) 34%,
                var(--border-color)
            );

            .icon {
                border-color: color-mix(
                    in srgb,
                    var(--success-color) 30%,
                    var(--border-color)
                );

                background: var(--success-soft-color);
                color: var(--success-color);
            }
        }

        &.error {
            border-color: color-mix(
                in srgb,
                var(--danger-color) 38%,
                var(--border-color)
            );

            .icon {
                border-color: color-mix(
                    in srgb,
                    var(--danger-color) 32%,
                    var(--border-color)
                );

                background: var(--danger-soft-color);
                color: var(--danger-color);
            }
        }

        &.info {
            border-color: color-mix(
                in srgb,
                var(--info-color) 30%,
                var(--border-color)
            );

            .icon {
                border-color: color-mix(
                    in srgb,
                    var(--info-color) 28%,
                    var(--border-color)
                );

                background: var(--info-soft-color);
                color: var(--info-color);
            }
        }

        @media (max-width: 480px) {
            bottom: 14px;
            width: calc(100vw - 20px);
        }

        @media print {
            display: none;
        }
    `,
};
