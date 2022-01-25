import './App.css';
import React, { useState } from 'react';
import Home from './Home';
import Map from './Map';

const App = () => {
  // determines if Home is shown (true) or if Map is shown after button pressed (false)
  const [home, setHome] = useState( true );

  const handleClick = () => {
    setHome( false );
  }

  return (
    <div className="App">

      {home ? ( <Home handleClick={handleClick} /> ) : ( <Map /> )}

    </div>
  );
}

export default App;
