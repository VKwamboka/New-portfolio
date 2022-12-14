// import logo from './logo.svg';
// import './src/App.css';
import React from "react";
import Nav from "../navbar/Navbar";
import Home from "../home/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <div>
        <Nav />
       
      </div>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
