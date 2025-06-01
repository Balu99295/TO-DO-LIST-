// components/TodoItem.jsx
import React from 'react';

const TodoItem = ({ task, toggleComplete, removeTask }) => {
  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.text}
      <button onClick={() => toggleComplete(task.id)}>✓</button>
      <button onClick={() => removeTask(task.id)}>✗</button>
    </div>
  );
};

export default TodoItem;
