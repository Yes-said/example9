import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import './App.css'
const App = () => {
  return (
    <div className="App">
      <Navbar />
      
      <div className="content">
        {/* Your content goes here */}
      </div>
      <Sidebar/>
      <Footer/>

    </div>
  )
}

export default App
