const initState = {
	numOfCakes: 10,
};

const cakeReducer = (state = initState, action) => {
	if (!action.cakes) {
		action.cakes = 1;
	}
	switch (action.type) {
		case "ADD_CAKE":
			return {
				...state,
				numOfCakes: state.numOfCakes + parseInt(action.cakes),
			};
		case "BUY_CAKE":
			return {
				...state,
				numOfCakes: state.numOfCakes - parseInt(action.cakes),
			};
		default:
			return state;
	}
};

export default cakeReducer;
