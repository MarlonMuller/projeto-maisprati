import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Container from '../components/Container'; // Importa o component Container estilizado
import Button from '../components/Button'; // Importa o component Button estilizado
import Title from '../components/Title'; // Importa o component título estilizado
import Input from '../components/Input'; // Importa o component input estilizado

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

// Define o componente funcional TodoApp.
const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskText, setEditingTaskText] = useState('');
  const inputRef = useRef(null); // Referência para o input de edição

  // Usa useEffect para carregar as tarefas do LocalStorage ao montar o componente.
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Usa useEffect para focar automaticamente no input de edição quando uma tarefa estiver sendo editada.
  useEffect(() => {
    if (editingTaskId !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingTaskId]);

  // Função que salva as tarefas no LocalStorage.
  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  // Função que adiciona uma nova tarefa.
  const addTask = () => {
    if (task.trim() !== '') { // Verifica se a tarefa não está vazia
      const newTask = { id: Date.now(), text: task.trim() }; // Usa Date.now() para gerar um ID único e remove espaços extras
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      saveTasksToLocalStorage(updatedTasks);
      setTask(''); // Limpa o campo de input após adicionar a tarefa
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
    if (editingTaskText.trim() !== '') { // Verifica se o texto editado não está vazio
      const updatedTasks = tasks.map(task =>
        task.id === editingTaskId ? { ...task, text: editingTaskText.trim() } : task
      );
      setTasks(updatedTasks);
      saveTasksToLocalStorage(updatedTasks);
      setEditingTaskId(null);
      setEditingTaskText('');
    }
  };

  // Função que adiciona uma tarefa ao pressionar Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      editingTaskId !== null ? updateTask() : addTask();
    }
  };

  // Retorna o JSX que define o layout e comportamento do componente.
  return (
    <Container>
      <Title>Todo App</Title>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add a new task"
      />
      <Button onClick={addTask}>Add Task</Button>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            {editingTaskId === task.id ? (
              <Input
                type="text"
                ref={inputRef} // Define a referência para o input de edição
                value={editingTaskText}
                onChange={(e) => setEditingTaskText(e.target.value)}
                onBlur={updateTask}
                onKeyPress={handleKeyPress} // Permite salvar a edição ao pressionar Enter
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
