import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    if (task === "") {
      return;
    }

    setTodos([...todos, task]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "100px auto",
        textAlign: "center"
      }}
    >
      <h1>My Todo List</h1>

      <AddTodo addTodo={addTodo} />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;