// import "./App.css";
import React from "react";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const switchListing = function switchToListing() {

}

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Router>
        <Navbar></Navbar>
        <Routes>
          <Router path="/" exact/>
        </Routes>
      </Router> */}
      <body>
        <h1>Welcome user!</h1>
        <button type="button">Create Ad</button>
        <h3>View my ads</h3>
      </body>
    </div>
  );
}

export default App;
