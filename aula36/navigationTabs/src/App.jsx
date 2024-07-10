import {useState} from 'react'

function App () {
  const[estado, setEstado] = useState(0)

  const conteudo = [
    ['conteúdo 1', 'conteúdo 2', 'conteúdo 3'],
    ['conteúdo 4', 'conteúdo 5', 'conteúdo 6'],
    ['conteúdo 7', 'conteúdo 8', 'conteúdo 9']
  ]

  return (
    <>
      <div>
        <h1>React</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div>
        <button onClick={() => setEstado(0)}>Botão 1</button>
        <button onClick={() => setEstado(1)}>Botão 2</button>
        <button onClick={() => setEstado(2)}>Botão 3</button>
      </div>
      <div>
        <ul>
          {conteudo[estado].map((lista, index) => (
            <li key={index}>{lista}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App