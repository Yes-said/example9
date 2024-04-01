import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './App.css'
const App = () => {
  return (
    <div className="App">
      <Navbar />
      
      <div className="content">
        {/* Your content goes here */}
      </div>
      <Footer/>
    </div>
  )
}

export default App
