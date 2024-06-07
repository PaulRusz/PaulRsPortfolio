// Imports the Navbar.css to grant access to additional classNames
import '../styles/Navbar.css';

function Navbar() {

    return (
        <nav className="navbar">
            <a className="links" href="about"> About Me </a>
            <a className="links" href="portfolio"> Portfolio </a>
            <a className="links" href="contact"> Contact </a>
            <a className="links" href="resume"> Resume </a>
        </nav>
    )
}

export default Navbar;