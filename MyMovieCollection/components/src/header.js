import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MoviePage from './movies';
import App from './index';
import { Link } from 'react-router-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';

<div id="root"></div>
class Header extends React.Component {
    render() {

      return (<div> <h1> <div class="title">My Movie Collection</div> {showMoviesButton} </h1> </div>);
    }
}

var showMoviesButton = ( 
	<Link to="/movies">
  <div class = "b">
  <button type="button" class="btn btn-outline-primary">
    <h1 class = "button-label" >Show Movies</h1>
	</button> 
  </div>
  </Link>
);

export default Header;