import React from 'react';
import bootstrap from 'bootstrap';

import About from './components/About';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav></Nav>         
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
