// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
// import Textbox from './components/Textbox';



function App() {
  return (
    <>
    <Navbar  title="Textutils"
             aboutText= "About US"/>

    <div className="container my-4">
      {/* <Textbox heading="Enter the text to analyse" /> */}
      <About/>
    </div>         
         
    </>
    
  );
}

export default App;
