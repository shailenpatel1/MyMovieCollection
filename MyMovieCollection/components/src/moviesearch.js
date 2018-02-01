import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FormGroup } from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

class MovieSearch extends React.Component {
	render() {
		return (
		<Typeahead onChange={(selected) => {
    	// Handle selections...
  		}}
  		options={[ /* Array of objects or strings */ ]}
		/>);
	}
}

export default MovieSearch;