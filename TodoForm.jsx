// components/TodoForm.jsx
import React, { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input);
      setInput('');
    } else {
      alert("Task can't be empty!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new task..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
