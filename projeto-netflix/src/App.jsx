import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Footer from './components/Footer';
import Principal from './components/Principal'
import './App.css';

function App() {


  return (
    <Router>
      <>
        <Header />
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
