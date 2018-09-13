import ACTIONS from '../actions/constants.js';
const initialState = 'Cykling';

const reducer = (state=initialState, action) => {
	switch( action.type ) {
		case ACTIONS.NEWCOURSE:
			return action.course;
		default:
			return state;
	}
}
export default reducer;
