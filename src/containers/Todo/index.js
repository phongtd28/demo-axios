import React, { useState, useEffect } from "react";
import Form from "../../components/Form";
import ListTodo from "../../components/ListTodo";
import { TodoWrapper } from "./style";
import {
  addTodo,
  deleteTodo,
  updateTodo,
  searchTodo,
  updateListTodos,
} from "./actions";
import { connect } from "react-redux";
import axios from "axios";
import { v4 } from "uuid";

const Todo = ({
  todos,
  todoSearch,
  handleAddTodo,
  handleDeleteTodo,
  handleSearchTodo,
  handleUpdateTodo,
  handleUpdateListTodo,
}) => {
  useEffect(() => {
    axios
      .get(`https://60f7c7909cdca00017454fc0.mockapi.io/todo`)
      .then((listTodo) => handleUpdateListTodo(listTodo.data))
      .catch((err) => console.log(new Error(err + "")));
  }, []);

  const [todo, setTodo] = useState({
    id: "",
    title: "",
    content: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [keySearch, setKeySearch] = useState("");

  const onAddTodo = async () => {
    const id = v4();
    const newTodo = { ...todo, id: `${id}` };

    await axios
      .post(`https://60f7c7909cdca00017454fc0.mockapi.io/todo`, newTodo)
      .then((rs) => handleAddTodo(newTodo))
      .then((rs) => clearTodo())

      .catch((err) => console.log(new Error(err + "llll")));
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
    // console.log({ todo });
    setTodo(todo);
  };
  const onDeleteTodo = async (id) => {
    await axios
      .delete(`https://60f7c7909cdca00017454fc0.mockapi.io/todo/${id}`)
      .then(() => handleDeleteTodo(id))
      .catch((err) => console.log(new Error(err + "")));
  };
  const onUpdateTodo = async () => {
    await axios
      .put(`https://60f7c7909cdca00017454fc0.mockapi.io/todo/${todo.id}`, todo)
      .then(() => handleUpdateTodo(todo))
      .then(() => {
        clearTodo();
        setIsEdit(false);
      })
      .catch((err) => console.log(new Error(err + "")));
  };
  const onCancelUpdate = () => {
    setIsEdit(false);
    clearTodo();
  };
  const onChangeSearch = (e) => {
    setKeySearch(e.target.value);
  };
  console.log({ keySearch });
  console.log({ todoSearch });
  useEffect(() => {
    handleSearchTodo(keySearch);
  }, [keySearch]);
  return (
    <TodoWrapper>
      <Form
        todo={todo}
        isEdit={isEdit}
        onAddTodo={onAddTodo}
        onChangeTodo={onChangeTodo}
        onUpdateTodo={onUpdateTodo}
        onCancelUpdate={onCancelUpdate}
        onChangeSearch={onChangeSearch}
      />
      <ListTodo
        todos={keySearch ? todoSearch : todos}
        onDeleteTodo={onDeleteTodo}
        onEditTodo={onEditTodo}
      />
      {/* <RenderListTodo /> */}
    </TodoWrapper>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    todos: state.todoReducer.todos,
    todoSearch: state.todoReducer.todoSearch,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleUpdateListTodo: (todos) => dispatch(updateListTodos(todos)),
    handleAddTodo: (todo) => dispatch(addTodo(todo)),
    handleDeleteTodo: (id) => dispatch(deleteTodo(id)),
    handleUpdateTodo: (newTodo) => dispatch(updateTodo(newTodo)),
    handleSearchTodo: (key) => dispatch(searchTodo(key)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
