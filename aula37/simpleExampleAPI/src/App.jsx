import { useState, useEffect } from 'react'

function App() {

  const [user, setUser] = useState(0)

  // API request

  useEffect(() => {
    fetch('https://api.github.com/users/marlonmuller')
      .then((res) => res.json())
      .then((json) => setUser(json))
  }, [])

  return (
    <>
      <h1>OI</h1>

      {user && (
      <div>
      <p>Nome: {user.name}</p>
      <p>Cidade: {user.location}</p>
    </div>
      )}
    </>
  )
}

export default App