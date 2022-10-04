import React from 'react';
import './ViewAds.css'

export default function ViewAds(props) {
    console.log('props',props.listings)
    const listing1 = props.listings[0]
    console.log(listing1)

    const listAds = props.listings.map((listing) => {
    
        return (
            <div className="ads-container">
                <div className="ad-container">
                    <p>Title: {listing.title}</p>
                    <p>Price: {listing.price}</p>
                    <p>Description: {listing.description}</p>

                </div>
                {/* <p>{props}</p> */}
            </div>
        );
    })

    return (
        <section className="events">
          <h1 className="events__header text--light">My Ads</h1>
          <ul className="events__list">{listAds}</ul>
        </section>
      );
}