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
                    <a href="https://github.com/PaulRusz/Personal-Note-Taker" target="_blank" rel=""> Personal Note App </a>
            </ul>
            <ul>
                    <a href="https://github.com/PaulRusz/Group-Project1" target="_blank" rel=""> Workout Tracker</a>
            </ul>
            <ul>
                    <a href="https://workout-tracker-3b0i.onrender.com/" target="_blank" rel=""> Workout Tracker 2.0</a>
            </ul>
            <ul>
                    <a href="https://github.com/PaulRusz/project2" target="_blank" rel=""> Project 4</a>
            </ul>
            <ul>
                    <a href="https://github.com/PaulRusz/project2" target="_blank" rel=""> Project 5</a>
            </ul>
            <ul>
                    <a href="https://github.com/PaulRusz/project2" target="_blank" rel=""> Project 6</a>
            </ul>
        </div>

</motion.div>
    )
}

export default Portfolio;