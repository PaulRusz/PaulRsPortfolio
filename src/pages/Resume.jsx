// Imports the Resume.css to grant access to additional classNames
import '../styles/Resume.css';
import { motion } from "framer-motion";

function Resume() {

    return (

        // Code for 'fade in' transition
        <motion.div
        className="page1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
      >

        <div className="resume-container">
            <h1>Resume</h1>
            <div className='divider'></div>
            <div className="resume-content">
                <h2>Download my resume</h2>
                <a href="https://drive.google.com/file/d/1B4pP-tSPWAWygiHZH3iD19f2UidwRtTx/view?usp=drive_link"
                 download="Resume.pdf">Click here to download my resume</a>
                <h2>Summary</h2>
                <p>
                    Background:
                    - what Ive done and what I am good at tech wise? Profeciencies
                </p>
        </div>

        <div className='divider2'></div>

        <div className='resume-container2'>
                <div className="resume-column">
                <h2>Technical Skills</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
                <h2>Frontend Tech</h2>
                <ul>
                    <li>React.js</li>
                    <li>Bootstrap</li>
                    <li>Responsive Web Design</li>
                </ul>
                <h2>BackEnd Tech</h2>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                </ul>
            </div>

            <div className="resume-column">
                <h2>Deployment & Hosting</h2>
                <ul>
                    <li>Heroku</li>
                    <li>Netlify</li>
                </ul>
                <h2>Databases</h2>
                <ul>
                    <li>SQL</li>
                    <li>NoSQL</li>
                </ul>
                <h2>Development Tools</h2>
                <ul>
                    <li>Visual Studio Code</li>
                </ul>
                <h2>Other Skills</h2>
                <ul>
                    <li>Problem-Solving</li>
                    <li>Collaboration</li>
                </ul>
            </div>
            </div>
        </div>

        </motion.div>
    )
}

export default Resume;