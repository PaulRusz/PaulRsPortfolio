// Imports the Navbar.css to grant access to additional classNames
import '../styles/Navbar.css';

function Navbar() {

    return (
        <nav className="navbar">
            <a href="about"> About Me </a>
            <a href="portfolio"> Portfolio </a>
            <a href="contact"> Contact </a>
            <a href="resume"> Resume </a>
        </nav>
    )
}

export default Navbar;