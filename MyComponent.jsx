import React, { useState } from 'react';
import TaskForm from './TaskForm'; // Adiciona a importação do TaskForm

const MyComponent = () => {
  const [todos, setTodos] = useState([]); 

  const addTask = (newTask) => {
    setTodos([...todos, newTask]); 
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos); 
  };

  return (
    <div className="todo-container">
      <h1>Lista de Tarefas</h1>
      <TaskForm addTask={addTask} /> {/* Inclui o TaskForm */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.priority}>
            {todo.task} 
            <button onClick={() => handleDeleteTodo(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
