import { Reducer } from "redux";
import { TaskState, TaskWorking } from "../types/task.interface";

const initialState: TaskState = {
    tasks: [],
  };

const mainReducer : Reducer <TaskState , TaskWorking> = ( state = initialState, action) => {

    const actionHandlers : any = {
        'create': () => ({
          ...state,
          tasks: [...state.tasks, action.payload],
        }),
        'edit': () => {
          const editedTask : any = action.payload;

          const updatedTasks = state.tasks.map((task) => {
            if (task.id === editedTask.id) {
              return {
                ...task,
                name: editedTask.name,
                content: editedTask.content,
                completed: editedTask.completed
              };
            }            
            return task;
          });          

        return {
          ...state,
          tasks: updatedTasks,
        };
        },
        'delete': () => {
          const taskIdToDelete = action.payload;
          const updatedTasks = state.tasks.filter((task) => task.id !== taskIdToDelete);

        return {
          ...state,
          tasks: updatedTasks,
        };
        },
        default: () => state,
      };
    
      const actionHandler : any = actionHandlers[action.type] || actionHandlers.default;
      return actionHandler();
}

export default mainReducer;
