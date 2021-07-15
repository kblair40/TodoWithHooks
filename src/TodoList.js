import React, { useContext } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";
import { TodosContext } from "./contexts/todos.context";

const useStyles = makeStyles({
  paperList: {
    backgroundColor: "#1f2833",
  },
  divider: {
    backgroundColor: "#c5c6c7",
  },
});

function TodoList() {
  const classes = useStyles();
  const todos = useContext(TodosContext);
  if (todos.length)
    return (
      <Paper className={classes.paperList}>
        <List>
          {todos.map((todo, idx) => (
            <>
              <Todo {...todo} key={todo.id} />
              {idx < todos.length - 1 && (
                <Divider className={classes.divider} />
              )}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
