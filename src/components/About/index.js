import React from 'react';
import profilePic from '../../assets/images/other/Profile-Picture.jpg';

function About() {
    return (
        <section id='about'>
            <h1 id='about'>About Me</h1>
            <div id='sideByside'>
                <div id='me-image'>
                <img id="me" src={profilePic} className="my-2" alt="potrait of Jeremy"/>                </div>
            </div>
            <div id='left'>
                <p>
                    My name is Jeremy Huynh, and I am an alumni of UC Santa Cruz, class of 2018. 
                    The last few years, I've worked as a sales representative for a variety of startups around the Bay Area; 
                    ranging from alternative business financing, to database catalogs and IoT security solutions.  
                    The breadth of my experiences speak to my ability in working in teams and on my own. 
                    If you have any questions or inquiries about my experiences, please feel free to reach out to me via the Contact Section.
                </p>
            </div>
        </section>
    )
};

export default About;