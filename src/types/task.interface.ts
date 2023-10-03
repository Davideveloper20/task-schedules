export interface Task {
  id: string;
  name: string;
  content: string;
  completed?: boolean;
}
  
export interface TaskState {
    tasks: Task[];
}

export interface TaskWorking {
    type: string;
    payload?: Task | string;
}

export interface TaskFunctionsProps {
    editingTask: string | null;
    editedName: string;
    editedContent: string;
    handleEditClick: (task: Task) => void;
    handleSaveEdit: (editTask: (task: Task) => void) => void;
    handleDeleteClick: (deleteTask: (taskId: string) => void, taskId: string) => void;
    handleToggleCompleted: (toggleCompleted: (taskId: string) => void, taskId: string, tasks: Task[]) => void;
  }