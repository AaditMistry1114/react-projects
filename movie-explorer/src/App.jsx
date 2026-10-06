import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import SearchBar from "./components/SearchBar"
import MovieSection from "./components/MovieSection"

import movies from "./data/movies"



function App() {

  const[searchItem,setSearchTerm] = useState("");

  const filteredMovies = movies.filter( elem => elem.title.toLowerCase().includes(searchItem.toLowerCase())  );

  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar  onSearch={setSearchTerm} />
      <MovieSection movies={filteredMovies}  />
    </>
  )
}

export default App