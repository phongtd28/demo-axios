import styled from "styled-components";

const renderBackgroundColor = (props) => {
  switch (props.type) {
    case "primary":
      return "#1890ff";
    case "text":
    case "dashed":
    case "link":
      return "#fff";
    default:
      return "#fff";
  }
};
const renderBorder = (props) => {
  switch (props.type) {
    case "primary":
      return "0.5px solid #1890ff";
    case "text":
    case "link":
      return "none";
    case "dashed":
      return "0.5px dotted black";
    default:
      return "black";
  }
};
const renderColor = (props) => {
  switch (props.type) {
    case "primary":
      return "#fff";
    case "text":
    case "dashed":
      return "balck";
    case "link":
      return "#1890ff";
    default:
      return "#black";
  }
};
export const ButtonWrapper = styled.button`
  color: ${(props) => renderColor};
  background-color: ${(props) => renderBackgroundColor};
  border: ${(props) => renderBorder};
  padding: 4px 16px;
  margin: 5px;
  border-radius: 3px;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    background-color: #d9d9d9;
    border: none;
  }
  &:hover {
    opacity: 0.7;
  }
`;
