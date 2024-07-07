import {useState} from 'react'

function App() {

  const[count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clique aqui</button>
      <p>Você clicou {count} vezes</p>
    </div>
  )
}

export default App