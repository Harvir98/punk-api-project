import React, {useEffect, useState} from 'react';
import './App.css';
import beers from './data/beers';
import Main from './containers/Main/Main';
import Navbar from './containers/Navbar/Navbar';

const App = () => {

  const beersArr = beers;
  
  const [abv, setAbv] = useState(false);
  const [range, setRange] = useState(false);
  const [ph, setPh] = useState(false);
  // const [beers, setBeers] = useState([]);
  


  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value;
    setSearchTerm(cleanInput);
  }
  

  const handleAbvClick = () => {
    setAbv(!abv);
  }

  const handlePhClick = () => {
    setPh(!ph)
  }

  const handleRangeClick = () => {
    setRange(!range)
  }

  const searchResults = beersArr.filter((beer) => {
    return beer.name.toLowerCase().includes(searchTerm)
  })

  const filteredBeers = searchResults.filter((beer) => {
    if (!abv && !ph && !range) {
      return true;
    } else if (abv) {
      return beer.abv > 6;
    } else if (ph) {
      return beer.ph > 4;
    } else if (range) {
      return beer.first_brewed.split("/")[1] < 2011;
    }
  });


  return (
    <div >
      <Navbar setSearchTerm={setSearchTerm} beersArr={beersArr} handleInput={handleInput} handleAbvClick={handleAbvClick} handlePhClick={handlePhClick} handleRangeClick={handleRangeClick} />
      <Main beersArr={filteredBeers} />
    </div>
  )
}


export default App;
