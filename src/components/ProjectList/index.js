import React, { useState } from 'react';
import Project from '../Project';

const ProjectList = ({tech}) => {
    const [projects] = useState([
        {
            name: 'MonsterSafe',
            src: '',
            tech: 'Frontend',
            description: 'MonsterSafe is a COVID stat-tracker for all 50 US states.',
            link: 'https://perkthong.github.io/monstersafe/',
            git: 'https://github.com/jermeewinn/monstersafe'
        },
        {
            name: 'Extension-Pass',
            src: '',
            tech: 'Full-Stack',
            description: 'Travel blog where users can post and share their previous travels.',
            link: 'https://whispering-plains-41505.herokuapp.com/',
            git: 'https://github.com/jermeewinn/extension-pass'
        },
        {
            name: 'Page-Turner',
            src:'',
            tech: 'MERN-stack',
            description: 'Migration of CRUD operations from REST to GraphQL for a Google Book Search API.',
            link: 'https://radiant-fjord-42843.herokuapp.com/',
            git: 'https://github.com/jermeewinn/page-turner'
        },
        {
            name: 'Budget-Tracker',
            src: '',
            tech: 'Backend',
            description: 'Budget tracking app that uses MongoDB and is able to save and function while offline.',
            link: 'https://peaceful-journey-89449.herokuapp.com/',
            git: 'https://github.com/jermeewinn/budget-tracker',
        },
        {
            name: 'Password-Generator',
            src: '',
            tech: 'Frontend',
            description: 'Password generator using basic Javascript.',
            link: 'https://jermeewinn.github.io/password-generator/',
            git: 'https://github.com/jermeewinn/password-generator'
        },
        {
            name: 'Pass-Ex',
            src: '',
            tech: 'MERN-Stack',
            description: 'Reiteration of Extension-Pass, but with a React front-end, MongoDB backend, and a few extra features useful for planning a trip.',
            link: '',
            git: 'https://github.com/jermeewinn/Pass-Ex',
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