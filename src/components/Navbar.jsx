// Imports the Navbar.css to grant access to additional classNames
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {

    return (

        <nav className="navbar">
            <Link to="/" className="links">About Me</Link>
            <Link to="/portfolio" className="links">Portfolio</Link>
            <Link to="/contact" className="links">Contact</Link>
            <Link to="/resume" className="links">Resume</Link>
        </nav>

    )
}

export default Navbar;