import React, { useEffect } from 'react';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory]);

    return (
        <header className='flex-row px-1'>
            <h1>
                <a href="/">
                    Jeremy Huynh
                </a>
            </h1>
            <nav>
                {/* Pull from Nav/index.js from photo-port */}
                <ul className='flex-row'>
                    {categories.map((category) => (
                        <li className={`mx-2 ${currentCategory === category.name && 'navActive'}`} key={category.name}>
                            <span onClick={() => { setCurrentCategory(category)}}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
};

export default Nav;