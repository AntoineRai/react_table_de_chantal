import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/home"
import Plats from "./pages/plats"
import Boissons from "./pages/boissons"
import Contact from "./pages/contact"

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Plats/>}/>
      <Route path='/boissons' element={<Boissons/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
