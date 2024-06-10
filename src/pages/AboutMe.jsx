// Imports the AboutMe.css to grant access to additional classNames
import '../styles/AboutMe.css';
import { motion } from "framer-motion";

function AboutMe() {

    return (

         // Code for 'fade in' transition
        <motion.div
        className="page1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
      >

        <div className="about-me-container">
            <h1>             <img className="monacoImage" src="src/assets/Monaco.png" alt="Me in Monaco" />About Me             <img className="weddingImage" src="src/assets/wedding.png" alt="Wedding Image" /></h1>

            <p> 
            Hey! My name is Paul. <br></br> I’m from New Jersey originally but have lived in Delaware a large majority of my life.  

            I attended college in Newark, Delaware and Nashville, Tennessee where I earned an undergrad degree in business.
        
            I’m fairly new to coding and prior to the Columbia University Coding Bootcamp, 
            I was only self taught using websites and phone applications to learn how to code.
            
            While I’m sure I have a long way to go before I can consider myself efficient with coding, 
            I’m eager to learn and passionate about continuing to create and solve complex problems.
            </p>
        </div>

        </motion.div>
    )
}

export default AboutMe; 