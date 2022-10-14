import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  let isLoggedIn =true

  function logOut() {
    console.log('logging out')
    isLoggedIn = false;
    console.log(isLoggedIn)
  }

  function CheckUser(props) {
    console.log("check user called");
    console.log(props, "props");
    // let isLoggedIn = props.isLoggedIn;

    if (props.isLoggedIn) {
      return (
        <>
          <li className="nav-item">
            <Link to="/create" className="nav-links" onClick={closeMobileMenu}>
              Create Ad
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/view" className="nav-links" onClick={closeMobileMenu}>
              View Ad
            </Link>
          </li>
          <li className="nav-item nav-log">
            <button onClick={props.logOut}>Log Out</button>
            {/* <Link to="/logout" className="nav-links" onClick={closeMobileMenu}>
              Log Out
            </Link> */}
          </li>
        </>
      );
    }
    return (
      <>
        <li className="nav-item">
          <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
            Log In
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/signup" className="nav-links" onClick={closeMobileMenu}>
            Sign Up
          </Link>
        </li>
      </>
    );
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-name nav-items">
          <img src={logo} width={40} alt="logo"></img>
          <a href="/" className="nav-links">
            AdMan
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
        <div >
          <ul className={click ? "nav-menu-active nav-items" : "nav-menu nav-items"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <CheckUser className="nav-links" isLoggedIn={isLoggedIn} logOut={logOut}/>
            {/* The following should show when not logged in */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
