import { useState } from 'react'
import Forms from './components/Forms.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Forms />
    </>
  )
}

export default App
