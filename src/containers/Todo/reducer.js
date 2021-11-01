import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  FETCH_TODOS,
  TEST,
  FETCH_TODOS_ERR,
  FETCH_TODOS_SUCCESS,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_ERR,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERR,
  UPDATE_TODO_ERR,
  UPDATE_TODO_SUCCESS,
} from "./constant";

const initialState = {
  todos: [],
  test: [],
  loading: false,
  err: null,
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        loading: true,
        err: null,
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        err: null,
        todos: [...action.payload, ...state.todos],
      };
    case FETCH_TODOS_ERR:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        loading: true,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [action.payload, ...state.todos],
      };
    case ADD_TODO_ERR:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    case DELETE_TODO:
      return {
        ...state,
        loading: true,
        err: null,
      };
    case DELETE_TODO_SUCCESS:
      const newDeleteTodos = [...state.todos].filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        loading: false,
        err: null,
        todos: newDeleteTodos,
      };
    case DELETE_TODO_ERR:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    case UPDATE_TODO:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TODO_SUCCESS:
      const newTodosUpdate = [...state.todos].map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      return {
        ...state,
        loading: false,
        todos: newTodosUpdate,
      };
    case UPDATE_TODO_ERR:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    // case SEARCH_TODO:
    //   const listSearch = [...state.todos].filter((todo) => {
    //     return todo.title.toLowerCase().includes(action.payload.toLowerCase());
    //   });
    //   return {
    //     ...state,
    //     todoSearch: listSearch,
    //   };
    case TEST:
      return {
        ...state,
        test: action.payload,
      };
    default:
      return state;
  }
};
export default todoReducer;
