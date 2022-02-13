import React from 'react';
import bootstrap from 'bootstrap';

import About from './components/About';
import Nav from './components/Nav';

function App() {
  const [categories] = useState([
    {
      name: 'MonsterSafe',
      description: "Monstersafe is a COVID stat-tracker that allows users to access COVID information for states around the United States, using APIs from Google Maps and CovidActNow.org."
    },
    {
      name: 'Extenssion-Pass',
      description: "Extension-Pass is a comparative travel blog where users are able to share their experiences on places they've travelled in the past. Here, users are able to upvote, comment, and document the destinations they've been to."
    },
    {
      name: 'Budget-Tracker',
      description: "Budget-Tracker is a simple budget tracking app that ustilizes MongoDB to store data online, and IndexedDB offline. This is a mobile-first application, so you can use this application on any device from computers to mobile-phones with spotty connections."
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [constactSelected, setContactSelected] = useState(false);

  return (
    <div className="App">
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        setContactSelected={setContactSelected}></Nav>         
      <main>
        {/*if user didn't select Contact, then it will render About/Projects/etc.*/}
        {!constactSelected ? (
          <>
            <Projects currentCategory={currentCategory}></Projects>
            <About></About>
          </>
        ):(
          <ContactForm></ContactForm>
        )}        
      </main>
    </div>
  );
}

export default App;
