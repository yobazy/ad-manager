import React from 'react';
import './ViewAds.css'

export default function ViewAds(props) {
    console.log('props',props)
    const listing1 = props.listings[0]

    return (
        <div className="ads-container">
            <h2>My Ads</h2>
            <div className="ad-container">
                <p>Title: {listing1.title}</p>
            </div>
            {/* <p>{props}</p> */}
        </div>
    );
}