import React from 'react';

import './App.scss';
import Home from './components/Home/Home';
import {Routes,Route} from "react-router-dom"
import About from "./components/About/About"
import Shop from './components/Shop/Shop';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element={<Shop/>} />
        <Route path='/contact' element={<Contact/>} />
        </Routes>
    </div>
  );
}

export default App;
