import React from "react";
import { useState } from "react";
import "./AdForm.css";
import { Link, Routes, Route, useNavigate, Navigate } from "react-router-dom";

export default function AdForm(props) {
  console.log("listingNo", props.listingNumber);

  const [adInfo, setAdInfo] = useState({
    listingNumber: props.listingNumber,
    title: "",
    price: "",
    description: "",
    photo: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    setAdInfo({ ...adInfo, [event.target.name]: event.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form is being submitted");
    setSubmitting(true);
    props.setAds(adInfo);
    let navigateURL = "/listing/" + adInfo.listingNumber;
    navigate(navigateURL);
  };

  return (
    <div className="adform-container">
      <form className="element" onSubmit={handleSubmit}>
        <div className="photo-container">
          <label for="img" className="center">
            Photos (add up to 1):
          </label>
          <br></br>
          <input
            type="file"
            id="img"
            name="img"
            accept="image/*"
            className=""
          />
          <br></br>
          {/* <input type="file" id="img" name="img" accept="image/*" /><br></br>
                        <input type="file" id="img" name="img" accept="image/*" /><br></br>
                        <input type="file" id="img" name="img" accept="image/*" /><br></br>
                        <input type="file" id="img" name="img" accept="image/*" /><br></br>
                        <input type="file" id="img" name="img" accept="image/*" /><br></br>
                        <input type="file" id="img" name="img" accept="image/*" /><br></br>
                        <input type="file" id="img" name="img" accept="image/*" /><br></br>
                        <input type="file" id="img" name="img" accept="image/*" /><br></br> */}
        </div>
        <div className="fields-container">
          <div className="field-container">
            <label className="label">Title:</label>
            <input
              type="text"
              name="title"
              className="custom-field"
              value={adInfo.title}
              onChange={handleChange}
            />
            <br></br>
          </div>
          <div className="field-container">
            <label className="label">Price:</label>
            <input
              type="text"
              name="price"
              className="custom-field"
              value={adInfo.price}
              onChange={handleChange}
            />
            <br></br>
          </div>
          <div className="field-container">
            <label className="label">Category:</label>
            <input type="text" name="category" className="custom-field" />
            <br></br>
          </div>
          <div className="field-container">
            <label>Condition:</label>
            <select
              className="custom-field"
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
            <label>Description:</label>
            <textarea
              name="description"
              value={adInfo.description}
              onChange={handleChange}
            ></textarea>
            <br></br>
          </div>
          <label>
            Post to:<br></br>
            <label>Fb Marketplace</label>
            <input type="checkbox" />
            <label>Kiiji</label>
            <input type="checkbox" />
          </label>
          <br></br>
        </div>
        <input type="submit" value="Submit" />
        {submitting && <div>Submtting Form...</div>}
      </form>
    </div>
  );
}
