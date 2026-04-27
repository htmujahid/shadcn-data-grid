# shadcn-data-grid

A [shadcn/ui](https://ui.shadcn.com) registry that provides a `data-grid` component built on top of [react-data-grid](https://github.com/adazzle/react-data-grid), themed to match your shadcn design system using CSS variables.

## What's included

The registry item ships:

- **`DataGrid`** — re-exported from `react-data-grid` with full TypeScript support
- **`SelectEditor`** — inline dropdown editor for string enum columns
- **`BooleanEditor`** — inline Yes/No dropdown editor for boolean columns
- **`NumberEditor`** — inline number input editor for numeric columns
- **CSS theming** — `.rdg`, `.rdg-header-row .rdg-cell`, and `.rdg-cell` overrides wired to your shadcn tokens (`--card`, `--muted`, `--border`, `--ring`, etc.)

## Installation

```bash
npx shadcn@latest add https://raw.githubusercontent.com/htmujahid/shadcn-data-grid/master/public/r/data-grid.json
```

This will:
1. Install `react-data-grid` as a dependency
2. Copy `src/components/ui/data-grid.tsx` into your project
3. Inject the `.rdg` CSS theming into your global CSS file

## Usage

```tsx
import { DataGrid, SelectEditor, BooleanEditor, NumberEditor } from "@/components/ui/data-grid";
import type { Column } from "react-data-grid";

interface Row {
  id: number;
  title: string;
  status: string;
  active: boolean;
  priority: number;
}

const columns: Column<Row>[] = [
  { key: "id", name: "ID", width: 60 },
  { key: "title", name: "Title" },
  {
    key: "status",
    name: "Status",
    renderEditCell: (props) => (
      <SelectEditor {...props} options={["Todo", "In Progress", "Done"]} />
    ),
  },
  { key: "active", name: "Active", renderEditCell: BooleanEditor },
  { key: "priority", name: "Priority", renderEditCell: NumberEditor },
];

export function MyGrid() {
  const [rows, setRows] = useState<Row[]>(initialRows);

  return (
    <DataGrid
      columns={columns}
      rows={rows}
      onRowsChange={setRows}
      rowKeyGetter={(row) => row.id}
      defaultColumnOptions={{ resizable: true }}
    />
  );
}
```

## Stack

- [Vite](https://vite.dev) + [React 19](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (base-nova preset)
- [react-data-grid](https://github.com/adazzle/react-data-grid)
