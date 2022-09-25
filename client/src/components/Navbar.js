import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    return  (
            <nav className="navbar">
                <div className="navbar-container">
                    <a href="/" className="navbar-logo">AdMan</a>
                    <div className="menu-icon">
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </div>
            </nav>    
            )
}

export default Navbar;
