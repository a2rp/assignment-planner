import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        position: relative;
        width: 100%;

        .trigger {
            width: 100%;
            min-height: 42px;

            padding: 0 10px;

            display: grid;
            grid-template-columns:
                16px
                minmax(0, 1fr)
                18px;
            align-items: center;
            gap: 8px;

            border: 1px solid var(--border-color);
            border-radius: 10px;

            background: var(--background-color);
            color: var(--text-color);

            cursor: pointer;

            text-align: left;

            transition:
                border-color 160ms ease,
                background 160ms ease,
                box-shadow 160ms ease;

            > svg {
                width: 14px;
                height: 14px;

                color: var(--text-muted-color);
            }

            &:hover {
                border-color: var(--border-strong-color);

                background: var(--surface-soft-color);
            }

            &.active {
                border-color: var(--border-strong-color);

                background: var(--surface-soft-color);

                box-shadow: 0 0 0 3px var(--shadow-color);
            }
        }

        .value,
        .placeholder {
            min-width: 0;

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            font-size: 0.76rem;
        }

        .value {
            color: var(--text-color);
        }

        .placeholder {
            color: var(--text-muted-color);
        }

        .calendarIcon,
        .clearIcon {
            width: 18px;
            height: 18px;

            display: grid;
            place-items: center;

            color: var(--text-muted-color);

            svg {
                width: 14px;
                height: 14px;
            }
        }

        .clearIcon {
            border-radius: 6px;

            transition:
                background 160ms ease,
                color 160ms ease;

            &:hover {
                background: var(--surface-strong-color);

                color: var(--text-color);
            }
        }

        .calendar {
            position: absolute;
            top: calc(100% + 8px);
            left: 0;
            z-index: 90;

            width: 292px;

            padding: 12px;

            border: 1px solid var(--border-strong-color);
            border-radius: 14px;

            background: var(--surface-color);

            box-shadow: 0 22px 60px var(--shadow-color);
        }

        .calendarHeader {
            display: grid;
            grid-template-columns:
                34px
                minmax(0, 1fr)
                34px;
            align-items: center;
            gap: 8px;

            strong {
                text-align: center;

                color: var(--text-color);

                font-size: 0.72rem;
            }
        }

        .navButton {
            width: 34px;
            height: 34px;

            display: grid;
            place-items: center;

            border: 1px solid transparent;
            border-radius: 9px;

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
                border-color: var(--border-color);

                background: var(--surface-soft-color);

                color: var(--text-color);
            }

            &:active {
                transform: scale(0.95);
            }
        }

        .weekDays {
            margin-top: 10px;

            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 3px;

            span {
                height: 26px;

                display: grid;
                place-items: center;

                color: var(--text-muted-color);

                font-size: 0.57rem;
                font-weight: 700;

                text-transform: uppercase;
            }
        }

        .days {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 3px;
        }

        .day {
            aspect-ratio: 1;

            display: grid;
            place-items: center;

            border: 1px solid transparent;
            border-radius: 8px;

            color: var(--text-soft-color);

            font-size: 0.66rem;
            font-weight: 700;

            cursor: pointer;

            transition:
                background 140ms ease,
                border-color 140ms ease,
                color 140ms ease,
                transform 140ms ease;

            &:hover {
                border-color: var(--border-color);

                background: var(--surface-soft-color);

                color: var(--text-color);

                transform: translateY(-1px);
            }

            &.outside {
                color: var(--text-muted-color);

                opacity: 0.42;
            }

            &.today {
                border-color: var(--border-strong-color);

                color: var(--text-color);
            }

            &.selected {
                border-color: var(--primary-color);

                background: var(--primary-color);

                color: var(--primary-text-color);

                opacity: 1;
            }
        }

        .calendarFooter {
            margin-top: 10px;
            padding-top: 10px;

            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;

            border-top: 1px solid var(--border-color);

            button {
                min-height: 32px;

                padding: 5px 9px;

                border-radius: 8px;

                color: var(--text-muted-color);

                font-size: 0.62rem;
                font-weight: 700;

                cursor: pointer;

                transition:
                    background 160ms ease,
                    color 160ms ease;

                &:hover:not(:disabled) {
                    background: var(--surface-soft-color);

                    color: var(--text-color);
                }

                &:disabled {
                    opacity: 0.35;

                    cursor: not-allowed;
                }
            }

            .todayButton {
                border: 1px solid var(--border-color);

                background: var(--surface-soft-color);

                color: var(--text-color);
            }
        }

        @media (max-width: 480px) {
            .calendar {
                width: min(292px, calc(100vw - 46px));
            }
        }
    `,
};
