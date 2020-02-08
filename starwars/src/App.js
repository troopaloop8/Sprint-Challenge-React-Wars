import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import AllCharacters from './components/allCharacters';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ char, setChar ] = useState();
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.co/api/people')
    .then((result) => {
      //console.log(result);
      setChar(result.data.results);     
    })
    .catch((error) => {console.log(error)})
  }, []);

  console.log(char)

  return (
    <div className="App">
      <h1 className="Header"><img src="https://fontmeme.com/permalink/200208/ef0ad267d64540a084e5c8b3c0ce356d.png" /></h1>
      <AllCharacters char={char} />
    </div>
  );
}

export default App;
