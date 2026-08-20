import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;

        .heading {
            margin-bottom: 14px;

            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 18px;
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

        .heading > p {
            color: var(--text-muted-color);

            font-size: 0.68rem;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 12px;
        }

        .card {
            min-width: 0;

            padding: 16px;

            border: 1px solid var(--border-color);
            border-radius: 14px;

            background: linear-gradient(
                145deg,
                var(--surface-color),
                var(--surface-soft-color)
            );

            box-shadow: 0 12px 28px var(--shadow-color);

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                background 160ms ease;

            &:hover {
                border-color: var(--border-strong-color);

                background: var(--surface-soft-color);

                transform: translateY(-2px);
            }

            strong {
                display: block;

                margin-top: 12px;

                font-family: Antonio, Verdana, sans-serif;

                font-size: 2.1rem;
                line-height: 1;
            }

            small {
                display: block;

                margin-top: 7px;

                color: var(--text-muted-color);

                font-size: 0.62rem;
                line-height: 1.45;
            }
        }

        .cardTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .cardLabel {
            color: var(--text-soft-color);

            font-size: 0.67rem;
            font-weight: 700;
        }

        .icon {
            width: 30px;
            height: 30px;

            flex-shrink: 0;

            display: grid;
            place-items: center;

            border: 1px solid var(--border-color);
            border-radius: 9px;

            background: var(--surface-strong-color);
            color: var(--text-muted-color);

            svg {
                width: 14px;
                height: 14px;
            }
        }

        .todo .icon {
            color: var(--warning-color);

            background: var(--warning-soft-color);
        }

        .doing .icon {
            color: var(--info-color);

            background: var(--info-soft-color);
        }

        .done .icon {
            color: var(--success-color);

            background: var(--success-soft-color);
        }

        .overdue {
            border-color: color-mix(
                in srgb,
                var(--danger-color) 24%,
                var(--border-color)
            );

            .icon {
                color: var(--danger-color);

                background: var(--danger-soft-color);
            }
        }

        @media (max-width: 1000px) {
            .grid {
                grid-template-columns: repeat(3, minmax(0, 1fr));
            }
        }

        @media (max-width: 700px) {
            .heading {
                align-items: flex-start;

                flex-direction: column;
            }

            .grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .overdue {
                grid-column: 1 / -1;
            }
        }

        @media (max-width: 420px) {
            .grid {
                grid-template-columns: 1fr;
            }

            .overdue {
                grid-column: auto;
            }
        }
    `,
};
