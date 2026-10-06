import MovieCard from "./MovieCard";

function MovieSection({ movies, onFavorite, favoriteMovies }) {
  return (
    <section>
      <h2>Popular Movies</h2>

      {movies.map((movie) => (
        <MovieCard
          key={movie.title}
          {...movie}
          onFavorite={onFavorite}
          favoriteMovies={favoriteMovies}
        />
      ))}
    </section>
  );
}

export default MovieSection;