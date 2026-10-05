function MovieCard( { title, rating, image } ) {
    return (
        <div>
            <h2> {title} </h2>
            <p> {rating} </p>
            <img src={image} alt={title} />
        </div>
    )
    }

export default MovieCard
