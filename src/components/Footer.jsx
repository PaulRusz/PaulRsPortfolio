// Imports the Footer.css to grant access to additional classNames
import '../styles/Footer.css';

import instaImage from "../assets/footer/instagram.webp"

function Footer() {

    const instagramUrl = "https://www.instagram.com/paulrusz"

    return (
        <footer className="footer">
            
            <h1 className="h1"> © Paul Ruszkay </h1>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <img src={instaImage} className="instagram" alt="Instagram symbol"></img>
            </a>
            
        </footer>
    )
}

export default Footer;