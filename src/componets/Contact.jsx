// Imports the Contact.css to grant access to additional classNames
import '../styles/Contact.css';
import { useState } from 'react';

function Contact() {

        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: ''
        });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save form data to localStorage
        localStorage.setItem('formData', JSON.stringify(formData))

        // Render the last submission to the page
        console.log(formData)
    }

    return (
        <div className="contact-container">
            <h1>Contact Me</h1>

            <p>Have a question or want to get in touch?  Feel free to reach out! Fill out the form below, 
                email me, or checkout one of the links below.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}> 
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" ></input>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" ></input>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" ></textarea>
                <button type="submit"> Send </button>

            </form>

            <ul> 📧 Email:  PaulRuszkay@gmail.com </ul>
            <ul><a href="https://github.com/PaulRusz"> 📁 GitHub: github.com/PaulRusz </a></ul>
            <ul><a href="https://www.linkedin.com/in/paul-ruszkay-a2ba075b/"> Linkedin - Paul Ruszkay </a></ul>

        </div>
    )
}


export default Contact;