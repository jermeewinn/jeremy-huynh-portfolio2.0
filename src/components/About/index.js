import React from 'react';
import profilePic from '../../assets/images/other/Profile-Picture.jpg';

function About() {
    return (
        <section id='about'>
            <h1 id='about'>About Me</h1>
            <div id='aboutContainer'>
                <div id='sideByside'>
                    <div id='me-image'>
                        <img id="me" src={profilePic} className="my-2" alt="potrait of Jeremy"/>
                    </div>
                </div>
                <div id='left'>
                    <p>
                        My name is Jeremy Huynh, and I am an alumni of UC Santa Cruz, class of 2018, and the 2021-2022 Winter Cohort of the UC Berkeley Extension Full-Stack Development Coding Bootcamp.
                        As a bootcamp graduate, I've built a number of small applications to demonstrate my knowledge on concepts such as MySQL and MongoDB database administration, 3rd-party APIs, 
                        Node/Express.js, alternative front-end frameworks like React, and building apps using a MERN-stack (MongoDB back-end and React front-end). 
                        Feel free to navigate to my portfolio to see a small sample of some of the projects I've finished.                    
                    </p>
                </div>
                <div id='left'>
                    <p>
                        A little bit about myself, I am an aspiring software engineer with extensive experience in building relationships with my clients.
                        The last few years, I've worked as a sales representative for a variety of startups around the Bay Area; 
                        ranging from alternative business financing, to database catalogs and IoT security solutions.  
                        The breadth of my experiences speak to my ability in working in teams and on my own. 
                        If you have any questions or inquiries about my experiences, please feel free to reach out to me via the Contact Section.
                    </p>
                </div>
            </div>
            <div id='skillListContainer'>
                <div>
                    <h4>
                        <b id='skillListTitle'>Technical Skills:</b>
                    </h4>
                    <ul>
                        <li>
                            <b>Programming Languages:</b> HTML, CSS, JavaScript                            
                        </li>
                        <li>
                            <b>Database Management:</b> MySQL, Sequelize, MongoDB, Mongoose
                        </li>
                        <li>
                            <b>Libraries and Frameworks</b> jQuery, React.js, Express.js, Node.js, Bootstrap, Bulma
                        </li>
                        <li>
                            <b>Other Technologies:</b> Handlebars, Git, Heroku, JWT Auth, IndexedDB API, Google Maps API
                        </li>
                    </ul>
                </div>
            

            </div>
        </section>
    )
};

export default About;