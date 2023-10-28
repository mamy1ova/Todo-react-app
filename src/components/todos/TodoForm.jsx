import React, { useState } from "react";
import styled from "styled-components";

const TodoForm = ({ onAddTodo }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [error, setError] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim() === "") {
      setError("Заполните поле!!!");
    } else {
      setError(null);
      onAddTodo(enteredValue);
      setEnteredValue("");
    }
  };
  //Функция для проверки инпута. trim() ---> убирает пробел

  return (
    <Div>
      <Form onSubmit={submitHandler}>
        <Input
          type="text"
          value={enteredValue}
          onChange={(e) => setEnteredValue(e.target.value)}
          placeholder="Enter new todo"
        />
        <Button type="submit">Add</Button>
      </Form>
      {error && <p>{error}</p>}
    </Div>
  );
};

export default TodoForm;

const Div = styled.div`
  margin-bottom: 30px;
  & > p {
    color: red;
    font-weight: 500;
    position: absolute;
    right: 52rem;
    top: 160px;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 45%;
  height: 30px;
  font-size: 1.3rem;
  padding: 25px 15px;
  border: none;
  border-radius: 5px;
  outline: none;
  display: inline-block;
`;

const Button = styled.button`
  margin-left: 20px;
  height: 50px;
  cursor: pointer;
  background-color: beige;
  font-size: 1.5rem;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: rgb(246, 246, 143);
  }
`;
