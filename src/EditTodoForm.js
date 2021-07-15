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
  textFieldRoot: {
    "& .MuiFormLabel-root": {
      color: "#1F2833",
    },
    "& .MuiInputBase-root": {
      borderBottom: "1px solid #1f2833",
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
