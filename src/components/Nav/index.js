import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <header>
            <h1>
                <a href="/">
                    Jeremy Huynh
                </a>
            </h1>
            <nav>
                <ul>
                    {/*About Me Section*/}
                    <li>
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    {/*Contact Section*/}
                    <li>
                        <span onClick={() => setContactSelected(true)}>Contact Me</span>
                    </li>
                    {/*Everything Else set in categories array*/}
                    {categories.map((category) => (
                        <li className={ `${currentCategory.name === category.name && !contactSelected && 'navActive'}`} key={category.name}>
                            <span onClick={() =>{
                                setCurrentCategory(category);
                                setContactSelected(false);
                            }}>
                                {capitalizeFirstLetter(category.name)}    
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
};

export default Nav;