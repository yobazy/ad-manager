// import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdForm from "./components/AdForm";
import ViewAds from "./components/pages/ViewAds";
import "./App.css";
import Home from "./routes/Home";
import Create from "./routes/Create";
import View from "./routes/View";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Camry from './images/blackcamry.jpeg'
import Burrito from './images/burrito.jpeg'
import Listing from './routes/Listing'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

const switchListing = function switchToListing() {};

function App() {
  const [token, setToken] = useState(0)

  const switchLogin = () => {
    console.log('token', token)
    setToken(!token)
    console.log(token)
  }
  const [adsInfo, setAdsInfo] = useState([
    {
      listingNumber: 1,
      title: "2004 black camry!! Needs to go!",
      price: "$4000",
      description:
        "Here we have for sale a 2004 black camry. Been a few accidents but we will surive.",
      imagePath: Camry
    },
    {
      listingNumber: 2,
      title: "Half eaten burrito, good as new.",
      price: "$11",
      description: "Title says it all.",
      imagePath: Burrito
    },
  ]);

  const updateAds = (newAd) => {
    console.log("newAd", newAd);
    setAdsInfo([...adsInfo, newAd]);
    console.log(adsInfo);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar token={token} switchLogin={switchLogin}/>
        <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/create"
            element={<Create adsInfo={adsInfo} setAdsInfo={updateAds} listingNumber={adsInfo.length} />}
          />
          <Route path="/view" element={<View adsInfo={adsInfo} />} />
          <Route path="/login" element={<Login switchLogin={switchLogin}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/listing/:id" element={<Listing adsArr={adsInfo}/>} />
          {/* <Route path="/logout" element={<Logout />} /> */}
        </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
