import React from "react";
import TodoCard from "../TodoCard";
import PropTypes from "prop-types";

const Index = (props) => {
  const { todos, deleteTodos, updateTodos } = props;
  const _deleteTodoHandler = (id) => {
    props.deleteTodos(id);
  };

  const _updateTodoHandler = (id) => {
    props.updateTodos(id);
  };

  return (
    <>
      {props.todos.map((todo) => {
        return (
          <TodoCard
            key={todo.id}
            id={todo.id}
            title={todo.title}
            body={todo.body}
            date={todo.createdAt}
            deleteHandler={() => _deleteTodoHandler(todo.id)}
            updateHandler={() => _updateTodoHandler(todo.id)}
          />
        );
      })}
    </>
  );
};

// prop types TodoList
Index.propTypes = {
  todos: PropTypes.array,
  deleteTodos: PropTypes.func,
  updateTodos: PropTypes.func,
};

export default Index;
