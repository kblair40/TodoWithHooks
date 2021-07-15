import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Paper, Typography, AppBar, Toolbar, Grid } from "@material-ui/core";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { TodosProvider } from "./contexts/todos.context";

const useStyles = makeStyles({
  paperRoot: {
    padding: 0,
    margin: 0,
    height: "100vh",
    backgroundColor: "#0B0C10",
  },
  appBarRoot: {
    height: "64px",
    backgroundColor: "#1F2833",
    color: "#45A29E",
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  headerText: {
    fontFamily: "Bebas Neue",
    fontSize: "3rem",
    letterSpacing: "4px",
  },
});

function TodoApp() {
  const classes = useStyles();
  return (
    <Paper classes={{ root: classes.paperRoot }} elevation={0}>
      <AppBar position="static" classes={{ root: classes.appBarRoot }}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.headerText}>TODOS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
