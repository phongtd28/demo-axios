import React from "react";
import { InputWrapper } from "./style";

const Input = ({ value, placeholder, onChange, name }) => {
  return (
    <InputWrapper
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></InputWrapper>
  );
};

export default Input;
