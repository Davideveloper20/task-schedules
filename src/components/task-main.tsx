import React from "react";
import { connect } from "react-redux";
import {
  Typography,
  List,
  ListItem,
  Grid,
  Divider,
  Paper,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { Task, TaskState } from "../types/task.interface";
import { editTask, deleteTask } from "../redux/actions";

import { useHookTask } from "../hooks/use-hook-task";

interface TaskListProps {
  tasks: Task[];
  editTask: (task: Task) => void;
  deleteTask: (taskId: string) => void;
}

const TaskMain = ({ tasks, editTask, deleteTask }: TaskListProps) => {
  const {
    editingTask,
    editedName,
    editedContent,
    handleEditClick,
    handleSaveEdit,
    handleDeleteClick,
    setEditedName,
    setEditedContent,
  } = useHookTask();

  const handleToggleCompleted = (task: Task) => {
    editTask({
      ...task,
      id: task.id,
      name: task.name,
      content: task.content,
      completed: !task.completed,
    });
  };

  return (
    <Grid container spacing={2}>
      {tasks.length > 0 && (
        <Grid item xs={12} mb={-6} mt={4}>
          <Typography variant="h4" fontWeight={800} fontSize="16px">
            Lista de Tareas
          </Typography>
        </Grid>
      )}
      <Grid item xs={12}>
        <List>
          {tasks.map((task) => (
            <Paper key={task.id} elevation={3}>
              <ListItem sx={{ my: 5 }}>
                {editingTask === task.id ? (
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Nombre de la Tarea"
                        variant="outlined"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Contenido de la Tarea"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleSaveEdit(editTask)}
                      >
                        Guardar
                      </Button>
                    </Grid>
                  </Grid>
                ) : (
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <Typography variant="h6">
                        {task.name.toUpperCase()}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>{task.content}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        sx={{
                          background: `${task.completed ? "purple" : "green"}`,
                          "&:hover": {
                            backgroundColor: "transparent",
                          },
                        }}
                        onClick={() => handleToggleCompleted(task)}
                      >
                        {task.completed ? "Pendiente" : "Realizada"}
                      </Button>
                      <IconButton
                        onClick={() => handleEditClick(task)}
                        aria-label="Editar Tarea"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        onClick={() =>
                          handleDeleteClick(deleteTask, task.id || "")
                        }
                        aria-label="Eliminar Tarea"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                )}
              </ListItem>
              <Divider />
            </Paper>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: TaskState) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps, { editTask, deleteTask })(TaskMain);
