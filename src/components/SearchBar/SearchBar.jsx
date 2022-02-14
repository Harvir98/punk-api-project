import React from 'react'

const SearchBar = (props) => {

  const {handleInput, setSearchTerm} = props;

//   const handleInput = (event) => {
//     const cleanInput = event.target.value.toLowerCase();
//     setSearchTerm(cleanInput);
// }



  return (
    <>
    <p> Search:
    <input type="text" onInput={handleInput} />
    </p>
    </>
  )
}

export default SearchBar