import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../images/logo.png';

export default function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    const closeMobileMenu = () => {
        setClick(false);
    }
    return  (
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="logo-name nav-items">
                        <img src={logo} width={40} alt="logo"></img>
                        <a href="/" className="nav-links">AdMan</a>
                        <div className="menu-icon" onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                    </div>
                    <div className="nav-items">
                        <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                            <li className="nav-item">
                                <a href="/" className="nav-links" onClick={closeMobileMenu}>Home</a>
                            </li>
                            {/* The following should show when logged in */}
                            <li className="nav-item">
                                <a href="/create" className="nav-links" onClick={closeMobileMenu}>Create Ad</a>
                            </li>
                            <li className="nav-item">
                                <a href="/view" className="nav-links" onClick={closeMobileMenu}>View Ad</a>
                            </li>
                            <li className="nav-item nav-log">
                                <a href="/logout" className="nav-links" onClick={closeMobileMenu}>Log Out</a>
                            </li>
                            {/* The following should show when not logged in */}
                            <li className="nav-item">
                                <a href="/login" className="nav-links" onClick={closeMobileMenu}>Log In</a>
                            </li>
                            <li className="nav-item">
                                <a href="/signup" className="nav-links" onClick={closeMobileMenu}>Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>    
            )
}