import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FormGroup } from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class MoviePage extends React.Component {

	render() {

  // var formInstance = 
  // <form>
  // <div class="form-group">
  //   <label for="exampleInputEmail1">Movie Title</label>
  //   <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter title"/>
  // </div>
  // <div class="form-group">
  //   <label for="exampleInputPassword1">Year</label>
  //   <input type="text" class="form-control" id="exampleInputPassword1" placeholder="enter year"/>
  // </div>
  // <button type="submit" class="btn btn-primary">Submit</button>
  // </form>; 

		if(isEmpty())
			return ( <h1 class="movie-list"> No movies to display </h1> );
		else { 
			
			for(var i = 0; i < localStorage.length; i++) {
				localStorage.getItem(localStorage.key(i));
			}
		}

	}

}

function isEmpty() { 
	if(window.localStorage.length == 0)
		return true;
	return false;
}

function addMovie() {

}

ReactDOM.render(
    <MoviePage />,
    document.getElementById('root')
);

export default MoviePage;