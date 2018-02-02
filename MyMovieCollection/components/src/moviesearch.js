import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FormGroup } from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

class MovieSearch extends React.Component {
	constructor() {
		super()
		this.state = {value: ''}
	}

	render() {
		var movies = Object.keys(localStorage);
		return ( <div>
		<Typeahead placeholder="search movie" onChange={(selected) => {
    		var movieDetails = localStorage.getItem(selected);
    		this.setState({value: movieDetails});
  		}}
  		options={movies}
		/> <h3>{this.state.value}</h3> </div>);
	}
}

export default MovieSearch;