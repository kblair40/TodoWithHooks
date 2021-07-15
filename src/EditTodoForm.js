import React, { useContext } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";

import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todos.context";

const useStyles = makeStyles({
  form: {
    marginLeft: "1rem",
    width: "50%",
  },
  paper: {
    margin: "1rem 0",
    padding: "0 1rem",
    backgroundColor: "#cfc6c7",
    backgroundColor: "#1f2833",
  },
  textFieldRoot: {
    "& .MuiFormLabel-root": {
      fontFamily: "Source Sans Pro",
      color: "#1F2833",
      color: "#45a29e",
    },
    "& .MuiInputBase-root": {
      fontFamily: "Source Sans Pro",
      color: "white",
      borderBottom: "1px solid #45a29e",
      "&:after": {
        borderColor: "#0b0c10",
      },
    },
  },
});

export default function EditTodoForm({ id, task, toggleEditForm }) {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, newTask: value });
        reset();
        toggleEditForm();
      }}
      className={classes.form}
    >
      <TextField
        margin="normal"
        value={value}
        className={classes.textFieldRoot}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
