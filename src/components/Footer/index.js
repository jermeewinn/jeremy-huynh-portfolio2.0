import React from 'react';
import { BsGitHub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { ImLinkedin } from 'react-icons/im';

const Footer = () => {
    return(
        <footer className='w-100 mt-auto bg-secondary p-4'>
            <div className='container'>
                <h6>&copy;{new Date().getFullyear()} by Jeremy Huynh
                <span>
                    <a className='mx-1' href='https://github.com/jermeewinn'><BsGitHub /></a>
                    <a className='mx-1' href='mailto:jeahuynh18@gmail.com'><MdEmail /></a>
                    <a className='mx-1' href='https://www.linkedin.com/in/jeremy-huynh/'><ImLinkedin /></a> 
                </span></h6>
            </div>
        </footer>
    );
};

export default Footer;