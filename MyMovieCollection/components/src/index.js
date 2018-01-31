import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import './index.css';
import MoviePage from './movies';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';

<div id="root"></div>
class App extends React.Component {
    render() {
        return ( 
        	<BrowserRouter>
        		<div class ="paths"> 
        			<Route path={"/"} component={Header}/>
        			<Route path={"/movies"} component={MoviePage}/>
        		</div>
        	</BrowserRouter>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

export default App;