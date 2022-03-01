import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';



function App() {
  //categories for the top of the Nav bar
  const [categories] = useState([
    {
      name: "About",
      description: "A bit about me..."
    },
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
      description: "Here is my resume. Click the button to download a copy!"
    }  
  ]);

  const renderPage = () => {
    if (currentCategory.name === "About") {
      return <About currentCategory={currentCategory} />
    }
    if (currentCategory.name === "Portfolio") {
      return <Portfolio currentCategory={currentCategory} />
    }
    if (currentCategory.name === "Contact") {
      return <Contact currentCategory={currentCategory} />
    }
    // if (currentCategory.name === "Resume") {
    //   return <Resume currentCategory={currentCategory} />
    // }
  };

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}>
      </Nav>
      <main>
        {renderPage}
      </main>
      <Footer />
    </div>
  );
}

export default App;
