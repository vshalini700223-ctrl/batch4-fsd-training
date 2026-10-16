import React from "react";

function TodoList({ todos, deleteTodo }) {
  return (
    <div>
      <h2>Todo List</h2>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}

            <button onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;