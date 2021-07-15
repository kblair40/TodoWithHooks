import React, { useContext, memo } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import CheckBox from "@material-ui/core/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import classNames from "classnames";

import { DispatchContext } from "./contexts/todos.context";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";

const useStyles = makeStyles({
  item: {
    fontFamily: "Source Sans Pro",
    color: "#c5c6c7",
    fontSize: "1.1rem",
  },
  itemComplete: {
    textDecoration: "line-through",
  },
  itemIncomplete: {
    textDecoration: "none",
  },
  listItem: {
    height: "64px",
  },
  deleteIcon: {
    color: "#f47174",
  },
  editIcon: {
    color: "#c5c6c7",
  },
  checkBox: {
    color: "#c5c6c7",
    "&.Mui-checked": {
      color: "#c5c6c7",
    },
  },
});

function Todo({ id, task, completed }) {
  const classes = useStyles();

  const [isEditing, toggle] = useToggleState(false);
  const dispatch = useContext(DispatchContext);
  return (
    <ListItem className={classes.listItem}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleEditForm={toggle} />
      ) : (
        <>
          <CheckBox
            className={classes.checkBox}
            tabIndex={-1}
            checked={completed}
            onClick={() => dispatch({ type: "TOGGLE", id: id })}
          />
          <ListItemText
            classes={{
              root: classNames(
                classes.item,
                completed ? classes.itemComplete : classes.itemIncomplete
              ),
            }}
            disableTypography={true}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => dispatch({ type: "REMOVE", id: id })}
            >
              <DeleteIcon className={classes.deleteIcon} />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
              <EditIcon className={classes.editIcon} />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default memo(Todo);
