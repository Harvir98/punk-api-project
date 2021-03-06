import React from 'react'
// import beers from '../../data/beers';
import "./BeerCard.scss"



const BeerCard = (props) => {

  const { name, image, description } = props;



  return (
    <div className='beer'>
      <img className='beer__size' src={image} alt="" />
      <h2>{name}</h2>
      <p className="beer__description">{description}</p>
    </div>
  )
}

export default BeerCard