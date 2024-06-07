// Imports the Resume.css to grant access to additional classNames
import '../styles/Resume.css';

function Resume() {

    return (
        <div className="resume-container">
            <h1>Resume</h1>
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
        </div>
    )
}

export default Resume;