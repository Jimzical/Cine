import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/Navbar.jsx";
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Recommender from './pages/Recommender.jsx';
import Popular from './pages/Popular.jsx';

function App() {
  return (
    <Router>
      <NavBar />    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/recommend" element={<Recommender />} />
      </Routes>
    </Router>
  );
}

export default App;