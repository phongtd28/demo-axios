import React from "react";
import Button from "../commons/Button";
import { ListTodoWrapper } from "./style";

const ListTodo = ({ todos, onDeleteTodo, onEditTodo }) => {
  return (
    <ListTodoWrapper>
      {todos.map((todo) => {
        return (
          <div className="todo" key={todo.id}>
            <div className="main">
              <h4>{todo.title}</h4>
              <p>{todo.content}</p>
            </div>
            <div className="action">
              <Button
                onClick={() => onDeleteTodo(todo.id)}
                children="Delete"
                type="primary"
              />
              <Button
                children="Edit"
                type="primary"
                onClick={() => onEditTodo(todo)}
              />
            </div>
          </div>
        );
      })}
    </ListTodoWrapper>
  );
};

export default ListTodo;
