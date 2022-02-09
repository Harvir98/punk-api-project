import './App.css';
import beers from './data/beers';
import Main from './containers/Main/Main';
import Navbar from './containers/Navbar/Navbar';
// import Navbar from './containers/Navbar/Navbar';
// import BeerCard from './components/BeerCard/BeerCard';
// import BeerCardList from './components/BeerCardList/BeerCardList';


function App() {

  const highABV = beers.filter(beer => beer.abv > 6);
  console.log(highABV);

  const classicRange= beers.filter(beer => beer.abv >= 5 && beer.abv > 6);
  console.log(classicRange);

  const Acidic= beers.filter(beer => beer.abv >= 4 && beer.abv > 5);
  console.log(Acidic);




  return (
    <div className="App">
      {/* <img src={beers[0].image_url} alt="" /> */}
      <Navbar name={highABV}/>
      <Main beersArr={beers}/>
    </div>
  );
}

export default App;
