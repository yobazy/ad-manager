// import "./App.css";
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdForm from './components/AdForm';
import ViewAds from './components/pages/ViewAds';
import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const switchListing = function switchToListing() {

}

function App() {
  const [adsInfo, setAdsInfo] = useState([{
    title: "example",
    price: "$10",
    description: ""
    }]);

  const pull_data = (newAd) => {
    console.log('newAd',newAd)
    setAdsInfo(newAd)
    console.log(adsInfo)
  }

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
        <section className="container">
          <h1 className="text">Welcome user!</h1>
          <p className="text">Please sign in to view your ads and create new postings that can be posted on facebook marketplace and kijiji.</p>
        </section>
        {/* Can remove the following line */}
        {/* <button type="button">Create Ad</button> */}
        {/* <h3>View my ads</h3> */}
        <AdForm func={setAdsInfo}></AdForm>
        <ViewAds listings={adsInfo}></ViewAds>
        <Footer />
      </body>
    </div>
  );
}

export default App;
