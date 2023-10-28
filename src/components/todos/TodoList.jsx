import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

const TodoList = ({ todos, onDeleteTodo, onToogle }) => {
  return (
    <Div>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          onDeleteTodo={onDeleteTodo}
          onToogle={onToogle}
        />
      ))}
    </Div>
  );
};

export default TodoList;

const Div = styled.div`
  padding: 10px;
`;
