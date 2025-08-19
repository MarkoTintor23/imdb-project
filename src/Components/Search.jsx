import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import SearchResults from "../Templates/SearchResults";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  const searchMovie = () => {
    axios
      .get(
        process.env.REACT_APP_OMDBAPI_URL +
          "?s=" +
          searchTerm +
          "&apikey=" +
          process.env.REACT_APP_OMDBAPI_KEY +
          "&"
      )
      .then((response) => setMovies(response.data.Search))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Form className="bg-dark text-white">
        <Container className="p-5">
          <Form.Group className="mb-1" controlId="formBasicTerm">
            <Form.Label>Movie title</Form.Label>
            <Form.Control
              onInput={(e) => setSearchTerm(e.currentTarget.value)}
              type="text"
              placeholder="Enter movie title"
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={searchMovie}>
            Search
          </Button>
        </Container>
      </Form>
      <SearchResults movies={movies} />
    </>
  );
};

export default Search;
