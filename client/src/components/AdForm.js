import React from "react";
import { useState } from "react";
import './AdForm.css';
import {Link, Routes, Route, useNavigate, Navigate} from 'react-router-dom';

export default function AdForm(props) {
    const [adInfo, setAdInfo] = useState({
        title: "",
        price: "",
        description: ""
        });
    
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (event) => {
            setAdInfo({ ...adInfo, [event.target.name]: event.target.value });
    };
    const navigate = useNavigate();

    const handleSubmit = (event) => {
            event.preventDefault();
            console.log('Form is being submitted')
            setSubmitting(true);
            props.setAds(adInfo)
            navigate("/view")
    };

    return (
        <div className="adform-container">
            <form className="element" onSubmit={handleSubmit}>
                <div className="photo-container">
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
                </div>
                <div className="fields-container">
                    <div className="field-container">
                        <label className="label">
                                Title:
                        </label>
                        <input type="text" name="title" className="custom-field" value={adInfo.title} onChange={handleChange}/>
                        <br></br>
                    </div>
                    <div className="field-container">
                        <label className="label">
                            Price:
                        </label>
                        <input type="text" name="price" className="custom-field" value={adInfo.price} onChange={handleChange}/>
                        <br></br>
                    </div>
                    <div className="field-container">
                        <label className="label">
                            Category:
                        </label>
                        <input type="text" name="category" className="custom-field"/>
                        <br></br>
                    </div>
                    <div className="field-container">
                        <label>
                            Condition:
                
                        </label>
                        <select className="custom-field"
                                // value={this.state.value} 
                                // onChange={this.handleChange}
                            >
                            <option value="grapefruit">New</option>
                            <option value="lime">Used - good</option>
                            <option value="coconut">Used - like new</option>
                        </select>
                        <br></br> 
                    </div>    
                    <div className="field-container">
                        <label>
                            Description:
                        </label>
                        <textarea name="description" value={adInfo.description} onChange={handleChange}></textarea>
                        <br></br>
                    </div>
                    <label>
                        Post to:
                        <label>Fb Marketplace</label>
                        <input type="checkbox" />
                        <label>Kiiji</label>
                        <input type="checkbox" />
                    </label><br></br>
                </div>
                <input type="submit" value="Submit" />
                {submitting &&
       <div>Submtting Form...</div>
     }
            </form>
        </div>
    )
  }