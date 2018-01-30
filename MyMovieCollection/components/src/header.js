import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

<div id="root"></div>
class Header extends React.Component {
    render() {
        return (<h1> <div>My Movie Collection</div> {button} </h1>);
    }
}
var button = ( 
	<button class = "button" onclick="function()">
  	 	<h1 class = "button-label" >View Movies</h1>
	</button> 
); 

export default Header;
