import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MoviesList from './movieslist';
import App from './index';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import MovieForm from './movieform';
import { Link } from 'react-router-dom';
import MovieSearch from './moviesearch';

//This model of the app renders the home page, button options (per specs) and 
//controls the display and hide functions for each of the buttons 

<div id="root"></div>
class Header extends React.Component {

  constructor() {
    super();
    this.state = {moviesHidden: true};
    this.state = {formHidden: true};
    this.state = {searchHidden: true};
    this.toggleMovies = this.toggleMovies.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleMovies() {
    this.setState({
      moviesHidden: !this.state.moviesHidden
    })
  }

  toggleForm() {
    this.setState({
      formHidden: !this.state.formHidden
    })
  }

  toggleSearch() {
    this.setState({
      searchHidden: !this.state.searchHidden
    })
  }

render() {
  return (
  <div> 

<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">My Movie Collection</h1>
    <p class="lead">Click below to view or add to the movie collection, or search to list titles by category.</p>
  </div>
</div>
    
    <div class="my-movies button">
      <button type="button" class="btn btn-outline-primary" 
        onClick={this.toggleMovies.bind(this)}>
      <h1 class="my-movies-button label"> My Movies </h1>
      </button> 
      {this.state.moviesHidden && <MoviesList/>} 
    </div>

    <div class="search-movies button">
      <button type="button" class="btn btn-outline-primary"
        onClick={this.toggleSearch.bind(this)}>
        <h1 class="search-movies-button label">Search Movies </h1>
      </button>
      {!this.state.searchHidden && <MovieSearch/>}
    </div>

    <div class="add-movies button">
      <button type="button" class="btn btn-outline-primary"
        onClick={this.toggleForm.bind(this)}>
        <h1 class="add-movies-button label">Add a Movie </h1>
      </button>
      {this.state.formHidden && <MovieForm/>}
    </div>

  </div>);
  }
}

export default Header;


