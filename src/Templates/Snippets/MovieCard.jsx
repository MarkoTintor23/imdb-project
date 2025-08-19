const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="col-3 p-2 text-white">
        <img className="w-100" src={movie.Poster} alt="movie" />
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>
      </div>
    </>
  );
};

export default MovieCard;
