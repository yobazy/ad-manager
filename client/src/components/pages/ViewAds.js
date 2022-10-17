import React from 'react';
import './ViewAds.css'

export default function ViewAds(props) {
    console.log('props',props.listings)
    const listing1 = props.listings[0]
    console.log(listing1)

    const listAds = props.listings.map((listing) => {
    
        return (
            <div>
                <div className="ad-container">
                    <img src={listing.imagePath} className="border img" width={300} alt="pic"></img>
                    <div className="ad-info border">
                        <h3>Title: {listing.title}</h3>
                        <h5>Price: {listing.price}</h5>
                        <h5>Description:</h5>
                        <h5>{listing.description}</h5>
                    </div>
                </div>
            </div>
        );
    })

    return (
        <section className="events">
          <h1 className="events__header text--light">My Ads</h1>
          <ul className="ads-conatiner">{listAds}</ul>
        </section>
      );
}