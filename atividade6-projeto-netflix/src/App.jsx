import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Principal from "./components/Principal";
import MovieDetails from "./components/MovieDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/principal" element={<Principal />} />
          <Route path="/movie/:type/:id" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
