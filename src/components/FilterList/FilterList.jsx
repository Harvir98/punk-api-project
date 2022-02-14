import { useState } from 'react';
import FilterItem from '../FilterItem/FilterItem';
import "./FilterList.scss"

const FilterList = (props) => {

  const {
    handleAbvClick,
    handlePhClick,
    handleRangeClick} = props;


  return (
    <div >
    <h5>High ABV (&gt; 6.0%) <span><input className="filter-list" type="checkbox" onChange={handleAbvClick} /></span></h5>
    <h5>Classic Range<span><input className="filter-list" type="checkbox"  onChange={handleRangeClick} /></span></h5>
    <h5>Acidic (ph &lt; 4) <span><input className="filter-list" type="checkbox" onChange={handlePhClick}/></span></h5>
    </div>
  )
}

export default FilterList