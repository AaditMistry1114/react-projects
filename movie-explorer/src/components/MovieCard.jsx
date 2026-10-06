function MovieCard({
  title,
  rating,
  image,
  onFavorite,
  favoriteMovies,
}) {
  const isFavorite = favoriteMovies.some(
    (movie) => movie.title === title
  );

  return (
    <div>
      <h2>{title}</h2>

      <p>⭐ {rating}</p>

      <img src={image} alt={title} />

      <button
        onClick={() =>
          onFavorite({
            title: title,
            rating: rating,
            image: image,
          })
        }
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default MovieCard;