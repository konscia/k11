import { Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header/';

// Code-splitting is automated for routes
import Home from '../routes/Home';
import About from '../routes/About';

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} e		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} e.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<About path="/sobre" />
				</Router>
			</div>
		);
	}
}
