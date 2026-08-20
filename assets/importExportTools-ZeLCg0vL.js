import{a as e,c as t,i as n,l as r,n as i,s as a,t as o,u as s}from"./index-CyyLfS01.js";s();var c={Wrapper:i.div`
        position: fixed;
        inset: 0;
        z-index: 110;

        padding: 18px;

        display: flex;
        align-items: center;
        justify-content: center;

        background: var(--overlay-color);

        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);

        .panel {
            width: min(620px, 100%);
            max-height: calc(100vh - 36px);

            overflow-y: auto;

            border: 1px solid var(--border-color);
            border-radius: 18px;

            background: var(--surface-color);

            box-shadow: 0 28px 90px var(--shadow-color);
        }

        .header {
            padding: 18px;

            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 16px;

            border-bottom: 1px solid var(--border-color);

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

        .content {
            padding: 18px;
        }

        .toolGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
        }

        .toolCard {
            min-height: 110px;

            padding: 14px;

            display: flex;
            align-items: flex-start;
            gap: 11px;

            border: 1px solid var(--border-color);
            border-radius: 12px;

            background: var(--surface-soft-color);
            color: var(--text-soft-color);

            text-align: left;

            cursor: pointer;

            transition:
                background 160ms ease,
                border-color 160ms ease,
                color 160ms ease,
                transform 160ms ease;

            &:hover:not(:disabled) {
                border-color: var(--border-strong-color);

                background: var(--surface-strong-color);
                color: var(--text-color);

                transform: translateY(-2px);
            }

            &:active:not(:disabled) {
                transform: translateY(0);
            }

            &:disabled {
                opacity: 0.42;

                cursor: not-allowed;
            }
        }

        .icon {
            width: 36px;
            height: 36px;

            flex-shrink: 0;

            display: grid;
            place-items: center;

            border: 1px solid var(--border-color);
            border-radius: 10px;

            background: var(--surface-color);
            color: var(--text-muted-color);

            svg {
                width: 16px;
                height: 16px;
            }
        }

        .text {
            min-width: 0;

            display: flex;
            flex-direction: column;
            gap: 4px;

            strong {
                color: var(--text-color);

                font-size: 0.7rem;
            }

            small {
                color: var(--text-muted-color);

                font-size: 0.61rem;
                line-height: 1.5;
            }
        }

        .importCard {
            position: relative;

            input {
                position: absolute;

                width: 1px;
                height: 1px;

                opacity: 0;
                pointer-events: none;
            }
        }

        .toolCard.danger {
            border-color: color-mix(
                in srgb,
                var(--danger-color) 24%,
                var(--border-color)
            );

            .icon {
                color: var(--danger-color);

                background: var(--danger-soft-color);
            }

            &:hover:not(:disabled) {
                border-color: color-mix(
                    in srgb,
                    var(--danger-color) 48%,
                    var(--border-color)
                );

                background: var(--danger-soft-color);

                .text strong {
                    color: var(--danger-color);
                }
            }
        }

        .info {
            margin-top: 14px;
            padding: 11px 12px;

            display: flex;
            align-items: center;
            gap: 9px;

            border: 1px solid var(--border-color);
            border-radius: 10px;

            background: var(--background-color);

            span {
                min-width: 30px;
                height: 30px;

                display: grid;
                place-items: center;

                border: 1px solid var(--border-color);
                border-radius: 9px;

                background: var(--surface-soft-color);
                color: var(--text-color);

                font-family: Antonio, Verdana, sans-serif;

                font-size: 1rem;
                font-weight: 700;
            }

            p {
                color: var(--text-muted-color);

                font-size: 0.63rem;
                line-height: 1.5;
            }
        }

        @media (max-width: 560px) {
            padding: 10px;

            .panel {
                max-height: calc(100vh - 20px);
            }

            .header,
            .content {
                padding: 15px;
            }

            .toolGrid {
                grid-template-columns: 1fr;
            }

            .toolCard {
                min-height: 96px;
            }
        }
    `},l=o(),u=({isOpen:i,onClose:o,onExportCsv:s,onImportCsv:u,onPrint:d,onClearAll:f,totalAssignments:p=0})=>i?(0,l.jsx)(c.Wrapper,{onMouseDown:e=>{e.target===e.currentTarget&&o()},children:(0,l.jsxs)(`div`,{className:`panel`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`toolsTitle`,onMouseDown:e=>e.stopPropagation(),children:[(0,l.jsxs)(`div`,{className:`header`,children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{className:`label`,children:`Planner tools`}),(0,l.jsx)(`h2`,{id:`toolsTitle`,children:`Import, Export & Print`}),(0,l.jsx)(`p`,{children:`Move planner data, create a printable copy, or clear stored assignments.`})]}),(0,l.jsx)(`button`,{type:`button`,className:`closeButton`,onClick:o,"aria-label":`Close planner tools`,title:`Close`,children:(0,l.jsx)(r,{})})]}),(0,l.jsxs)(`div`,{className:`content`,children:[(0,l.jsxs)(`div`,{className:`toolGrid`,children:[(0,l.jsxs)(`button`,{type:`button`,className:`toolCard`,onClick:s,disabled:p===0,children:[(0,l.jsx)(`span`,{className:`icon`,children:(0,l.jsx)(n,{})}),(0,l.jsxs)(`span`,{className:`text`,children:[(0,l.jsx)(`strong`,{children:`Export CSV`}),(0,l.jsx)(`small`,{children:`Download all assignments as a CSV file.`})]})]}),(0,l.jsxs)(`label`,{className:`toolCard importCard`,children:[(0,l.jsx)(`span`,{className:`icon`,children:(0,l.jsx)(t,{})}),(0,l.jsxs)(`span`,{className:`text`,children:[(0,l.jsx)(`strong`,{children:`Import CSV`}),(0,l.jsx)(`small`,{children:`Add assignments from a compatible CSV file.`})]}),(0,l.jsx)(`input`,{type:`file`,accept:`.csv,text/csv`,onChange:u})]}),(0,l.jsxs)(`button`,{type:`button`,className:`toolCard`,onClick:d,disabled:p===0,children:[(0,l.jsx)(`span`,{className:`icon`,children:(0,l.jsx)(e,{})}),(0,l.jsxs)(`span`,{className:`text`,children:[(0,l.jsx)(`strong`,{children:`Print Planner`}),(0,l.jsx)(`small`,{children:`Open the browser print view for assignments.`})]})]}),(0,l.jsxs)(`button`,{type:`button`,className:`toolCard danger`,onClick:f,disabled:p===0,children:[(0,l.jsx)(`span`,{className:`icon`,children:(0,l.jsx)(a,{})}),(0,l.jsxs)(`span`,{className:`text`,children:[(0,l.jsx)(`strong`,{children:`Clear All`}),(0,l.jsx)(`small`,{children:`Permanently remove every stored assignment.`})]})]})]}),(0,l.jsxs)(`div`,{className:`info`,children:[(0,l.jsx)(`span`,{children:p}),(0,l.jsx)(`p`,{children:p===1?`assignment currently stored in this browser.`:`assignments currently stored in this browser.`})]})]})]})}):null;export{u as default};