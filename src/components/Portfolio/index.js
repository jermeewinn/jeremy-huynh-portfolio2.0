import React from 'react';
import ProjectList from '../ProjectList';

//NOTE TO SELF: Gallery=Portfolio, Photolist=Project
function Portfolio(props) {
    const { currentCategory } = props;
    return (
        <section>
            <h1>{currentCategory.name}</h1>
            <p>{currentCategory.description}</p>
            <ProjectList category={currentCategory.name} />
        </section>
    )
};

export default Portfolio