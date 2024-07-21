import ChildrenOne from './components/ChildrenOne.jsx'
import {useState} from 'react'
import {AppContext} from './context/AppContext.jsx'



function App () {
  const [name, setName] = useState('Marlon')

  return (
    <AppContext.Provider value={{name, setName}} >
      <h1>{name}</h1>
      <ChildrenOne />
    </AppContext.Provider>
  )
}

export default App