import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as FontAwesome from 'react-icons/lib/fa';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
<div id="root"></div>
class Header extends React.Component {
    render() {
        return (<h1> ToDo List <FontAwesome.FaBars/>? </h1>);
    }
}
ReactDOM.render(
    <Header />,
    document.getElementById('root')
);