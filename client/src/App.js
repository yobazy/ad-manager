// import "./App.css";
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdForm from './components/AdForm';
import ViewAds from './components/pages/ViewAds';
import './App.css'
import Home from './routes/Home';
import Create from './routes/Create';
import View from './routes/View';

import {BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from 'react-router-dom';

const switchListing = function switchToListing() {

}

function App() {
  const [adsInfo, setAdsInfo] = useState([{
    title: "example",
    price: "$10",
    description: ""
    },
    {
      title: "example2",
      price: "$11",
      description: ""
      }
    ]);

  const pull_data = (newAd) => {
    console.log('newAd',newAd)
    setAdsInfo(newAd)
    console.log(adsInfo)
  }

  return (
    <div className="App">
      <Navbar />
      <body>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create adsInfo={adsInfo} setAdsInfo={pull_data}/>} />
          <Route path="/view" element={<View adsInfo={adsInfo}/>} />
        </Routes>
        </BrowserRouter>
        <Footer />
      </body>
    </div>
  );
}

export default App;
