import ACTIONS from './constants.js';

let selectCourse = newCourse => ({
	type: ACTIONS.NEWCOURSE,
	course: newCourse
})
const actions = {
	selectCourse: selectCourse
}
export default actions;
