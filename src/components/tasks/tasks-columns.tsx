import { renderTextEditor, type Column } from "react-data-grid";
import {
  Hash, Type, CircleDot, Flag, User,
  Calendar, Clock, CheckCheck, Tag, FileText, ShieldAlert,
} from "lucide-react";
import type { Task, TaskStatus, TaskPriority } from "./tasks.types";
import { SelectEditor, NumberEditor, BooleanEditor } from "@/components/ui/data-grid";

const STATUS_OPTIONS: TaskStatus[] = ['Todo', 'In Progress', 'In Review', 'Done', 'Cancelled'];
const PRIORITY_OPTIONS: TaskPriority[] = ['Low', 'Medium', 'High', 'Critical'];

export const tasksColumns: readonly Column<Task>[] = [
  {
    key: 'id',
    name: 'ID',
    width: 60,
    renderHeaderCell: () => <span className="flex items-center gap-1.5"><Hash size={12} className="shrink-0" />ID</span>,
  },
  {
    key: 'title',
    name: 'Title',
    width: 220,
    renderHeaderCell: () => <span className="flex items-center gap-1.5"><Type size={12} className="shrink-0" />Title</span>,
    renderEditCell: renderTextEditor,
  },
  {
    key: 'status',
    name: 'Status',
    width: 120,
    renderHeaderCell: () => <span className="flex items-center gap-1.5"><CircleDot size={12} className="shrink-0" />Status</span>,
    renderEditCell: (props) => <SelectEditor {...props} options={STATUS_OPTIONS} />,
  },
  {
    key: 'priority',
    name: 'Priority',
    width: 120,
    renderHeaderCell: () => <span className="flex items-center gap-1.5"><Flag size={12} className="shrink-0" />Priority</span>,
    renderEditCell: (props) => <SelectEditor {...props} options={PRIORITY_OPTIONS} />,
  },
  {
    key: 'assignee',
    name: 'Assignee',
    width: 120,
    renderHeaderCell: () => <span className="flex items-center gap-1.5"><User size={12} className="shrink-0" />Assignee</span>,
    renderEditCell: renderTextEditor,
  },
  {
    key: 'dueDate',
    name: 'Due Date',
    width: 120,
    renderHeaderCell: () => <span className="flex items-center gap-1.5"><Calendar size={12} className="shrink-0" />Due Date</span>,
    renderEditCell: renderTextEditor,
  },
  {
    key: 'estimatedHours',
    name: 'Est. Hours',
    width: 120,
    renderHeaderCell: () => <span className="flex items-center gap-1.5"><Clock size={12} className="shrink-0" />Est. Hours</span>,
    renderEditCell: NumberEditor,
  },
  {
    key: 'completedHours',
    name: 'Done Hours',
    width: 120,
    renderHeaderCell: () => <span className="flex items-center gap-1.5"><CheckCheck size={12} className="shrink-0" />Done Hours</span>,
    renderEditCell: NumberEditor,
  },
  {
    key: 'tags',
    name: 'Tags',
    width: 160,
    renderHeaderCell: () => <span className="flex items-center gap-1.5"><Tag size={12} className="shrink-0" />Tags</span>,
    renderCell: ({ row }) => <>{JSON.stringify(row.tags)}</>,
    renderEditCell: ({ row, onRowChange, onClose }) => (
      <input
        autoFocus
        className="w-full h-full px-2 outline-none bg-card text-card-foreground text-sm font-mono"
        defaultValue={row.tags.join(', ')}
        onBlur={(e) => {
          onRowChange({ ...row, tags: e.target.value.split(',').map((t) => t.trim()).filter(Boolean) }, true);
          onClose(true);
        }}
      />
    ),
  },
  {
    key: 'isBlocked',
    name: 'Blocked',
    width: 120,
    renderHeaderCell: () => <span className="flex items-center gap-1.5"><ShieldAlert size={12} className="shrink-0" />Blocked</span>,
    renderCell: ({ row }) => <>{row.isBlocked ? 'Yes' : 'No'}</>,
    renderEditCell: BooleanEditor,
  },
  {
    key: 'description',
    name: 'Description',
    minWidth: 200,
    renderHeaderCell: () => <span className="flex items-center gap-1.5"><FileText size={12} className="shrink-0" />Description</span>,
    renderEditCell: renderTextEditor,
  },
];
