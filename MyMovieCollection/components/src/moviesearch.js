import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FormGroup } from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

var years = [];
var genres = [];
var titles = [];
var actors = [];
var ratings = [];

class MovieSearch extends React.Component {
	constructor() {
		super()
		this.state = {value: ''}
		this.state = {criteria: ''}
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

	searchByTitle() {
		for(var i=0; i<localStorage.length; i++){
			var currMovie = JSON.parse(localStorage.getItem(localStorage.key(i)));
			if(!titles.includes(localStorage.key(i)))
				titles.push(localStorage.key(i));
		}
	}

	searchByActor() {
		for(var i=0; i<localStorage.length; i++){
			var currMovie = JSON.parse(localStorage.getItem(localStorage.key(i)));
			if(!actors.includes(currMovie.actor))
				actors.push(currMovie.actor);
		}
	}

	searchByRatings() {
		for(var i=0; i<localStorage.length; i++){
			var currMovie = JSON.parse(localStorage.getItem(localStorage.key(i)));
			if(!ratings.includes(currMovie.rating))
				ratings.push(currMovie.rating);
		}
	}

	listMovieGenres(selected) {
		var resultSet = [];
		for(var i=0; i<localStorage.length; i++) {
			var currMovie = localStorage.getItem(localStorage.key(i));		
			if(JSON.parse(currMovie).genre == selected)
				resultSet.push(currMovie);
		}
		return resultSet;
	}

	listMovieYears(selected) {
		var resultSet = [];
		for(var i=0; i<localStorage.length; i++) {
			var currMovie = localStorage.getItem(localStorage.key(i));		
			if(JSON.parse(currMovie).year == selected)
				resultSet.push(currMovie);
		}
		return resultSet;
	}

	listMovieTitles(selected) {
		var resultSet = [];
		for(var i=0; i<localStorage.length; i++) {
			var currMovie = localStorage.getItem(localStorage.key(i));		
			if(localStorage.key(i) == selected)
				resultSet.push(currMovie);
		}
		return resultSet;
	}

	listMovieActors(selected) {
		var resultSet = [];
		for(var i=0; i<localStorage.length; i++) {
			var currMovie = localStorage.getItem(localStorage.key(i));		
			if(JSON.parse(currMovie).actor == selected)
				resultSet.push(currMovie);
		}
		return resultSet;
	}

	listMovieRatings(selected) {
		var resultSet = [];
		for(var i=0; i<localStorage.length; i++) {
			var currMovie = localStorage.getItem(localStorage.key(i));		
			if(JSON.parse(currMovie).rating == selected)
				resultSet.push(currMovie);
		}
		return resultSet;
	}

	render() {
		var movies = Object.keys(localStorage);
		this.searchByYear();
		this.searchByGenre();
		this.searchByTitle();
		this.searchByActor();
		this.searchByRatings();
		return (

  		<div>

  			<Typeahead id="search-bar" placeholder="search movies by year" onChange={(selected) => {
    			var movieDetails = this.listMovieYears(selected); 
    			this.setState({value: movieDetails});
  			}}
  			options={years}
			/> 

			<Typeahead id="search-bar" placeholder="search movies by genre" onChange={(selected) => {
    			var movieDetails = this.listMovieGenres(selected); 
    			this.setState({value: movieDetails});
  			}}
  			options={genres}
			/> 

			<Typeahead id="search-bar" placeholder="search movies by title" onChange={(selected) => {
    			var movieDetails = this.listMovieTitles(selected); 
    			this.setState({value: movieDetails});
  			}}
  			options={titles}
			/> 

			<Typeahead id="search-bar" placeholder="search movies by actor" onChange={(selected) => {
    			var movieDetails = this.listMovieActors(selected); 
    			this.setState({value: movieDetails});
  			}}
  			options={actors}
			/> 

			<Typeahead id="search-bar" placeholder="search movies by ratings" onChange={(selected) => {
    			var movieDetails = this.listMovieRatings(selected); 
    			this.setState({value: movieDetails});
  			}}
  			options={ratings}
			/> 

			<h3>{this.state.value}</h3>

  		</div>

		);
	}

}

export default MovieSearch;