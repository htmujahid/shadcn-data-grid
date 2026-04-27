
import { useState } from 'react';
import { DataGrid } from '@/components/ui/data-grid';
import { tasksColumns } from './tasks-columns';
import { taskRows } from './tasks.data';

export function TasksDataGrid() {
  const [rows, setRows] = useState(taskRows);

  return (
    <DataGrid
      className='h-min! max-h-full! overflow-auto!'
      columns={tasksColumns}
      rows={rows}
      onRowsChange={setRows}
      rowKeyGetter={(row) => row.id}
      defaultColumnOptions={{ resizable: true }}
    />
  );
}