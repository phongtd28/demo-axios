import React, { useState, useEffect } from "react";
import { createSelector } from "reselect";
import Form from "../../components/Form";
import ListTodo from "../../components/ListTodo";
import { TodoWrapper } from "./style";
import {
  addTodo,
  deleteTodo,
  updateTodo,
  fetchTodos,
  handleTest,
  test,
} from "./actions";
import { connect } from "react-redux";
import axios from "axios";
import { v4 } from "uuid";
import Loading from "../../components/commons/Loading";

const Todo = ({
  loading,
  todos,
  handleAddTodo,
  handleDeleteTodo,
  handleUpdateTodo,
  handleFetchTodos,
  handleTest,
}) => {
  useEffect(() => {
    // getdata();
    handleFetchTodos();
  }, []);
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    content: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [keySearch, setKeySearch] = useState();
  const [listSearch, setListSearch] = useState(null);

  const onAddTodo = async () => {
    const newTodo = { ...todo, id: v4() };

    // await axios
    //   .post(`https://60f7c7909cdca00017454fc0.mockapi.io/todo`, newTodo)
    //   .then((rs) => handleAddTodo(newTodo))
    //   .then((rs) => clearTodo())

    //   .catch((err) => console.log(new Error(err + "llll")));
    handleAddTodo(newTodo);
  };
  const clearTodo = () => {
    setTodo({ id: "", title: "", content: "" });
  };
  const onChangeTodo = (e) => {
    const value = e.target.value;
    setTodo({
      ...todo,
      [e.target.name]: value,
    });
  };
  const onEditTodo = (todo) => {
    setIsEdit(!isEdit);
    setTodo(todo);
  };
  const onDeleteTodo = async (id) => {
    // await axios
    //   .delete(`https://60f7c7909cdca00017454fc0.mockapi.io/todo/${id}`)
    //   .then(() => handleDeleteTodo(id))
    //   .catch((err) => console.log(new Error(err + "")));
    handleDeleteTodo(id);
  };
  const onUpdateTodo = async () => {
    // await axios
    //   .put(`https://60f7c7909cdca00017454fc0.mockapi.io/todo/${todo.id}`, todo)
    //   .then(() => handleUpdateTodo(todo))
    //   .then(() => {
    //     clearTodo();
    //     setIsEdit(false);
    //   })
    //   .catch((err) => console.log(new Error(err + "")));
    handleUpdateTodo(todo);
  };
  const onCancelUpdate = () => {
    setIsEdit(false);
    clearTodo();
  };
  const onChangeSearch = (e) => {
    setKeySearch(e.target.value);
  };
  const handleSearchTodo = (key) => {
    const listSearch = [...todos].filter((todo) => {
      return todo.title.toLowerCase().includes(key.toLowerCase());
    });
    setListSearch(listSearch);
  };
  useEffect(() => {
    handleSearchTodo(keySearch);
  }, [keySearch]);

  const [count, setCoount] = useState(0);
  const onTest = () => {
    setCoount(count + 1);
  };
  useEffect(() => {
    handleTest(count);
  }, [count]);
  return (
    <TodoWrapper>
      {loading ? <Loading /> : ""}
      <Form
        todo={todo}
        isEdit={isEdit}
        onAddTodo={onAddTodo}
        onChangeTodo={onChangeTodo}
        onUpdateTodo={onUpdateTodo}
        onCancelUpdate={onCancelUpdate}
        onChangeSearch={onChangeSearch}
        onTest={onTest}
      />

      <ListTodo
        todos={keySearch ? listSearch : todos}
        onDeleteTodo={onDeleteTodo}
        onEditTodo={onEditTodo}
      />
    </TodoWrapper>
  );
};

const getTodoSelector = createSelector(
  (state) => state.todoReducer.todos,
  // (state) => state.todoReducer.loading,
  (todos) => todos
);
const mapStateToProps = (state) => {
  return {
    todos: getTodoSelector(state),
    loading: state.todoReducer.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleFetchTodos: () => dispatch(fetchTodos()),
    handleAddTodo: (todo) => dispatch(addTodo(todo)),
    handleDeleteTodo: (id) => dispatch(deleteTodo(id)),
    handleUpdateTodo: (newTodo) => dispatch(updateTodo(newTodo)),
    handleTest: (some) => dispatch(test(some)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
