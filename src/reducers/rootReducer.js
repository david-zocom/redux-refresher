import { combineReducers } from 'redux';
import coursesReducer from './coursesReducer.js';
import selectedCourseReducer from './selectedCourseReducer.js';


const rootReducer = combineReducers({
	selectedCourse: selectedCourseReducer,
	courses: coursesReducer
})

export default rootReducer;
