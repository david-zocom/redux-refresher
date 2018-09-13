import React, { Component } from 'react';
import CourseList from './components/CourseList.js';

class App extends Component {
	render() {
		return (
			<div>
				Välkommen till vår skola! Anmäl dig gärna på en kurs!!
				<CourseList />
			</div>
		);
	}
}

export default App;
