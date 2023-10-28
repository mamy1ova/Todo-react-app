import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoActions from "./TodoActions";
import uuid from "react-uuid";

const TodoManager = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // С помощью => useEffect() сохраняем в localStorage

  const getDate = () => {
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth() + 1; //почему +1 ? потому что месяцы начинаются с 0
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();

    const formatDate = `${day}/${month}/${year}  - ${hour}:${minute}`;
    return formatDate;
  };
  // Функция для получения даты, вызываем в внутри функции addTodoHandler()

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuid(),
      date: getDate(),
    };
    setTodos([...todos, newTodo]);
    // setTodos((prevState) => [...prevState, newTodo]);
  };
  // Функция для добавления задач

  const deleteButtonHandler = (id) => {
    // const exchangeTodos = todos.filter((todo) => todo.id !== id);
    // setTodos(exchangeTodos);
    setTodos(todos.filter((item) => item.id !== id));
  };
  // Функция для удалении задачи по id используем метод filter()

  const toogleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };
  // Функция для переключения состояния она принимает id задачи для которой нужно изменить состояние.

  const resetTodoHandler = () => {
    setTodos([]);
  };
  // Функция для сброса, передаем эту функцию TodoActions в button

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((item) => !item.isCompleted));
  };
  // Это функция тоже для удаления

  const completedTodosCount = () =>
    todos.filter((todo) => todo.isCompleted).length;
  // Функция для того чтобы считать количество выполненных задач

  return (
    <>
      <div className="App">
        <h1>Todo App </h1>
        <TodoForm onAddTodo={addTodoHandler} />
        <TodoActions
          resetTodoHandler={resetTodoHandler}
          deleteCompletedTodosHandler={deleteCompletedTodosHandler}
          isExistingCompletedTodo={!!completedTodosCount}
        />
        <TodoList
          todos={todos}
          onDeleteTodo={deleteButtonHandler}
          onToogle={toogleTodoHandler}
        />
        {completedTodosCount() > 0 && (
          <p>You have completed {completedTodosCount()} todos</p>
        )}
      </div>
    </>
  );
};

export default TodoManager;
