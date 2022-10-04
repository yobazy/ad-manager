import React from "react";
import { useState } from "react";
import './AdForm.css';

// const handleChange = (event) => {
//     setContactInfo({ ...adInfo, [event.target.name]: event.target.value });
//   };

// const handleSubmit = (event) => {
// // prevents the submit button from refreshing the page
//     event.preventDefault();
//     console.log(contactInfo);
// };

export default function AdForm(props) {
    const [adInfo, setAdInfo] = useState({
        title: "",
        price: "",
        description: ""
        });

    const handleChange = (event) => {
            setAdInfo({ ...adInfo, [event.target.name]: event.target.value });
    };
        
    const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
            event.preventDefault();
            // setAdsInfo={adInfo}
            props.func([...props.ads, adInfo]);
    };

    return (
        <div className="adform">
            <h2 className="center">Create new listing</h2>
            <form className="element" onSubmit={handleSubmit}>
                <label for="img" className="center">Photos (add up to 10):</label><br></br>
                    <input type="file" id="img" name="img" accept="image/*" /><br></br>
                    <input type="file" id="img" name="img" accept="image/*" /><br></br>
                    <input type="file" id="img" name="img" accept="image/*" /><br></br>
                    <input type="file" id="img" name="img" accept="image/*" /><br></br>
                    <input type="file" id="img" name="img" accept="image/*" /><br></br>
                    <input type="file" id="img" name="img" accept="image/*" /><br></br>
                    <input type="file" id="img" name="img" accept="image/*" /><br></br>
                    <input type="file" id="img" name="img" accept="image/*" /><br></br>
                    <input type="file" id="img" name="img" accept="image/*" /><br></br>
                <label>
                    Title:
                    <input type="text" name="title" className="custom-field" value={adInfo.title} onChange={handleChange} required/>
                </label><br></br>
                <label>
                    Price:
                    <input type="text" name="price" className="custom-field" value={adInfo.price} onChange={handleChange}/>
                </label><br></br>
                <label>
                    Category:
                    <input type="text" name="category" className="custom-field"/>
                </label><br></br>
                <label>
                    Condition:
                    <select
                        // value={this.state.value} 
                        // onChange={this.handleChange}
                    >
                    <option value="grapefruit">New</option>
                    <option value="lime">Used - good</option>
                    <option value="coconut">Used - like new</option>
                </select>
                </label><br></br> 
                    
                <label>
                    Description:
                    <textarea name="description" value={adInfo.description} onChange={handleChange}></textarea>
                </label><br></br>
                <label>
                    Post to:
                    <label>Fb Marketplace</label>
                    <input type="checkbox" />
                    <label>Kiiji</label>
                    <input type="checkbox" />
                </label><br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
  }