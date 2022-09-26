import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

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
                    <a href="/" className="navbar-logo">AdMan</a>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                        <li className="nav-item">
                            <a href="/" className="nav-links" onClick={closeMobileMenu}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/newad" className="nav-links" onClick={closeMobileMenu}>Create Ad</a>
                        </li>
                        <li className="nav-item">
                            <a href="/viewads" className="nav-links" onClick={closeMobileMenu}>View Ad</a>
                        </li>
                        <li className="nav-item">
                            <a href="/sign-up" className="nav-links" onClick={closeMobileMenu}>Sign Up</a>
                        </li>
                    </ul>
                    
                </div>
            </nav>    
            )
}