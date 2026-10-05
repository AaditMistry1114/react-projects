import MovieCard from "./MovieCard"

function MovieSection( { movies } ) {
    return (
        <section>
            <h2>Popular Movies</h2>

            {movies.map( movie => <MovieCard key={movie.title} {...movie} /> )}
            
        </section>
    )
}

export default MovieSection