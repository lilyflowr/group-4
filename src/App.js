import Navbar from "./Component/Navbar";
// import React, {useState} from 'react';
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import SignIn from "./Pages/signIn";
import SignUp from "./Pages/SignUp";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
// import { useState } from "react";


function App() {
  // const[isLoggedIn, setIsLoggedIn ] = useState(false);
  return (
    
    <Router>  
      <div className="App">
        <Navbar />
        </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Blog" element={<Blog />} />
        <Route path= "SignIn" element={<SignIn />} /> 
        <Route path= "SignUp" element={<SignUp />} /> 
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
