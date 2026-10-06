import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import MovieSection from "./components/MovieSection";

import movies from "./data/movies";

function App() {
  const [searchItem, setSearchTerm] = useState("");
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const filteredMovies = movies.filter((elem) =>
    elem.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  function handleFavorite(movie) {
    const isFavorite = favoriteMovies.some(
      (elem) => elem.title === movie.title
    );

    if (isFavorite) {
      const updatedFavorites = favoriteMovies.filter(
        (elem) => elem.title !== movie.title
      );

      setFavoriteMovies(updatedFavorites);
    } else {
      setFavoriteMovies([...favoriteMovies, movie]);
    }
  }

  return (
    <>
      <Navbar />

      <Hero />

      <SearchBar onSearch={setSearchTerm} />

      <MovieSection
        movies={filteredMovies}
        onFavorite={handleFavorite}
        favoriteMovies={favoriteMovies}
      />
    </>
  );
}

export default App;