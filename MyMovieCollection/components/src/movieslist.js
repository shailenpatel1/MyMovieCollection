import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FormGroup } from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class MoviesList extends React.Component {

	render() {

		if(isStorageEmpty())
			return ( <h1 class="movie-list"> No movies to display </h1> );
		else { 
			
			for(var i = 0; i < localStorage.length; i++) {
				localStorage.getItem(localStorage.key(i));
			}
		}

	}

}

function isStorageEmpty() { 
	if(window.localStorage.length == 0)
		return true;
	return false;
}

function showMovies() {
  if(isStorageEmpty()) 
    return (<div>No movies to display</div>);
    else { 
      
      for(var i = 0; i < localStorage.length; i++) {
        localStorage.getItem(localStorage.key(i));
      }
    }
}

ReactDOM.render(
    <MoviesList />,
    document.getElementById('root')
);

export default MoviesList;




