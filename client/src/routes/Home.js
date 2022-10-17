// import "./App.css";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";
import ad2 from "../images/ad2.png";
import ad3 from "../images/ad3.png";

// import ad2 from 'client/src/images/ad2.png';

function Home() {
  const CheckUser = () => {
    return (
      <>
        <p className="text">
          Please log in to view your ads and create new postings that can be
          posted on facebook marketplace and kijiji.
        </p>
        <div className="home-buttons center">
          <form action="/login">
            <button className="home-button">Log in</button>
          </form>
          <form action="/signup">
            <button className="home-button">Sign up</button>
          </form>
        </div>
      </>
    );
  };
  return (
    <div className="App">
      <body>
        <section className="container" id="welcome">
          <h1 className="text">Welcome to Adman!</h1>
          <div className="images-container center">
            <img
              src={ad2}
              width={200}
              className="example-ad"
              alt="example"
            ></img>
            <img
              src={ad2}
              width={200}
              className="example-ad"
              alt="example"
            ></img>
          </div>
          <CheckUser />
        </section>
        {/* <Route path="/create">
                <AdForm ads={adsInfo} func={setAdsInfo}></AdForm>
            </Route>
            <Route path="/view">
                <ViewAds listings={adsInfo}></ViewAds>
            </Route>  */}
        {/* </Routes> */}
      </body>
    </div>
  );
}

export default Home;
