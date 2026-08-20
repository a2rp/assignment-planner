import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;

        padding: 16px;

        border: 1px solid var(--border-color);
        border-radius: 16px;

        background: var(--surface-color);

        box-shadow: 0 14px 36px var(--shadow-color);

        .heading {
            margin-bottom: 14px;

            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 16px;
        }

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

        .heading p {
            margin-top: 5px;

            color: var(--text-muted-color);

            font-size: 0.68rem;
            line-height: 1.5;
        }

        .filterIcon {
            width: 34px;
            height: 34px;

            flex-shrink: 0;

            display: grid;
            place-items: center;

            border: 1px solid var(--border-color);
            border-radius: 10px;

            background: var(--surface-soft-color);
            color: var(--text-muted-color);

            svg {
                width: 15px;
                height: 15px;
            }
        }

        .filtersGrid {
            display: grid;

            grid-template-columns:
                minmax(210px, 1.8fr)
                repeat(4, minmax(120px, 1fr))
                auto
                auto;

            align-items: center;
            gap: 8px;
        }

        .searchField {
            position: relative;

            min-width: 0;

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
                width: 100%;
                height: 42px;

                padding: 0 12px 0 34px;

                border: 1px solid var(--border-color);
                border-radius: 10px;

                outline: none;

                background: var(--background-color);
                color: var(--text-color);

                font-size: 0.72rem;

                transition:
                    border-color 160ms ease,
                    background 160ms ease,
                    box-shadow 160ms ease;

                &::placeholder {
                    color: var(--text-muted-color);
                }

                &:focus {
                    border-color: var(--border-strong-color);

                    background: var(--surface-soft-color);

                    box-shadow: 0 0 0 3px var(--shadow-color);
                }
            }
        }

        .clearSearchButton {
            position: absolute;
            right: 6px;

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
                background: var(--surface-strong-color);
                color: var(--text-color);
            }

            &:active {
                transform: scale(0.94);
            }
        }

        .field {
            min-width: 0;

            select {
                width: 100%;
                height: 42px;

                padding: 0 10px;

                border: 1px solid var(--border-color);
                border-radius: 10px;

                outline: 0;

                background: var(--background-color);
                color: var(--text-color);

                font-size: 0.7rem;

                transition:
                    border-color 160ms ease,
                    background 160ms ease,
                    box-shadow 160ms ease;

                &:focus {
                    border-color: var(--border-strong-color);

                    background: var(--surface-soft-color);

                    box-shadow: 0 0 0 3px var(--shadow-color);
                }
            }
        }

        .checkboxField {
            min-height: 42px;

            padding: 0 11px;

            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;

            border: 1px solid var(--border-color);
            border-radius: 10px;

            background: var(--background-color);
            color: var(--text-soft-color);

            font-size: 0.68rem;
            font-weight: 700;

            white-space: nowrap;

            cursor: pointer;

            transition:
                border-color 160ms ease,
                background 160ms ease;

            input {
                width: 14px;
                height: 14px;

                accent-color: var(--primary-color);
            }

            &:hover {
                border-color: var(--border-strong-color);

                background: var(--surface-soft-color);
            }
        }

        .clearButton {
            min-height: 42px;

            padding: 8px 11px;

            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 7px;

            border: 1px solid var(--border-color);
            border-radius: 10px;

            background: var(--surface-soft-color);
            color: var(--text-muted-color);

            font-size: 0.68rem;
            font-weight: 700;

            white-space: nowrap;

            transition:
                border-color 160ms ease,
                background 160ms ease,
                color 160ms ease,
                transform 160ms ease;

            svg {
                width: 14px;
                height: 14px;
            }

            &.active:hover {
                border-color: var(--border-strong-color);

                background: var(--surface-strong-color);
                color: var(--text-color);

                transform: translateY(-1px);
            }

            &:disabled {
                opacity: 0.42;

                cursor: not-allowed;
            }
        }

        @media (max-width: 1280px) {
            .filtersGrid {
                grid-template-columns: repeat(3, minmax(0, 1fr));
            }

            .searchField {
                grid-column: span 2;
            }

            .clearButton {
                width: 100%;
            }
        }

        @media (max-width: 760px) {
            padding: 14px;

            .filtersGrid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .searchField {
                grid-column: 1 / -1;
            }

            .checkboxField,
            .clearButton {
                width: 100%;
            }
        }

        @media (max-width: 480px) {
            .heading {
                align-items: flex-start;
            }

            .filtersGrid {
                grid-template-columns: 1fr;
            }

            .searchField {
                grid-column: auto;
            }
        }
    `,
};
