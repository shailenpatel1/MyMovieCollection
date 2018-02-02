import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FormGroup } from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Header from './header';

class MovieForm extends React.Component {

addMovie() {
  if(document.getElementById("title") != null) {
    var title = document.getElementById("title").value.trim();
    //year genre actor rating 
    var year = document.getElementById("year").value.trim();
    var genre = document.getElementById("genre").value.trim();
    var actor = document.getElementById("actor").value.trim();
    var rating = document.getElementById("rating").value.trim();
    var movieDetails = "year: " + year + " genre: " + genre + 
                        " actor: " + actor + " rating: " + rating;

    if(title.length != 0)
      localStorage.setItem(title, movieDetails); // 2nd parameter needs to be genre etc.
    document.getElementById("add-movie-form").reset();
  }
}

	render() {
  	return (
    <form id="add-movie-form">
		  <div class="form-group">
		    <label>Movie Title</label>
    	  <input type="text" class="form-control" id="title" placeholder="enter title"/>
  		</div>
  		<div class="form-group">
    	 <label>Year</label>
    	 <input type="text" class="form-control" id="year" placeholder="enter year"/>
  		</div>
      <div class="form-group">
       <label>Genre</label>
       <input type="text" class="form-control" id="genre" placeholder="enter genre"/>
      </div>
      <div class="form-group">
       <label>Actor</label>
       <input type="text" class="form-control" id="actor" placeholder="enter name of actor"/>
      </div>
      <div class="form-group">
       <label>Rating</label>
       <input type="text" class="form-control" id="rating" placeholder="enter rating"/>
      </div>

      <div>
      <Link to="/">
  		  <button type="submit" class="btn btn-primary" onClick={this.addMovie()}>Submit</button>   
      </Link>
      </div>
  	</form> ); 
	}

}

export default MovieForm;

