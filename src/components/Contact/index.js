import React, { useState } from 'react';
import { validateEmail } from "../../utils/helpers";

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
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type='text' defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type='email' defaultValue={email} onChange={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>
            </form>
        </section>
    )
};

export default Contact;