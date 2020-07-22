const initState = {
	numOfCakes: 10,
};

const cakeReducer = (state = initState, action) => {
	console.log(action);
	switch (action.type) {
		case "ADD_CAKE":
			console.log("Cake Added!");

			return {
				...state,
				numOfCakes: state.numOfCakes + 1,
			};
		case "BUY_CAKE":
			console.log("Cake Sold!");
			return {
				...state,
				numOfCakes: state.numOfCakes - 1,
			};
		default:
			return state;
	}
};

export default cakeReducer;
