// Imports the Footer.css to grant access to additional classNames
import '../styles/Footer.css';

function Footer() {

    const instagramUrl = "https://www.instagram.com/paulrusz"

    return (
        <footer className="footer">
            
            <h1 className="h1"> © Paul Ruszkay </h1>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <img className="instagram" src="src/assets/footer/instagram.webp" alt="Instagram symbol"></img>
            </a>
            
        </footer>
    )
}

export default Footer;