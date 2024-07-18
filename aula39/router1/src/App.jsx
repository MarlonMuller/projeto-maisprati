import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Contact from './assets/components/Contact'
import Navigation from './assets/components/Navigation'


function App() {
  

  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/contact' Component={Contact} />
        </Routes>
      </Router>
    </>
  )
}

export default App
