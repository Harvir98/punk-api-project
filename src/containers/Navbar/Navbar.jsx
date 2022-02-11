import React from 'react';
import './Navbar.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterList from '../../components/FilterList/FilterList';
// import beers from '../../data/beers';

const Navbar = (props) => {

  const {
    handleInput, 
    setSearchTerm,
    handleAbvClick,
    handlePhClick,
    handleRangeClick, 
    filteredBeers} = props;

  return (
    <>
    <p>hello</p>
    <SearchBar label="albums" setSearchTerm={setSearchTerm} handleInput={handleInput} />
    <FilterList handleAbvClick={handleAbvClick} handlePhClick={handlePhClick} handleRangeClick={handleRangeClick} filteredBeers={filteredBeers}/>
    </>
  )
}

export default Navbar