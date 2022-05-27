import React, { useState } from 'react';
import Resume from '../Resume';
import { validateEmail } from "../../utils/helpers";
import { BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { ImLinkedin } from 'react-icons/im';


function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    // This will handle information validation. If we were to console.log(handleChange), it would console.log every keystroke.
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`$${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    };

    // This will handle submission of information from the contact form
    function handleSubmit(e) {
        e.preventDefault();
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        };
    };

    return (
        <section id='contact'>
            <h1 className='my-5'>Contact Me
                {/* <a className="mx-2" href="https://github.com/jermeewinn"><BsGithub /></a>
                <a className="mx-2" href="mailto:jeahuynh18@gmail.com"><MdEmail /></a>
                <a className='mx-1' href='https://www.linkedin.com/in/jeremy-huynh/'><ImLinkedin /></a>  */}
            </h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className='my-2 flex-row'>
                    <label htmlFor="name">Name:</label>
                    <input type='text' defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div className='my-2 flex-row'>
                    <label htmlFor="email">Email address:</label>
                    <input type='email' defaultValue={email} onChange={handleChange} name="email" />
                </div>
                <div className='my-2 flex-row'>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>
                <button type='submit'>Submit</button>
            </form>
            <div id='resume'>
                <p>Click here to download a copy of my resume</p>
                <a href={require('../../assets/images/other/Jeremy_Huynh_Technical_Resume_02_25_2022.pdf')} download><button>Resume</button></a>
            </div>
        </section>
        
    )
};

export default Contact;