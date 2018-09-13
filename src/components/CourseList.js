import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../actions/selectedCourseActions.js';

class CourseList extends Component {
	render() {
		// [ {name,members} ]
		const lista = this.props.allCourses.map(
			course => (
				<li key={course.name}>
					{course.name}
					<button onClick={e => this.props.dispatch(Actions.selectCourse(course.name))}>Välj kurs</button>
				</li>
			)
		)
		return (
			<div>
			Du har valt kursen {this.props.selectedCourse}!
			<ul>
				{lista}
			</ul>
			</div>
		)
	}
}
//                    ({ selectedCourse, courses })
let mapStateToProps = (state) => ({
	selectedCourse: state.selectedCourse,
	allCourses: state.courses
})
export default connect(mapStateToProps)(CourseList);
