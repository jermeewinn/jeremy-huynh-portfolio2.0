import React, { useEffect } from 'react';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    // useEffect(() => {
    //     document.title = currentCategory.name;
    // }, [currentCategory]);

    return (
        <header className='flex-row px-1'>
            <h1>
                <a href="/">
                    Jeremy Huynh
                </a>
            </h1>
            <nav>
                <ul className='flex-row'>
                    {categories.map((category) => (
                        <li className={`mx-2 ${currentCategory === category.name && 'navActive'}`} key={category.name}></li>
                    ))}
                    {/*About Me Section*/}
                    <li className="flex-row"> 
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    {/* Portfolio */}
                    <li className="flex-row">
                        <a href="#portolio">
                            Portfolio
                        </a>
                    </li>
                    {/*Contact Section*/}
                    <li  className="flex-row">
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                    {/* Resume */}
                    <li className="flex-row">
                        <a href="#resume">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Nav;