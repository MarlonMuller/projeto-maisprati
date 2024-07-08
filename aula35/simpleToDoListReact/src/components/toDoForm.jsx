import {useState} from 'react'

function ToDoForm ({addToDo}) {
    const[value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo(value);
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            />
            <button type='submit'>Adicionar</button>
        </form>
    )
}

export default ToDoForm