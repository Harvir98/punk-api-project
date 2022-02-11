import React from 'react'

const SearchBar = (props) => {

  const {handleInput, setSearchTerm} = props;

//   const handleInput = (event) => {
//     const cleanInput = event.target.value.toLowerCase();
//     setSearchTerm(cleanInput);
// }



  return (
    <>
    <input type="text" onInput={handleInput} />
    </>
  )
}

export default SearchBar