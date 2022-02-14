import React from 'react';

//NOTE TO SELF: Gallery=Portfolio, Photolist=Project
function Portfolio(props) {
    const { currentCategory } = props;
    return (
        <section>
            <h1>{currentCategory.name}</h1>
            <p>{currentCategory.description}</p>
            <Project category={currentCategory.name} />
        </section>
    )
};

export default Portfolio