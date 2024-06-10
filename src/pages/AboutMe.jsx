// Imports the AboutMe.css to grant access to additional classNames
import '../styles/AboutMe.css';
import { motion } from "framer-motion";

import monacoImage from "../assets/Monaco.png"; 
import weddingImage from "../assets/wedding.png";

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
            <h1>             <img src={monacoImage}  className="monacoImage"  alt="Me in Monaco" />About Me             <img src={weddingImage} className="weddingImage" alt="Wedding Image" /></h1>

            <div className='divider'></div>

            <p>Hey there! I'm Paul, a New Jersey native who has called Delaware home for most of my life.</p>
      <p>My educational journey took me to Newark, Delaware, and Nashville, Tennessee, where I earned a bachelor's degree in business. However, my passion for technology led me down a different path.</p>
      <p>In the past year, I embarked on a self-taught coding journey, delving into the intricacies of programming. This newfound interest inspired me to enroll in a full stack development course at Columbia University.</p>
      <p>While I acknowledge that there's always more to learn, I thrive on the challenge of tackling complex problems and honing my coding skills. I'm excited about the possibilities that lie ahead as I continue to grow in this dynamic field.</p>
      <p>When I'm not immersed in work or coding projects, you can find me staying active through workouts, exploring new destinations to experience the diverse cultures (and of course food), and soaking up sun outdoors.</p>
      <p>I also spend my time diving into captivating reads, looking for newly released music, and always searching for the best lasagna the East Coast has to offer.</p>
      <p>A few of my favorites books include the Game of Thrones series, The Poppy War series, and On Earth We’re Briefly Gorgeous.</p>
      <p>While there's much more to me than what's listed here, don't hesitate to reach out if you'd like to learn more.</p>
        </div>

        </motion.div>
    )
}

export default AboutMe; 