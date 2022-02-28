import React from 'react';
import ProjectList from '../ProjectList';

//NOTE TO SELF: Gallery=Portfolio, Photolist=Project
function Portfolio({ currentCategory }) {
    const { name, description } = currentCategory;
    return (
        <section>
            <h1>{name}</h1>
            <p>{description}</p>
            <ProjectList />
        </section>
    )
};

export default Portfolio