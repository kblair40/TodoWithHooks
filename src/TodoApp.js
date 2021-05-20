import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Paper, Typography, AppBar, Toolbar, Grid } from "@material-ui/core";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Item one", completed: false },
    { id: 2, task: "Item two", completed: true },
    { id: 3, task: "Item three", completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
  };
  const removeTodo = (todoId) => {
    // filter out removed todo
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    // call setTodos with new todos array
    setTodos(updatedTodos);
  };
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList removeTodo={removeTodo} todos={todos} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
