import { Alert } from "antd";
import {
  call,
  fork,
  take,
  put,
  takeEvery,
  takeLatest,
  delay,
} from "redux-saga/effects";
import {
  addTodoAPI,
  deleteTodoAPI,
  getTodosAPI,
  updateTodoAPI,
} from "../api/todoAPI";
import {
  FETCH_TODOS,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERR,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_ERR,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERR,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_ERR,
} from "./Todo/constant";

function* fetchTodos() {
  console.log("test saga");
  try {
    const { data } = yield call(getTodosAPI);
    yield put({
      type: FETCH_TODOS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: FETCH_TODOS_ERR,
      payload: error,
    });
  }
}
export function* deleteTodo(action) {
  const id = action.payload;
  try {
    yield call(deleteTodoAPI, id);
    // delay(1000);
    yield put({
      type: DELETE_TODO_SUCCESS,
      payload: id,
    });
  } catch (err) {
    yield put({
      type: DELETE_TODO_ERR,
      payload: err,
    });
    // alert(err + "");
  }
}
export function* addTodo(action) {
  try {
    yield call(addTodoAPI, action.payload);
    yield put({
      type: ADD_TODO_SUCCESS,
      payload: action.payload,
    });
  } catch (error) {
    yield put({
      type: ADD_TODO_ERR,
      payload: error,
    });
  }
}
export function* updateTodo(action) {
  try {
    yield call(updateTodoAPI, action.payload);
    yield put({
      type: UPDATE_TODO_SUCCESS,
      payload: action.payload,
    });
  } catch (error) {
    yield put({
      type: UPDATE_TODO_ERR,
      payload: error,
    });
  }
}
// export function* watchDeleteTodo() {
//   yield takeLatest(DELETE_TODO, deleteTodo);
// }

export function* watchFetchTodos() {
  yield takeLatest(FETCH_TODOS, fetchTodos);
}
