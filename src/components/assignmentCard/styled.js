import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        display: none;

        width: 100%;

        .cards {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .card {
            padding: 15px;

            border: 1px solid var(--border-color);
            border-radius: 14px;

            background: var(--surface-color);

            box-shadow: 0 12px 28px var(--shadow-color);
        }

        .top {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
        }

        .titleBlock {
            min-width: 0;

            h3 {
                color: var(--text-color);

                font-family: Antonio, Verdana, sans-serif;

                font-size: 1.1rem;
                line-height: 1.25;
            }
        }

        .course {
            display: block;

            margin-top: 4px;

            color: var(--text-muted-color);

            font-size: 0.63rem;
        }

        .priority,
        .status,
        .dueBadge {
            flex-shrink: 0;

            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--border-color);
            border-radius: 999px;

            white-space: nowrap;

            font-size: 0.6rem;
            font-weight: 700;
        }

        .priority {
            padding: 4px 8px;
        }

        .priority.high {
            border-color: color-mix(
                in srgb,
                var(--danger-color) 34%,
                var(--border-color)
            );

            background: var(--danger-soft-color);
            color: var(--danger-color);
        }

        .priority.medium {
            border-color: color-mix(
                in srgb,
                var(--info-color) 32%,
                var(--border-color)
            );

            background: var(--info-soft-color);
            color: var(--info-color);
        }

        .priority.low {
            border-color: color-mix(
                in srgb,
                var(--success-color) 32%,
                var(--border-color)
            );

            background: var(--success-soft-color);
            color: var(--success-color);
        }

        .notes {
            margin-top: 11px;

            color: var(--text-muted-color);

            font-size: 0.66rem;
            line-height: 1.55;
        }

        .infoGrid {
            margin-top: 14px;

            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 9px;
        }

        .infoItem {
            min-width: 0;

            padding: 10px;

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;

            border: 1px solid var(--border-color);
            border-radius: 10px;

            background: var(--surface-soft-color);
        }

        .infoLabel {
            color: var(--text-muted-color);

            font-size: 0.57rem;
            font-weight: 700;

            letter-spacing: 0.06em;
            text-transform: uppercase;
        }

        .infoItem strong {
            color: var(--text-soft-color);

            font-size: 0.64rem;
            line-height: 1.45;
        }

        .dueValue {
            display: flex;
            align-items: flex-start;
            gap: 6px;

            color: var(--text-soft-color);

            font-size: 0.63rem;
            line-height: 1.45;

            svg {
                width: 13px;
                height: 13px;

                margin-top: 2px;

                flex-shrink: 0;

                color: var(--text-muted-color);
            }
        }

        .status {
            padding: 4px 8px;
        }

        .status.todo {
            background: var(--surface-strong-color);
            color: var(--text-soft-color);
        }

        .status.doing {
            border-color: color-mix(
                in srgb,
                var(--info-color) 32%,
                var(--border-color)
            );

            background: var(--info-soft-color);
            color: var(--info-color);
        }

        .status.done {
            border-color: color-mix(
                in srgb,
                var(--success-color) 32%,
                var(--border-color)
            );

            background: var(--success-soft-color);
            color: var(--success-color);
        }

        .dueBadge {
            padding: 3px 7px;
        }

        .dueBadge.overdue {
            border-color: color-mix(
                in srgb,
                var(--danger-color) 34%,
                var(--border-color)
            );

            background: var(--danger-soft-color);
            color: var(--danger-color);
        }

        .dueBadge.soon {
            border-color: color-mix(
                in srgb,
                var(--warning-color) 34%,
                var(--border-color)
            );

            background: var(--warning-soft-color);
            color: var(--warning-color);
        }

        .actions {
            margin-top: 12px;

            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 7px;

            button {
                min-height: 38px;

                padding: 7px 8px;

                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 6px;

                border: 1px solid var(--border-color);
                border-radius: 9px;

                background: var(--surface-soft-color);
                color: var(--text-soft-color);

                font-size: 0.62rem;
                font-weight: 700;

                cursor: pointer;

                transition:
                    background 160ms ease,
                    border-color 160ms ease,
                    color 160ms ease,
                    transform 160ms ease;

                svg {
                    width: 13px;
                    height: 13px;
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

            button.danger:hover {
                border-color: color-mix(
                    in srgb,
                    var(--danger-color) 45%,
                    var(--border-color)
                );

                background: var(--danger-soft-color);
                color: var(--danger-color);
            }
        }

        .emptyState {
            min-height: 230px;

            padding: 26px 18px;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8px;

            border: 1px solid var(--border-color);
            border-radius: 14px;

            background: var(--surface-color);

            text-align: center;
        }

        .emptyIcon {
            width: 44px;
            height: 44px;

            display: grid;
            place-items: center;

            border: 1px solid var(--border-color);
            border-radius: 13px;

            background: var(--surface-soft-color);
            color: var(--text-muted-color);

            svg {
                width: 19px;
                height: 19px;
            }
        }

        .emptyState h3 {
            font-family: Antonio, Verdana, sans-serif;

            font-size: 1.05rem;
        }

        .emptyState p {
            max-width: 340px;

            color: var(--text-muted-color);

            font-size: 0.65rem;
            line-height: 1.55;
        }

        @media (max-width: 760px) {
            display: block;
        }

        @media (max-width: 480px) {
            .infoGrid {
                grid-template-columns: 1fr;
            }

            .actions {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }

        @media (max-width: 340px) {
            .actions {
                grid-template-columns: 1fr;
            }
        }
    `,
};
