import { Task, TaskWorking } from "../types/task.interface"

export const newTask = ( task : Task ) : TaskWorking  => {
    return {
        type: 'create',
        payload: task,
      };
}

export const editTask = (task: Task): TaskWorking => {
  return {
    type: 'edit',
    payload: task,
  };
};

export const deleteTask = (taskId: string): TaskAction => {
  return {
    type: 'delete',
    payload: taskId,
  };
};

interface TaskAction {
  type: string;
  payload?: Task | string;
}



