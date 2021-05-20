import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, idx) => (
            <>
              <Todo
                id={todo.id}
                removeTodo={removeTodo}
                task={todo.task}
                key={todo.id}
                completed={todo.completed}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {idx < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
