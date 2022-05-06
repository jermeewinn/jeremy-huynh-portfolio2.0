import React, { useState } from 'react';
import Project from '../Project';

const ProjectList = ({ tech }) => {
    const [projects] = useState([
        {
            name: 'MonsterSafe',
            src: 'Monstersafe-SC.png',
            tech: 'Frontend',
            description: 'MonsterSafe is a COVID stat-tracker for all 50 US states.',
            link: 'https://perkthong.github.io/monstersafe/',
            git: 'https://github.com/jermeewinn/monstersafe',
            technologies: 'HTML, CSS, JavaScript, Google Maps API, COVIDActNow API'
        },
        {
            name: 'Extension-Pass',
            src: 'Extension-Pass.png',
            tech: 'Full-Stack',
            description: 'Travel blog where users can post and share their previous travels.',
            link: 'https://whispering-plains-41505.herokuapp.com/',
            git: 'https://github.com/jermeewinn/extension-pass',
            technologies: 'CSS Bulma, MySQL, Node.js, Sequelize, Express.js, JavaScript, Handlebars.js, TinyMCE WYSIWYG HTML Text Editor'
        },
        {
            name: 'Page-Turner',
            src: 'Page-Turner.png',
            tech: 'MERN-stack',
            description: 'Migration of CRUD operations from REST to GraphQL for a Google Book Search API.',
            link: 'https://radiant-fjord-42843.herokuapp.com/',
            git: 'https://github.com/jermeewinn/page-turner',
            technologies: 'Heroku, React.js, React DOM, Bootstrap React, Google Books API, MongoDB, Mongoose, Mongo Atlas, Express.js, Node.js, Concurrently, Apollo Server Express, GraphQL, JSON Webtoken'
        },
        {
            name: 'Budget-Tracker',
            src: 'Budget-Tracker.png',
            tech: 'Backend',
            description: 'Budget tracking app that uses MongoDB and is able to save and function while offline.',
            link: 'https://peaceful-journey-89449.herokuapp.com/',
            git: 'https://github.com/jermeewinn/budget-tracker',
            technologies: 'Heroku, HTML, CSS, CSS Bootstrap, JavaScript, Mongoose, MongoDB Atlas, MongoDB, Express.js'
        },
        {
            name: 'Password-Generator',
            src: 'PW-Generator.png',
            tech: 'Frontend',
            description: 'Password generator using basic Javascript.',
            link: 'https://jermeewinn.github.io/password-generator/',
            git: 'https://github.com/jermeewinn/password-generator',
            technologies: 'HTML, CSS, JavaScript'
        },
        {
            name: 'Passport-Extension',
            src: 'Passport-Extension.png',
            tech: 'MERN-Stack',
            description: 'Reiteration of Extension-Pass, but with a React front-end, MongoDB backend, and a few extra features useful for planning a trip.',
            link: 'https://tranquil-gorge-31416.herokuapp.com/',
            git: 'https://github.com/jermeewinn/Passport-Extension',
            technologies: 'React.js, MongoDB, Mongo Atlas, Mongoose, GraphQL, Expresss.js, Node.js, React CSS, Stripe API, JSON Web Tokens, Heroku, React Bulma, Concurrently'
        }
    ]);

    return(
        <div>
            <div className='flex-row'>
                {projects.map((project, i) => (
                    <Project project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectList;