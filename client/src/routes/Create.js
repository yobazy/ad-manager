// import "./App.css";
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdForm from '../components/AdForm';
import ViewAds from '../components/pages/ViewAds';
// import './App.css'
import './Create.css'


function Create(props) {
    
    return (
        <div className="create-container">
            <div className="create-information">
                <h1>Create new listing</h1>
                <p>You can create a new listing using the form below</p>
            </div>
                <AdForm ads={props.adsInfo} setAds={props.setAdsInfo}></AdForm>
                {/* <ViewAds listings={props.adsInfo}></ViewAds> */}
        </div>
    );
}

export default Create;
