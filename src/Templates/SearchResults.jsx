import MovieCard from "./Snippets/MovieCard";
import Container from "react-bootstrap/Container";

const SearchResults = ({ movies }) => {
  console.log(movies);
  return (
    <div className="bg-dark">
      <Container className="d-flex flex-wrap ">
        {movies.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </Container>
    </div>
  );
};

export default SearchResults;
