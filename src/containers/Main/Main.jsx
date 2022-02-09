import React from 'react'
import BeerCard from '../../components/BeerCard/BeerCard'
// import BeerCardList from '../../components/BeerCardList/BeerCardList'
// import beers from '../../data/beers'
import './Main.scss';

const Main = (props) => {

  const { beersArr } = props;

  const beersJSX = beersArr.map(beer => <BeerCard name={beer.name} image={beer.image_url} description={beer.description}/>)
  
  return (
    <div className='beer-container'>
   {beersJSX}
    </div>
  )
}

export default Main