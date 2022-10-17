import React, { useState } from 'react';
// import './Login.css';

export default function Signup() {
    return(
        <div className="login-wrapper">
          <h1>Please Sign Up</h1>
          {/* <form onSubmit={handleSubmit}> */}
          <form>
            <label>
              <p>Username</p>
              <input type="text" />
            </label>
            <label>
              <p>Password</p>
              <input type="password" />
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      )
}
