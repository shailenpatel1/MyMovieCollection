import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FormGroup } from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Header from './header';
import Ratings from 'react-ratings';
import Movie from './movie';

var genreGlobal = "";
var ratingGlobal = "";

class MovieForm extends React.Component {

setGenre(g) {
  genreGlobal = g.target.value;
} 

setRating(r) {
  ratingGlobal = r.target.value;
}

addMovie() {
  if(document.getElementById("title") != null) {
    var title = document.getElementById("title").value.trim();
    var year = document.getElementById("year").value.trim();
    if(genreGlobal != null)
      var genre = genreGlobal;
    var actor = document.getElementById("actor").value.trim();
    if(ratingGlobal != null)
      var rating = ratingGlobal;
    var movieDetails = "year: " + year + "   genre: "  + genre +
                        "   actor: " + actor + "   rating: " + rating;
    var movie = {movieTitle: title, year: year, genre: genre, actor: actor, rating: rating};               

    if(title.length != 0)
      localStorage.setItem(title, JSON.stringify(movie)); 
    document.getElementById("add-movie-form").reset();
  }
}

	render() {

  	return (   
    <div>
    <form id="add-movie-form" onSubmit={this.addMovie}>
		  <div class="form-group">
		    <label>Movie Title</label>
    	  <input type="text" class="form-control" id="title" placeholder="enter title"/>
  		</div>
  		<div class="form-group">
    	 <label>Year</label>
    	 <input type="number" min="1860" max="2018" id="year" placeholder="enter year"/>
  		</div>

 <div class="btn-group" type="button" role="group" aria-label="movie-genres">
  <h3>Select a genre:  </h3>
  <button type="button" value="Action" onClick={this.setGenre.bind(this)} class="btn btn-secondary">Action</button>
  <button type="button" value="Adventure" onClick={this.setGenre.bind(this)} class="btn btn-secondary">Adventure</button>
  <button type="button" value="Drama" onClick={this.setGenre.bind(this)} class="btn btn-secondary">Drama</button>
  <button type="button" value="Horror" onClick={this.setGenre.bind(this)} class="btn btn-secondary">Horror</button>
  <button type="button" value="Sci-Fi" onClick={this.setGenre.bind(this)} class="btn btn-secondary">Sci-Fi</button>
  </div>

      <div class="form-group">
       <label>Actor</label>
       <input type="text" class="form-control" id="actor" placeholder="enter name of actor"/>
      </div>
      
  <div class="btn-group" type="button" role="group" aria-label="movie-ratings">
  <h3>Assign a rating to your movie:  </h3>
  <button type="button" value="1" onClick={this.setRating.bind(this)} class="btn btn-secondary">1</button>
  <button type="button" value="2" onClick={this.setRating.bind(this)} class="btn btn-secondary">2</button>
  <button type="button" value="3" onClick={this.setRating.bind(this)} class="btn btn-secondary">3</button>
  <button type="button" value="4" onClick={this.setRating.bind(this)} class="btn btn-secondary">4</button>
  <button type="button" value="5" onClick={this.setRating.bind(this)} class="btn btn-secondary">5</button>
  </div>

      <div>
      <Link to="/">
  		  <button type="submit" class="btn btn-secondary" onClick={this.addMovie}>Submit</button>   
      </Link>
      </div>

  	</form> 
    </div> ); 
	}

}

export default MovieForm;

