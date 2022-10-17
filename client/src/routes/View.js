// import "./App.css";
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdForm from '../components/AdForm';
import ViewAds from '../components/pages/ViewAds';
// import './App.css'

function View(props) {
    return (
        <div className="App">
            <body>
                <ViewAds listings={props.adsInfo}></ViewAds>
            </body>
        </div>
    );
}

export default View;
