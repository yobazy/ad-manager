// import "./App.css";
import React from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdForm from './components/AdForm';
import ViewAds from './components/ViewAds';

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
        <section>
          <h1>Welcome user!</h1>
          <p>Please sign in to view your ads and create new postings that can be posted on facebook marketplace and kijiji.</p>
        </section>
        <button type="button">Create Ad</button>
        <h3>View my ads</h3>
        <AdForm></AdForm>
        <ViewAds></ViewAds>
        <Footer />
      </body>
    </div>
  );
}

export default App;
