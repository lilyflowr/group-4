import Navbar from "./Component/Navbar";
// import React, {useState} from 'react';
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import SignIn from "./Pages/signIn";
import SignUp from "./Pages/SignUp";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CardOne from "./Card/cardOne";
import CardTwo from "./Card/cardTwo";
import CardThree from "./Card/cardThree";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
// import { useState } from "react";
import PrivacyPolicy from "./Pages/PrivacyPolicy";



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
        <Route path="CardOne" element={<CardOne />} />
        <Route path="CardTwo" element={<CardTwo />} />
        <Route path="CardThree" element={<CardThree />} />
        <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />

      </Routes>
    </Router>
  );
}

export default App;
