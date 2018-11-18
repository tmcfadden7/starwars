import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter} from 'react-router-dom';
import App from './components/App';
import About from './components/About';

class Root extends React.Component {

	render() {
		return (
			<BrowserRouter>
				<div>
					<div id="header">
						<Link to="/">Home</Link>
						<Link to="/about">About</Link>
					</div>
					<Route exact path="/" component={ App } />
					<Route path="/about" component={ About } />
				</div>
			</BrowserRouter>
		)
	}
	
}

ReactDOM.render(<Root />, document.getElementById('root'));