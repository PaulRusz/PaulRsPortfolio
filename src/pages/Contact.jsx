// Imports the Contact.css to grant access to additional classNames
import '../styles/Contact.css';
import { useState } from 'react';
import { motion } from "framer-motion";

import linkedInImage from "../assets/contactMe/linkedin.png"



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

    const [ isFormSubmitted, setIsFormSubmitted ] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.name.trim() === '' || !formData.email.includes('@')) {
            // Handle form validation errors
            return;
        }

        // Form data is valid, proceed with submission
        localStorage.setItem('formData', JSON.stringify(formData))
        setIsFormSubmitted(true)

        // Reset form fields after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        })

        // Clear "Message sent!" text after a delay
        setTimeout(() => {
            setIsFormSubmitted(false)
        }, 3000)

        // Render the last submission to the page
        console.log(formData)
    }

    return (

        // Code for 'fade in' transition
        <motion.div
        className="page1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
      >

        <div className="contact-container">
            <h1>Contact Me</h1>

            <div className='divider'></div>

            <p> Have a question or want to get in touch? </p>  
            
            <p> Feel free to reach out! </p>
            <p>
                Fill out the form below, email me, or checkout one of the links below.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}> 
            {isFormSubmitted ? (
                    <motion.p 
                        className="messageSent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Message sent!
                    </motion.p>
                ) : null}
                <p> Send me a message </p>
                <input className="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" ></input>
                <input className="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" ></input>
                <textarea className="message" name="message" value={formData.message} onChange={handleChange} placeholder="Message..." ></textarea>
                <button className="button" type="submit"> Send </button>

            </form>

            <div className="contactInfo">
            <ul><a href="mailto:PaulRuszkay@gmail.com"> 📧 Email:  PaulRuszkay@gmail.com </a></ul>
            <ul><a href="https://github.com/PaulRusz"> 📁 GitHub: github.com/PaulRusz </a></ul>
            <ul><img src={linkedInImage} className="linkedIn" alt="LinkedIn"></img><a href="https://www.linkedin.com/in/paul-ruszkay-a2ba075b/"> Linkedin - Paul Ruszkay </a></ul>
            </div>

        </div>

        </motion.div>
    )
}


export default Contact;