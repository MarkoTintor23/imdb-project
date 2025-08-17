const MovieCard = ({ movie }) => {
  return (
    <>
      <div>
        <img src={movie.Poster} alt="movie" />
        <h2>{movie.Title}</h2>
        <p>{movie.Plot}</p>
      </div>
    </>
  );
};

export default MovieCard;
