import styled from "styled-components";

export const LoadingWrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100wh;
  height: 100vh;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  img {
    position: fixed;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20%;
    width: 10%;
  }
`;
