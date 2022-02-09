import React from 'react'
import beers from '../../data/beers';


const BeerCard = () => {

  



  return (
    <div>
      
      <img src={beers.image_url} alt=""/>
      <h2>{beers.name}</h2>
      <p>{beers.description}</p>
      
    </div>
  )
}

export default BeerCard