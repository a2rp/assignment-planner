import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        width: 100%;

        margin-top: auto;

        border-top: 1px solid var(--border-color);

        background: var(--surface-color);

        .content {
            width: min(100%, 1500px);

            margin: 0 auto;
            padding: 20px;

            display: grid;
            grid-template-columns:
                minmax(220px, 1.4fr)
                minmax(0, 2.4fr)
                minmax(220px, 1fr);

            align-items: center;
            gap: 22px;
        }

        .brand {
            min-width: 0;

            display: flex;
            align-items: center;
            gap: 11px;
        }

        .brandIcon {
            width: 40px;
            height: 40px;

            flex-shrink: 0;

            display: grid;
            place-items: center;

            border: 1px solid var(--border-color);
            border-radius: 11px;

            background: var(--surface-soft-color);

            color: var(--text-color);

            font-family: Antonio, Verdana, sans-serif;

            font-size: 0.9rem;
            font-weight: 700;

            letter-spacing: 0.04em;
        }

        .brandText {
            min-width: 0;

            strong {
                display: block;

                color: var(--text-color);

                font-size: 0.72rem;
            }

            p {
                margin-top: 3px;

                color: var(--text-muted-color);

                font-size: 0.61rem;
                line-height: 1.45;
            }
        }

        .links,
        .supportLinks {
            display: flex;
            align-items: center;
            gap: 6px;

            flex-wrap: wrap;

            a {
                min-height: 34px;

                padding: 6px 8px;

                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 6px;

                border-radius: 8px;

                color: var(--text-muted-color);

                font-size: 0.62rem;
                font-weight: 700;

                transition:
                    background 160ms ease,
                    color 160ms ease,
                    transform 160ms ease;

                svg {
                    width: 13px;
                    height: 13px;

                    flex-shrink: 0;
                }

                &:hover {
                    background: var(--surface-soft-color);

                    color: var(--text-color);

                    transform: translateY(-1px);
                }

                &:active {
                    transform: translateY(0);
                }
            }
        }

        .links {
            justify-content: center;
        }

        .supportLinks {
            justify-content: flex-end;
        }

        .bottom {
            width: min(100%, 1500px);

            margin: 0 auto;
            padding: 12px 20px 16px;

            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            border-top: 1px solid var(--border-color);

            color: var(--text-muted-color);

            font-size: 0.6rem;

            a {
                color: var(--text-soft-color);

                font-weight: 700;

                transition: color 160ms ease;

                &:hover {
                    color: var(--text-color);
                }
            }
        }

        @media (max-width: 1100px) {
            .content {
                grid-template-columns: 1fr 1fr;

                align-items: flex-start;
            }

            .brand {
                grid-column: 1 / -1;
            }

            .links {
                justify-content: flex-start;
            }

            .supportLinks {
                justify-content: flex-end;
            }
        }

        @media (max-width: 760px) {
            .content {
                padding: 18px 14px;

                grid-template-columns: 1fr;
            }

            .brand,
            .links,
            .supportLinks {
                justify-content: flex-start;
            }

            .brand {
                grid-column: auto;
            }

            .bottom {
                padding: 12px 14px 15px;

                align-items: flex-start;

                flex-direction: column;
            }
        }

        @media (max-width: 480px) {
            .links,
            .supportLinks {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));

                width: 100%;

                a {
                    justify-content: flex-start;
                }
            }
        }

        @media print {
            display: none;
        }
    `,
};
