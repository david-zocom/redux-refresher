const initialState = [
	{
		name: 'Serverside programmering',
		members: []
	},
	{
		name: 'Folkdans',
		members: []
	},
	{
		name: 'Cykling',
		members: []
	}
];
const reducer = (state=initialState, action) => {
	switch( action.type ) {
		default:
			return state;
	}
}
export default reducer;
