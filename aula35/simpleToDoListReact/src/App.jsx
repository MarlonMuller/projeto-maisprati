import {useState} from 'react'
import ToDoForm from './components/toDoForm.jsx'

function App () {
  const[toDos, setToDos] = useState([])

  const addToDo = (toDo) => {
    if(!toDo) return;
    setToDos([...toDos, toDo])
  }

  return (
    <div>
      <h1>Lista de tarefas</h1>
      <ToDoForm addToDo={addToDo} />
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index}>{toDo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
