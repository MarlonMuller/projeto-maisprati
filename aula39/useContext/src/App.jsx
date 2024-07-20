import { useState, createContext, useContext } from 'react'

const AppContext = createContext(null)

function App() {
  const [name, setName] = useState('teste')
  
  return (
    <AppContext.Provider value = {{name, setName}}>
      <div>
        <h1>{name}</h1>
      </div>
      <ChildrenOne />
    </AppContext.Provider>
  )
}

function ChildrenOne() {
  return (
    <ChildrenTwo />
  )

}

function ChildrenTwo() {
  const {setName} = useContext(AppContext)
  return (
    <div>
      <h1>Olaa</h1>
      <button onClick={ () => setName('Marlon') } >Clique aqui para alterar o nome</button>
    </div>

  )
}

export default App