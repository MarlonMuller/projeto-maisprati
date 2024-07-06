import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='firstDiv' >
        <img src="./assets/react.png" alt="react" />
        <div className='secondDiv'>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </div>
      <div className='thirdDiv'>
        <ul className='myFirstList'>
          <li><a href="#" onClick={className='active'} >Why React?</a></li>
          <li><a href="#">Core Features</a></li>
          <li><a href="#">Related Resources</a></li>
          <li><a href="#">React vs JS</a></li>
        </ul>
        <div id='result'>
          <ul>
            <li>Ok</li>
            <li>Ok</li>
            <li>Ok</li>
            <li>Ok</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
