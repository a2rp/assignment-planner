import{l as e,n as t,o as n,r,s as i,t as a,u as o}from"./index-DgdIPU2R.js";o();var s={Wrapper:t.div`
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
    `},c=a(),l=({isOpen:t,formData:a,onChange:o,onSave:l,onDelete:u,onClose:d})=>{if(!t)return null;let f=e=>{let{name:t,value:n}=e.target;o(t,n)};return(0,c.jsx)(s.Wrapper,{role:`dialog`,"aria-modal":`true`,"aria-labelledby":`editAssignmentTitle`,onMouseDown:e=>{e.target===e.currentTarget&&d()},children:(0,c.jsxs)(`div`,{className:`modal`,onMouseDown:e=>e.stopPropagation(),children:[(0,c.jsxs)(`div`,{className:`header`,children:[(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`span`,{className:`label`,children:`Update assignment`}),(0,c.jsx)(`h2`,{id:`editAssignmentTitle`,children:`Edit Assignment`}),(0,c.jsx)(`p`,{children:`Update the assignment details, deadline, status, or reminder.`})]}),(0,c.jsx)(`button`,{type:`button`,className:`closeButton`,onClick:d,"aria-label":`Close edit assignment`,title:`Close`,children:(0,c.jsx)(e,{})})]}),(0,c.jsxs)(`form`,{className:`form`,onSubmit:l,children:[(0,c.jsxs)(`div`,{className:`formGrid`,children:[(0,c.jsxs)(`label`,{className:`field`,children:[(0,c.jsx)(`span`,{className:`fieldLabel`,children:`Title*`}),(0,c.jsx)(`input`,{type:`text`,name:`title`,value:a.title,onChange:f,required:!0})]}),(0,c.jsxs)(`label`,{className:`field`,children:[(0,c.jsx)(`span`,{className:`fieldLabel`,children:`Course`}),(0,c.jsx)(`input`,{type:`text`,name:`course`,value:a.course,onChange:f})]}),(0,c.jsxs)(`label`,{className:`field`,children:[(0,c.jsx)(`span`,{className:`fieldLabel`,children:`Due Date*`}),(0,c.jsx)(`input`,{type:`date`,name:`dueDate`,value:a.dueDate,onChange:f,required:!0})]}),(0,c.jsxs)(`label`,{className:`field`,children:[(0,c.jsx)(`span`,{className:`fieldLabel`,children:`Due Time`}),(0,c.jsxs)(`div`,{className:`inputWrapper`,children:[(0,c.jsx)(r,{}),(0,c.jsx)(`input`,{type:`time`,name:`dueTime`,value:a.dueTime,onChange:f})]})]}),(0,c.jsxs)(`label`,{className:`field`,children:[(0,c.jsx)(`span`,{className:`fieldLabel`,children:`Priority`}),(0,c.jsxs)(`select`,{name:`priority`,value:a.priority,onChange:f,children:[(0,c.jsx)(`option`,{value:`High`,children:`High`}),(0,c.jsx)(`option`,{value:`Medium`,children:`Medium`}),(0,c.jsx)(`option`,{value:`Low`,children:`Low`})]})]}),(0,c.jsxs)(`label`,{className:`field`,children:[(0,c.jsx)(`span`,{className:`fieldLabel`,children:`Estimate`}),(0,c.jsxs)(`div`,{className:`estimateField`,children:[(0,c.jsx)(`input`,{type:`number`,name:`estimateHours`,value:a.estimateHours,onChange:f,min:`0`,step:`0.5`}),(0,c.jsx)(`span`,{children:`hrs`})]})]}),(0,c.jsxs)(`label`,{className:`field`,children:[(0,c.jsx)(`span`,{className:`fieldLabel`,children:`Status`}),(0,c.jsxs)(`select`,{name:`status`,value:a.status,onChange:f,children:[(0,c.jsx)(`option`,{value:`todo`,children:`To-do`}),(0,c.jsx)(`option`,{value:`doing`,children:`Doing`}),(0,c.jsx)(`option`,{value:`done`,children:`Done`})]})]}),(0,c.jsxs)(`label`,{className:`field fieldFull`,children:[(0,c.jsx)(`span`,{className:`fieldLabel`,children:`Notes`}),(0,c.jsx)(`textarea`,{name:`notes`,value:a.notes,onChange:f,rows:`5`,placeholder:`Add instructions, references, or anything useful...`})]})]}),(0,c.jsxs)(`div`,{className:`actions`,children:[(0,c.jsxs)(`button`,{type:`button`,className:`deleteButton`,onClick:u,children:[(0,c.jsx)(i,{}),(0,c.jsx)(`span`,{children:`Delete`})]}),(0,c.jsxs)(`div`,{className:`rightActions`,children:[(0,c.jsx)(`button`,{type:`button`,className:`secondaryButton`,onClick:d,children:`Cancel`}),(0,c.jsxs)(`button`,{type:`submit`,className:`primaryButton`,children:[(0,c.jsx)(n,{}),(0,c.jsx)(`span`,{children:`Save Changes`})]})]})]})]})]})})};export{l as default};