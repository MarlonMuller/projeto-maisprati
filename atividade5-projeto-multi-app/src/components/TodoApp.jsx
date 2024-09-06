import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from './Container' // Importa o component Container estilizado
import Button from './Button' // Importa o component Button estilizado

// Define o componente estilizado Title usando styled-components.
const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

// Define o componente estilizado Input usando styled-components.
const Input = styled.input`
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// Define o componente estilizado TaskList usando styled-components.
const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

// Define o componente estilizado TaskItem usando styled-components.
const TaskItem = styled.li`
  background: #f9f9f9;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  transition: background-color 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #f1f1f1;
  }

  button {
    margin-left: 10px;
    background: transparent;
    border: none;
    color: red;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      color: darkred;
    }
  }
`;

// Define o componente estilizado EditInput usando styled-components.
const EditInput = styled.input`
  margin-left: 10px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 60%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// Define o componente funcional TodoApp.
const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskText, setEditingTaskText] = useState('');

  // Usa useEffect para carregar as tarefas do LocalStorage ao montar o componente.
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Função que salva as tarefas no LocalStorage.
  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  // Função que adiciona uma nova tarefa.
  const addTask = () => {
    if (task) {
      const newTask = { id: Date.now(), text: task }; // Usa Date.now() para gerar um ID único.
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      saveTasksToLocalStorage(updatedTasks);
      setTask('');
    }
  };

  // Função que exclui uma tarefa.
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  // Função que inicia o processo de edição de uma tarefa.
  const editTask = (id, text) => {
    setEditingTaskId(id);
    setEditingTaskText(text);
  };

  // Função que atualiza uma tarefa existente.
  const updateTask = () => {
    const updatedTasks = tasks.map(task =>
      task.id === editingTaskId ? { ...task, text: editingTaskText } : task
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
    setEditingTaskId(null);
    setEditingTaskText('');
  };

  // Retorna o JSX que define o layout e comportamento do componente.
  return (
    <Container>
      <Title>Todo App</Title>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <Button onClick={addTask}>Add Task</Button>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            {editingTaskId === task.id ? (
              <EditInput
                type="text"
                value={editingTaskText}
                onChange={(e) => setEditingTaskText(e.target.value)}
                onBlur={updateTask}
              />
            ) : (
              <>
                {task.text}
                <div>
                  <button onClick={() => editTask(task.id, task.text)}>Edit</button>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
              </>
            )}
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
};

// Exporta o componente TodoApp.
export default TodoApp;
