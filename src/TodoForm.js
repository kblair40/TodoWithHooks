import React, { useContext } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Paper, TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todos.context";

const useStyles = makeStyles({
  paper: {
    margin: "1rem 0",
    padding: "0 1rem",
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

function TodoForm() {
  const classes = useStyles();
  const [value, handleChange, reset] = useInputState("");
  const dispatch = useContext(DispatchContext);
  return (
    <Paper className={classes.paper}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD", task: value });
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          className={classes.textFieldRoot}
          // InputProps={{classes: {label: }}}
          margin="normal"
          label="Add new todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
