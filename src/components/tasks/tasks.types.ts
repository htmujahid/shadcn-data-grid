export type TaskStatus = 'Todo' | 'In Progress' | 'In Review' | 'Done' | 'Cancelled';
export type TaskPriority = 'Low' | 'Medium' | 'High' | 'Critical';

export type Task = {
  id: number;
  title: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignee: string;
  dueDate: string;
  estimatedHours: number;
  completedHours: number;
  tags: string[];
  description: string;
  isBlocked: boolean;
};
