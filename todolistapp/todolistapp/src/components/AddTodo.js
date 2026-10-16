import React, { useState } from "react";

function AddTodo({ addTodo }) {
  const [task, setTask] = useState("");

  return (
    <div>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={() => {
        addTodo(task);
        setTask("");
      }}>
        Add
      </button>
    </div>
  );
}

export default AddTodo;