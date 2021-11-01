import { getTodosAPI } from "../../api/todoAPI";
import { ADD_TODO, DELETE_TODO, TEST, UPDATE_TODO } from "./constant";
const FETCH_TODOS = "FETCH_TODOS";
const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
const FETCH_TODOS_ERR = "FETCH_TODOS_ERR";

//test Thunk

// export const fetchTodos = () => {
//   return async (dispatch) => {
//     dispatch(getTodos());
//     try {
//       console.log(" fetch todossssssssssssss");
//       const tt = await getTodosAPI();
//       console.log({ tt });
//       dispatch(getTodosSuccess(tt.data));
//     } catch (error) {
//       dispatch(getTodosErr(error));
//     }
//     // await getTodosAPI()
//     //   .then((res) => dispatch(getTodosSuccess(res)))
//     //   .catch((err) => dispatch(getTodosErr(err)));
//   };
// };

// const getTodos = () => {
//   return {
//     type: FETCH_TODOS,
//   };
// };
// const getTodosSuccess = (todos) => {
//   return {
//     type: FETCH_TODOS_SUCCESS,
//     payload: todos,
//   };
// };
// const getTodosErr = (err) => {
//   return {
//     type: FETCH_TODOS_ERR,
//     payload: err,
//   };
// };

export const fetchTodos = () => {
  return {
    type: FETCH_TODOS,
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
// export const searchTodo = (keySearch) => {
//   return {
//     type: SEARCH_TODO,
//     payload: keySearch,
//   };
// };
export const test = (some) => {
  return {
    type: TEST,
    payload: some,
  };
};
