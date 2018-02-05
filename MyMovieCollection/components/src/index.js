import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import './index.css';
import MovieForm from './movieform';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';

//This class kicks off the app 

<div id="root"></div>
class App extends React.Component {
    render() {
        return ( 
        	<BrowserRouter>
        		<div class ="paths"> 
        			<Route path={"/"} component={Header}/>
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