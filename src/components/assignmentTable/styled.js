import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;

        border: 1px solid var(--border-color);
        border-radius: 16px;

        overflow: hidden;

        background: var(--surface-color);

        box-shadow: 0 14px 36px var(--shadow-color);

        .tableScroll {
            width: 100%;

            overflow-x: auto;
        }

        table {
            width: 100%;
            min-width: 1050px;

            border-collapse: collapse;
        }

        thead th {
            padding: 12px 13px;

            border-bottom: 1px solid var(--border-color);

            background: var(--surface-soft-color);

            color: var(--text-soft-color);

            font-size: 0.66rem;
            font-weight: 700;

            text-align: left;

            white-space: nowrap;
        }

        tbody td {
            padding: 12px 13px;

            border-bottom: 1px solid var(--border-color);

            color: var(--text-soft-color);

            font-size: 0.71rem;

            vertical-align: middle;
        }

        tbody tr {
            cursor: pointer;

            transition:
                background 160ms ease,
                box-shadow 160ms ease;
        }

        tbody tr:nth-child(even) {
            background: color-mix(
                in srgb,
                var(--surface-soft-color) 38%,
                transparent
            );
        }

        tbody tr:hover {
            background: var(--surface-soft-color);

            box-shadow: inset 3px 0 0 var(--primary-color);
        }

        tbody tr:last-child td {
            border-bottom: 0;
        }

        .titleContent {
            min-width: 180px;
            max-width: 300px;

            display: flex;
            flex-direction: column;
            gap: 4px;

            strong {
                color: var(--text-color);

                font-size: 0.72rem;
                line-height: 1.45;
            }

            small {
                color: var(--text-muted-color);

                font-size: 0.61rem;
                line-height: 1.45;

                display: -webkit-box;
                overflow: hidden;

                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }

        .courseBadge,
        .priorityBadge,
        .statusBadge,
        .dueBadge {
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--border-color);
            border-radius: 999px;

            white-space: nowrap;
        }

        .courseBadge {
            padding: 4px 8px;

            background: var(--surface-soft-color);

            color: var(--text-soft-color);

            font-size: 0.61rem;
            font-weight: 700;
        }

        .priorityBadge {
            padding: 4px 8px;

            font-size: 0.61rem;
            font-weight: 700;
        }

        .priorityBadge.high {
            border-color: color-mix(
                in srgb,
                var(--danger-color) 32%,
                var(--border-color)
            );

            background: var(--danger-soft-color);

            color: var(--danger-color);
        }

        .priorityBadge.medium {
            border-color: color-mix(
                in srgb,
                var(--info-color) 30%,
                var(--border-color)
            );

            background: var(--info-soft-color);

            color: var(--info-color);
        }

        .priorityBadge.low {
            border-color: color-mix(
                in srgb,
                var(--success-color) 30%,
                var(--border-color)
            );

            background: var(--success-soft-color);

            color: var(--success-color);
        }

        .statusBadge {
            padding: 4px 9px;

            font-size: 0.61rem;
            font-weight: 700;
        }

        .statusBadge.todo {
            background: var(--surface-soft-color);

            color: var(--text-soft-color);
        }

        .statusBadge.doing {
            border-color: color-mix(
                in srgb,
                var(--info-color) 30%,
                var(--border-color)
            );

            background: var(--info-soft-color);

            color: var(--info-color);
        }

        .statusBadge.done {
            border-color: color-mix(
                in srgb,
                var(--success-color) 30%,
                var(--border-color)
            );

            background: var(--success-soft-color);

            color: var(--success-color);
        }

        .dueCell {
            min-width: 120px;

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
        }

        .dueContent {
            display: flex;
            flex-direction: column;
            gap: 1px;

            span {
                color: var(--text-soft-color);

                white-space: nowrap;
            }

            small {
                color: var(--text-muted-color);

                font-size: 0.6rem;

                white-space: nowrap;
            }
        }

        .dueBadge {
            padding: 3px 7px;

            font-size: 0.57rem;
            font-weight: 700;
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

        .estimate,
        .reminder {
            color: var(--text-muted-color);

            font-size: 0.65rem;

            white-space: nowrap;
        }

        .actions {
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .actionButton {
            width: 31px;
            height: 31px;

            flex-shrink: 0;

            display: grid;
            place-items: center;

            border: 1px solid var(--border-color);
            border-radius: 8px;

            background: var(--surface-soft-color);

            color: var(--text-muted-color);

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
                border-color: var(--border-strong-color);

                background: var(--surface-strong-color);

                color: var(--text-color);

                transform: translateY(-1px);
            }

            &:active {
                transform: translateY(0);
            }
        }

        .actionButton.danger:hover {
            border-color: color-mix(
                in srgb,
                var(--danger-color) 45%,
                var(--border-color)
            );

            background: var(--danger-soft-color);

            color: var(--danger-color);
        }

        .emptyState {
            min-height: 280px;

            padding: 30px;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8px;

            text-align: center;
        }

        .emptyIcon {
            width: 46px;
            height: 46px;

            margin-bottom: 4px;

            display: grid;
            place-items: center;

            border: 1px solid var(--border-color);
            border-radius: 14px;

            background: var(--surface-soft-color);

            color: var(--text-muted-color);

            svg {
                width: 20px;
                height: 20px;
            }
        }

        .emptyState h3 {
            font-family: Antonio, Verdana, sans-serif;

            font-size: 1.1rem;
        }

        .emptyState p {
            max-width: 390px;

            color: var(--text-muted-color);

            font-size: 0.67rem;
            line-height: 1.6;
        }

        @media (max-width: 760px) {
            display: none;
        }

        @media print {
            border: 0;

            box-shadow: none;

            .tableScroll {
                overflow: visible;
            }

            table {
                min-width: 0;
            }

            thead th {
                background: #eeeeee !important;
                color: #000000 !important;
            }

            tbody td {
                color: #000000 !important;
            }

            tbody tr {
                background: #ffffff !important;

                box-shadow: none !important;
            }

            .actions {
                display: none;
            }

            .courseBadge,
            .priorityBadge,
            .statusBadge,
            .dueBadge {
                border-color: #777777 !important;

                background: transparent !important;

                color: #000000 !important;
            }

            .titleContent strong,
            .titleContent small,
            .dueContent span,
            .dueContent small,
            .estimate,
            .reminder {
                color: #000000 !important;
            }
        }
    `,
};
