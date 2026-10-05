import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import MovieSection from "./components/MovieSection"

import movies from "./data/movies"


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MovieSection movies={movies}  />
    </>
  )
}

export default App