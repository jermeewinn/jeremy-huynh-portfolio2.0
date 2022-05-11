import React from 'react';

function Resume({ currentCategory }) {
    const { name, description } = currentCategory;
    return(
        <div id='resume' className='flex-row'>
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                <a href={require('../../assets/images/other/Jeremy_Huynh_Technical_Resume_02_25_2022.pdf')} download><button>Resume</button></a>
            </div>
        </div>
    );
};

export default Resume;