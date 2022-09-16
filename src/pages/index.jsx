import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import TodoAdd from "../components/TodoAdd";
import TodoList from "../components/TodoList";
import { getAllNotes } from "../utils/local-data";

const Index = () => {
  // console.log(getAllNotes());
  const LOCAL_STORAGE_KEY = "list-todos";
  // state for initial data
  const [todos, setTodos] = useState(getAllNotes());

  // input const todo ke todos
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    body: "",
    createdAt: Date(),
    archived: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.title || !todo.body) {
      alert("Please fill in all fields");
      return;
    } else if (!todo.id) {
      //add
      addTodoHandler(todo);
    } else {
      //update
      const updatedTodos = todos.map((newTodo) =>
        newTodo.id === todo.id
          ? { ...newTodo, title: todo.title, body: todo.body }
          : newTodo
      );
      setTodos(updatedTodos);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
    }
    //reset text after update
    setTodo({
      title: "",
      body: "",
    });
  };

  // buat func add dengan parameter dari todo
  const addTodoHandler = (todo) => {
    // isi useState setTodos dengan data
    const newTodo = [
      {
        id: uuidv4(),
        title: todo.title,
        body: todo.body,
        createdAt: Date(),
        archived: false,
      },
    ];
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
    const updatedTodos = todos.find((todo) => todo.id === id);
    setTodo(updatedTodos);
  };

  useEffect(() => {
    const listTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    listTodos && setTodos(listTodos);
  }, [setTodos]);

  return (
    <Container>
      <Row>
        <Col className="bg-light border">
          <h1>Hello, Create Your Activity</h1>
          <TodoAdd
            // addHandler={addTodoHandler}
            todo={todo}
            setTodo={setTodo}
            handleSubmit={handleSubmit}
          />
        </Col>
      </Row>
      <Row>
        <TodoList
          todos={todos}
          deleteTodos={deleteTodoHandler}
          updateTodos={updateTodoHandler}
        />
      </Row>
    </Container>
  );
};

export default Index;
