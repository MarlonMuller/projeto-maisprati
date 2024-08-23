import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderLogin from './components/HeaderLogin';
import Login from './components/Login';
import Footer from './components/Footer';
import Principal from './components/Principal'
import './App.css';

function App() {


  return (
    <Router>
      <>
        { <HeaderLogin /> }
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/principal' element={<Principal />} />
        </Routes>
        <Footer />
      </>
    </Router>
  )
}

export default App
