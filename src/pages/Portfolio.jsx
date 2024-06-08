// Imports the Portfolio.css to grant access to additional classNames
import '../styles/Portfolio.css';
import { motion } from "framer-motion";

function Portfolio() {

    return (

        // Code for 'fade in' transition
        <motion.div
        className="page1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
      >

        <div className="portfolio">
            <h1>Portfolio</h1>
            <p>Here are some of my projects:</p>
            <ul>
                    <a href="https://github.com/username/project1" target="_blank" rel=""> Project 1 </a>
            </ul>
            <ul>
                    <a href="https://github.com/username/project2" target="_blank" rel=""> Project 2</a>
            </ul>
        </div>

</motion.div>
    )
}

export default Portfolio;