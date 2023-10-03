import React, { useState } from "react";
import { connect } from "react-redux";

import { newTask } from "../../redux/actions";

import { Task } from "../../types/task.interface";
import { Stack, Typography } from "@mui/material";

import DrawerCreateTask from "../drawers/drawer-create-task";

interface MainTaskFormProps {
  newTask?: (task: Task) => void;
}

const MainTaskForm = ({ newTask }: MainTaskFormProps) => {
  return (
    <Stack direction="column" spacing={2} mt={4}>
      <Typography variant="h4" fontWeight={800} fontSize="16px">
        BIENVENID@ AL GESTOR DE TAREAS COMERCIALIZADORA S3
      </Typography>

      <DrawerCreateTask stateTask="init" />
    </Stack>
  );
};

export default connect(null, { newTask })(MainTaskForm);
