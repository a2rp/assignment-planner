import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        position: fixed;
        right: 20px;
        bottom: 20px;
        z-index: 80;

        button {
            width: 42px;
            height: 42px;

            display: grid;
            place-items: center;

            border: 1px solid var(--border-color);
            border-radius: 12px;

            background: var(--surface-strong-color);
            color: var(--text-color);

            box-shadow: 0 12px 32px var(--shadow-color);

            cursor: pointer;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                background 160ms ease;

            svg {
                width: 17px;
                height: 17px;
            }

            &:hover {
                border-color: var(--border-strong-color);

                background: var(--surface-soft-color);

                transform: translateY(-2px);
            }

            &:active {
                transform: translateY(0);
            }
        }

        @media (max-width: 760px) {
            right: 14px;
            bottom: 14px;

            button {
                width: 40px;
                height: 40px;
            }
        }

        @media print {
            display: none;
        }
    `,
};
