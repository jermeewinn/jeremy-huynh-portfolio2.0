import React from 'react';
import { BsGithub } from 'react-icons/bs';

const Project = ({ project }) => {
    console.log(project)
    return(
        <div className='mx-2 my-1'>
            <h4>{project.name}
            <span id='icon' className='mx-5'><a href={project.git}><BsGithub /> GitHub Link</a></span></h4>
            <a href={project.link}><img src={require(`../../assets/images/projects/${project.src}`)}
                alt={project.name}
                classname='img-thumbnail'
                key={project.name} /></a>
            <p>{project.description}</p>
        </div>
    );
};

export default Project;