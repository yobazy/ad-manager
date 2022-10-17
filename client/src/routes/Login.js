import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import { Link, useNavigate, Navigate } from 'react-router-dom';


export default function Login(props) {
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault()
    props.switchLogin()
    navigate("/")
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        {/* <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label> */}
        <div>
          {/* <Link to="/">Click here to login</Link> */}
          <button onClick={login} type="submit">Click here to log-in</button>
        </div>
      </form>
    </div>
  )
}