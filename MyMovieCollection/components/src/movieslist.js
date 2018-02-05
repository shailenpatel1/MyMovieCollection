import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FormGroup } from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class MoviesList extends React.Component {
	render() {
	//localStorage.clear();
		return this.showMovies(); 
	}
	
    deleteMovie(movie) {
		localStorage.removeItem(movie); 
	}

	showMovies() { 
  	if(isStorageEmpty()) 
    return (<h1 class="no-movies-msg">No movies to display</h1>);
    else { 
      var buffer = [];
      for(var i = 0; i < localStorage.length; i++) {
        var movie = JSON.stringify(localStorage.key(i));
        buffer.push(<ul class="movies">{movie} 

		<button type="button" value="delete-movie" 
		onClick={this.deleteMovie.bind(this, localStorage.key(i))} class="btn btn-secondary">delete</button>

        </ul>); 
      }
      return buffer; 
    }
	}
}

function isStorageEmpty() { 
	if(window.localStorage.length == 0)
		return true;
	return false;
}

export default MoviesList;
