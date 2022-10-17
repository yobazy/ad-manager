import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Login.css';


export default function Listing(props) {
    const params = useParams();
    console.log('params id', params.id)

    // search ads array for ad based on id
    const ads = props.adsArr;
    let ad = {}
    // const 
    for (let i = 0; i < ads.length; i++)    {
        let adNumber = ads[i]["listingNumber"]
        console.log(typeof adNumber)
        if (adNumber === params.id)    {
            ad = ads[i]
        }
    }

    return (
        <div>
        <div className="ad-container">
            <img src={ad.imagePath} className="border img" width={300} alt="pic"></img>
            <div className="ad-info border">
                <h3>Title: {ad.title}</h3>
                <h5>Price: {ad.price}</h5>
                <h5>Description:</h5>
                <h5>{ad.description}</h5>
            </div>
        </div>
    </div>
    );
}