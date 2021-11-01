import { all, fork, takeLatest } from "@redux-saga/core/effects";
import {
  addTodo,
  deleteTodo,
  updateTodo,
  watchFetchTodos,
} from "./containers/sagaTodos";
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./containers/Todo/constant";

export default function* rootSaga() {
  yield all([
    fork(watchFetchTodos),
    takeLatest(DELETE_TODO, deleteTodo),
    takeLatest(ADD_TODO, addTodo),
    takeLatest(UPDATE_TODO, updateTodo),
  ]);
}
