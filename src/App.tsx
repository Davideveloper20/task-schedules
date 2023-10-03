import React from "react";
import Box from "@mui/material/Box/Box";
import "./App.css";
import TaskMain from "./components/task-main";
import MainTaskForm from "./components/forms/main-task-form";
import AppBarTask from "./components/headers/app-bar";

function App() {
  return (
    <>
      <Box p={5} flexGrow={1}>
        <AppBarTask />
        <MainTaskForm />
        <TaskMain />
      </Box>
    </>
  );
}

export default App;
