import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import MovieCard from "./MovieCard";

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/movies")
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          // This "Link" tag is used to wrap around each movie item. The 'to' is basically the href in a tag.
          //Used template literals to add in the id so that i has access all id in the list. Makes the id dynamic.
          <Link to={`/movies/${movie.id}`}>
            <MovieCard key={movie.id} movie={movie} />
          </Link>
        ))}
      </div>
    );
  }
}
