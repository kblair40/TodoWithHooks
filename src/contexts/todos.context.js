import React, { createContext } from "react";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";
import todoReducer from "../reducer/todo.reducer";

const defaultTodos = [
  { id: 1, task: "Apply to dev job", completed: true },
  { id: 2, task: "Get dev job", completed: false },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    todoReducer
  );
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
