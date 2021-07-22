import {
  ADD_TODO,
  DELETE_TODO,
  SEARCH_TODO,
  UPDATE_TODO,
  UPDATE_LIST_TODO,
} from "./constant";

export const updateListTodos = (todos) => {
  return {
    type: UPDATE_LIST_TODO,
    payload: todos,
  };
};
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
export const updateTodo = (newTodo) => {
  return {
    type: UPDATE_TODO,
    payload: newTodo,
  };
};
export const searchTodo = (keySearch) => {
  return {
    type: SEARCH_TODO,
    payload: keySearch,
  };
};
