import * as React from "react";
import { useState } from "react";
import { connect } from "react-redux";

import { Button, TextField, Box, Stack, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";

import { newTask, editTask, deleteTask } from "../../redux/actions";
import { Task } from "./../../types/task.interface";

type Anchor = "top" | "left" | "bottom" | "right";

interface DrawerCreateTaskProps {
  newTask?: (task: Task) => void;

  stateTask?: string;
}

function DrawerCreateTask({
  newTask,

  stateTask,
}: DrawerCreateTaskProps) {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [name, setName] = useState<string>("");

  const [content, setContent] = useState<string>("");

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const generateUniqueId = () => {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const taskId = generateUniqueId();

    const createTask: Task = {
      id: taskId,
      name: name,
      content: content,
      completed: true,
    };

    console.log("createTask", createTask);

    if (newTask) {
      newTask(createTask);
    }

    setName("");
    setContent("");
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        p: 5,
        width: anchor === "top" || anchor === "bottom" ? "auto" : 350,
      }}
      role="presentation"
    >
      <form onSubmit={handleSubmit}>
        <Stack direction="column" spacing={5}>
          <TextField
            label="Ingresa el título de la tarea"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Ingresa el contenido de la tarea"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Box mt={2}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              onClick={toggleDrawer(anchor, false)}
            >
              Agregar Tarea
            </Button>
          </Box>
        </Stack>
      </form>
    </Box>
  );

  return (
    <Box sx={{ mt: 2, mb: 4 }}>
      {(["bottom"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Box>
            <Button onClick={toggleDrawer(anchor, true)} variant="contained">
              {" "}
              {stateTask === "init" ? "Crear Tarea" : "Editar Tarea"}
            </Button>
          </Box>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}

export default connect(null, { newTask, editTask })(DrawerCreateTask);
