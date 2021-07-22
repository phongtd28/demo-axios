import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  SEARCH_TODO,
  UPDATE_LIST_TODO,
} from "./constant";

const initialState = {
  todos: [],
  todoSearch: [],
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LIST_TODO:
      return {
        ...state,
        todos: [...action.payload, ...state.todos],
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case DELETE_TODO:
      const newDeleteTodos = [...state.todos].filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        todos: newDeleteTodos,
      };
    case UPDATE_TODO:
      const newUpdateTodos = [...state.todos].map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      return {
        ...state,
        todos: newUpdateTodos,
      };
    case SEARCH_TODO:
      const listSearch = [...state.todos].filter((todo) => {
        return todo.title.toLowerCase().includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        todoSearch: listSearch,
      };
    default:
      return state;
  }
};
export default todoReducer;
