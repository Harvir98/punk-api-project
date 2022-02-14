import { useState } from 'react';
import FilterItem from '../FilterItem/FilterItem';

const FilterList = (props) => {

  const {
    handleAbvClick,
    handlePhClick,
    handleRangeClick} = props;


  return (
    <>
    <h5>High ABV (>6.0%) <span><input type="checkbox" onChange={handleAbvClick} /></span></h5>
    <h5>Classic Range<span><input type="checkbox"  onChange={handleRangeClick} /></span></h5>
    <h5>Acidic ph (phfour)<span><input type="checkbox" onChange={handlePhClick}/></span></h5>
  
    </>
  )
}

export default FilterList