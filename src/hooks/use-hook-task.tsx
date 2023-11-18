import { useState } from "react";

import { Task } from "../types/task.interface";

export function useHookTask() {
  const [editingTask, setEditingTask] = useState<string | null>(null);
  const [editedName, setEditedName] = useState<string>("");
  const [editedContent, setEditedContent] = useState<string>("");

  const [editedCompleted, setEditedCompleted] = useState<boolean>();

  const handleEditClick = (task: Task) => {
    if (task.id) {
      setEditingTask(task.id);
      setEditedName(task.name);
      setEditedContent(task.content);
      setEditedCompleted(task.completed);
    }
  };

  const handleSaveEdit = (editTask: (task: Task) => void) => {
    console.log("editingTask", editingTask);
    if (editingTask) {
      editTask({
        id: editingTask,
        name: editedName,
        content: editedContent,
        completed: editedCompleted,
      });
      setEditingTask(null);
      setEditedName("");
      setEditedContent("");
    }
  };

  const handleDeleteClick = (
    deleteTask: (taskId: string) => void,
    taskId: string
  ) => {
    deleteTask(taskId);
  };

  const handleToggleCompleted = (editTask: (task: Task) => void, task: Task) => {
    editTask({
      ...task,
      id: task.id,
      name: task.name,
      content: task.content,
      completed: !task.completed,
    });
  };

  return {
    editingTask,
    editedName,
    editedContent,
    handleEditClick,
    handleSaveEdit,
    handleDeleteClick,
    setEditedName,
    setEditedContent,
    handleToggleCompleted
  };
}
