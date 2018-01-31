import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FormGroup } from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

class MovieForm extends React.Component {
	render() {
  	return (
    <form>
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
  		  <button type="submit" class="btn btn-primary">Submit</button>
      </Link>
      </div>
  	</form> ); 
	}
}

 

// ReactDOM.render(
//     <MovieForm />,
//     document.getElementById('root')
// );

export default MovieForm;