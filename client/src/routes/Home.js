// import "./App.css";
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import './App.css'

function Home() {
    return (
        <div className="App">
        <body>
                <section className="container" id="welcome">
                <h1 className="text">Welcome user!</h1>
                <p className="text">Please sign in to view your ads and create new postings that can be posted on facebook marketplace and kijiji.</p>
                <div>
                    <button>Sign in</button>
                    <button>Register</button>
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
