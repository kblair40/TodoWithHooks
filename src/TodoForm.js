import React, { useContext } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Paper, TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todos.context";

const useStyles = makeStyles({
  paper: {
    margin: "1rem 0",
    padding: "0 1rem",
    backgroundColor: "#1f2833",
  },
  textFieldRoot: {
    "& .MuiFormLabel-root": {
      fontFamily: "Source Sans Pro",
      color: "#c5c6c7",
      fontWeight: 600,
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
          margin="normal"
          label="Add new todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
