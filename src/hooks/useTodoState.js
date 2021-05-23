import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuid } from "uuid";

const useTodoState = (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
  return {
    todos,
  };
};

export default useTodoState;
