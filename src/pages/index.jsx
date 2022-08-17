import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoAdd from "../components/TodoAdd";
import TodoList from "../components/TodoList";

const Index = () => {
  const LOCAL_STORAGE_KEY = "list-todos";
  // buat const todos untuk useState
  const [todos, setTodos] = useState([]);
  // input const todo ke todos
  const [todo, setTodo] = useState({
    id: "",
    name: "",
    desc: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.name || !todo.desc) {
      alert("Please fill in all fields");
      return;
    } else if (!todo.id) {
      addTodoHandler(todo);
    } else {
      const updatedTodos = todos.map((newTodo) =>
        newTodo.id === todo.id
          ? { ...newTodo, name: todo.name, desc: todo.desc }
          : newTodo
      );
      setTodos(updatedTodos);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
    }
    setTodo({
      id: "",
      name: "",
      desc: "",
    });
  };

  // buat func add dengan parameter dari todo
  const addTodoHandler = (todo) => {
    // isi useState setTodos dengan data
    const newTodo = [{ id: uuidv4(), name: todo.name, desc: todo.desc }];
    setTodos([...todos, ...newTodo]);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...todos, ...newTodo])
    );
  };

  const deleteTodoHandler = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
  };

  const updateTodoHandler = (id) => {
    const updatedTodos = todos.find((todo) => todo.id == id);
    setTodo(updatedTodos);
  };

  useEffect(() => {
    const listTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    listTodos && setTodos(listTodos);
  }, [setTodos]);

  return (
    <div>
      <h1>Hello, Create Your Activity</h1>
      <TodoAdd
        // addHandler={addTodoHandler}
        todo={todo}
        setTodo={setTodo}
        handleSubmit={handleSubmit}
      />
      <TodoList
        todos={todos}
        deleteTodos={deleteTodoHandler}
        updateTodos={updateTodoHandler}
      />
    </div>
  );
};

export default Index;
