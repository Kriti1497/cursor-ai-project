export interface Project {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'in-progress';
  progress: number;
  dueDate: string;
  team?: string[];
} 