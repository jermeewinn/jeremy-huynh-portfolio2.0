import React, { useState } from 'react';
import bootstrap from 'bootstrap';

import About from './components/About';
import Nav from './components/Nav';
import Contact from './components/Contact';



function App() {
  //categories for the top of the Nav bar
  const [categories] = useState([
    { 
      name: "Portfolio", 
      description: "Here are a number of projects I've worked on in my time learning Full-Stack Development!"
    },
    {
      name: "Contact",
      description: "Feel free to get in touch with me by submitting this form, or reaching out through social media channels!"
    },
    {
      name: "Resume",
      description: "Here is my resume as of January 31, 2022. Click the button to download a copy!"
    }  
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}>
      </Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
