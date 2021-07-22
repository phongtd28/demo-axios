import React from "react";
import { ButtonWrapper } from "./style";

const Button = ({ onClick, children, disabled, type }) => {
  return (
    <ButtonWrapper onClick={onClick} disabled={disabled} type={type}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
