import styled from "styled-components";
export const ListTodoWrapper = styled.div`
  width: 1000px;
  margin: auto;

  .todo {
    display: flex;
    /* justify-content: space-between; */
    background-color: darkgray;
    margin: 3px 0;
    border-radius: 7px;
    position: relative;
    min-height: 100px;
    .main {
      h4,
      p {
        padding-left: 10px;
      }
      h4 {
        padding-top: 3px;
      }
      p {
        padding-bottom: 3px;
      }
    }
    .action {
      display: flex;
      flex-direction: column;
      position: absolute;
      right: 0;
      bottom: 14px;
    }
  }
`;
