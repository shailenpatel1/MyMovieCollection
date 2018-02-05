import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FormGroup } from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

var years = [];
var genres = [];
var actors = [];
var ratings = [1, 2, 3, 4, 5];
var auxArray = [];
var criteria = "title";

class MovieSearch extends React.Component {
	constructor() {
		super()
		this.state = {value: ''}
		this.state = {criteria: ''}
	}

	setCriteria(c) {
		criteria = c.target.value;
	}

	searchByGenre() {
		for(var i=0; i<localStorage.length; i++){
			var currMovie = JSON.parse(localStorage.getItem(localStorage.key(i)));
			if(!genres.includes(currMovie.genre))
				genres.push(currMovie.genre);
		}
	}

	searchByYear() {
		for(var i=0; i<localStorage.length; i++){
			var currMovie = JSON.parse(localStorage.getItem(localStorage.key(i)));
			if(!years.includes(currMovie.year))
				years.push(currMovie.year);
		}
	}

	listMovies(selected) {
		var resultSet = [];
		var c = criteria;
		for(var i=0; i<localStorage.length; i++) {
			var currMovie = localStorage.getItem(localStorage.key(i));		
			if(JSON.parse(currMovie).year == selected)
				resultSet.push(currMovie);
		}
		return resultSet;
	}

	render() {
		var movies = Object.keys(localStorage);
		return (
		<div>
		<div class="btn-group" type="button" role="group" aria-label="movie-genres">
  		<h3>Select a search filter:  </h3>
  		<button type="button" value="title" onClick={this.searchByYear} class="btn btn-secondary">Search by title</button>
  		<button type="button" value="year" onClick={this.searchByYear} class="btn btn-secondary">Search by year</button>
  		<button type="button" value="genre" onClick={this.searchByYear} class="btn btn-secondary">Search by genre</button>
  		<button type="button" value="actor" onClick={this.searchByYear} class="btn btn-secondary">Search by actor</button>
 		<button type="button" value="rating" onClick={this.searchByYear} class="btn btn-secondary">Search by rating</button>
  		</div>

  		<Typeahead id="search-bar" placeholder="search by movie year" onChange={(selected) => {
    			var movieDetails = this.listMovies(selected);
    			this.setState({value: movieDetails});
  			}}
  			options={years}
			/> <h3>{this.state.value}</h3>

  		</div>
		);
	}

}

export default MovieSearch;