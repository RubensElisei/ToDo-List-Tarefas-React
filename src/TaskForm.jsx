import React, { useState } from 'react';
import { RiAddLine } from 'react-icons/ri';
import './TaskForm.css'; // Importa o estilo para este componente

function TaskForm({ addTask }) {
    const [task, setTask] = useState(''); // Estado para o nome da tarefa
    const [priority, setPriority] = useState('low'); // Estado para a prioridade
  
    const handleSubmit = (e) => {
      e.preventDefault(); // Evita o comportamento padrão do formulário
      if (task.trim() === '') return; // Verifica se a tarefa está vazia
      addTask({ task, priority }); // Chama a função `addTask` com a tarefa e a prioridade
      setTask(''); // Reseta o campo da tarefa
      setPriority('low'); // Reseta o seletor de prioridade
    };
  
    return (
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome da Tarefa"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Baixa Prioridade</option>
          <option value="medium">Média Prioridade</option>
          <option value="high">Alta Prioridade</option>
        </select>
        <button type="submit">
          <RiAddLine className="button-icon" /> Adicionar Tarefa
        </button>
      </form>
    );
}

export default TaskForm;
