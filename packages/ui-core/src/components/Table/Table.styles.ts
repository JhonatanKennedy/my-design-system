import { css } from "lit";

export const tableStyles = css`
  .table-wrap {
    border: 3px solid var(--ds-border);
    box-shadow: 4px 4px 0 var(--ds-border);
    background: var(--ds-card);
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-family: var(--ds-font-family-body, inherit);
    font-size: var(--ds-font-size, 0.875rem);
    color: var(--ds-foreground);
  }

  thead {
    background: var(--ds-muted);
  }

  th {
    text-align: left;
    padding: 0.75rem 1rem;
    font-family: var(--ds-font-family-display, inherit);
    font-weight: var(--ds-font-weight-medium, 700);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.75rem;
    color: var(--ds-muted-foreground);
    border-bottom: 3px solid var(--ds-border);
    white-space: nowrap;
  }

  td {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--ds-border);
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  tbody tr:hover {
    background: var(--ds-accent);
  }

  .align-left {
    text-align: left;
  }

  .align-center {
    text-align: center;
  }

  .align-right {
    text-align: right;
  }

  .empty {
    padding: 1.5rem 1rem;
    text-align: center;
    color: var(--ds-muted-foreground);
  }

  caption {
    caption-side: bottom;
    text-align: left;
    padding: 0.75rem 1rem;
    font-size: 0.75rem;
    color: var(--ds-muted-foreground);
    border-top: 3px solid var(--ds-border);
  }
`;
