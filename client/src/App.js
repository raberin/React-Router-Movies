import React, { Component } from "react";
import { Route } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        {/* Make as an exact path or the MovieList will continously show no
        matter where you are in the website(List will continue to show and you cant isolate
        each movie.) */}
        <Route path="/" exact component={MovieList} />
        <Route path="/movies/:id" component={Movie} />
      </div>
    );
  }
}
