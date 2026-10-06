import { useState, useRef } from "react";

function SearchBar( { onSearch } ) {

    const[inputTerm,setInputTerm] = useState("");

    const timeRef = useRef(null);

    function handleChange(e){

        const value = e.target.value;

        setInputTerm(value);

        clearTimeout(timeRef.current);

        timeRef.current = setTimeout(() => {
            onSearch(value);
        }, 500);
    }


    return (
        <div>
            <label htmlFor="search-input">🔍Search movies </label>
            <input type="text" id="search-input" onChange={handleChange}  />
        </div>
    )
}

export default SearchBar
