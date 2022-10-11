// import "./App.css";
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdForm from '../components/AdForm';
import ViewAds from '../components/pages/ViewAds';
// import './App.css'
import './Create.css'


function Create(props) {
    // const [adsInfo, setAdsInfo] = useState([{
    //     title: "example",
    //     price: "$10",
    //     description: ""
    //     },
    //     {
    //       title: "example2",
    //       price: "$11",
    //       description: ""
    //       }
    //     ]);
    
    //   const pull_data = (newAd) => {
    //     console.log('newAd',newAd)
    //     setAdsInfo(newAd)
    //     console.log(adsInfo)
    //   }

    
    return (
        <div className="create-container">
            <div className="create-information">
                <h1>Create new listing</h1>
                <p>You can create a new listing using the form below</p>
            </div>
                <AdForm ads={props.adsInfo} func={props.setAdsInfo}></AdForm>
                {/* <ViewAds listings={props.adsInfo}></ViewAds> */}
        </div>
    );
}

export default Create;
