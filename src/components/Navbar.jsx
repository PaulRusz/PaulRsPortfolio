// Imports the Navbar.css to grant access to additional classNames
import { useState } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {

    const [showMenu, setShowMenu ] = useState(false)

    return (

        <nav className="navbar">
            <div>
                <p className="logo"> PR </p>
            </div>

            <button className="hamburger-menu" onClick={() => setShowMenu(!showMenu)}>
                &#9776;
                </button>
            
            
            <div className={`links ${showMenu ? 'show' : ''}`}>
            <Link to="/" className="links">About Me</Link>
            <Link to="/portfolio" className="links">Portfolio</Link>
            <Link to="/contact" className="links">Contact</Link>
            <Link to="/resume" className="links">Resume</Link>
            </div>
            
            
        </nav>

    )
}

export default Navbar;