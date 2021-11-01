import React from "react";
import Button from "../commons/Button";
import Input from "../commons/Input";
import { FormWrapper } from "./style";

const Form = ({
  onAddTodo,
  onUpdateTodo,
  onChangeTodo,
  onCancelUpdate,
  onChangeSearch,
  todo,
  isEdit,
  onTest,
}) => {
  return (
    <FormWrapper>
      <h3>Add New Todo...</h3>
      <Input
        name="title"
        value={todo.title}
        placeholder="title"
        onChange={onChangeTodo}
      />
      <Input
        name="content"
        value={todo.content}
        placeholder="content"
        onChange={onChangeTodo}
      />
      <div className="group-btn">
        {isEdit ? (
          <Button
            children="Cancel"
            type="primary"
            // disabled={!isEdit}
            onClick={onCancelUpdate}
          />
        ) : (
          <Button
            children="Add"
            type="primary"
            disabled={isEdit || !todo.title || !todo.content}
            onClick={onAddTodo}
          />
        )}
        <Button
          children="Update"
          type="primary"
          disabled={!isEdit}
          onClick={onUpdateTodo}
        />
      </div>
      <div className="form-search">
        <Input placeholder="search title..." onChange={onChangeSearch}></Input>
      </div>
      <Button children="test" type="primary" onClick={onTest} />
    </FormWrapper>
  );
};

export default Form;
