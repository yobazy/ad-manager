// import "./App.css";
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css'

function Home() {
    return (
        <div className="App">
        <body>
                <section className="container" id="welcome">
                <h1 className="text">Welcome user!</h1>
                <p className="text">Please log in to view your ads and create new postings that can be posted on facebook marketplace and kijiji.</p>
                <div className="images-container">
                    <img className="example-ad" alt="example"></img>
                    <img className="example-ad" alt="example"></img>
                </div>
                <div className="home-buttons">
                    <button className="home-button">Log in</button>
                    <button className="home-button">Sign up</button>
                </div>
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
