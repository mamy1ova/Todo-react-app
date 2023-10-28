import React from "react";
import Button from "../UI/Button";
import { RiDeleteBack2Line, RiRefreshLine } from "react-icons/ri";
import styled from "styled-components";

const TodoActions = ({
  resetTodoHandler,
  deleteCompletedTodosHandler,
  isExistingCompletedTodo,
}) => {
  return (
    <Div>
      <Button onClick={resetTodoHandler}>
        <RiRefreshLine />
      </Button>
      <Button
        onClick={deleteCompletedTodosHandler}
        disabled={!isExistingCompletedTodo}
      >
        <RiDeleteBack2Line />
      </Button>
    </Div>
  );
};

export default TodoActions;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
