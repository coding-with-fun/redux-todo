const initState = {
	todoList: [
		{
			id: 1,
			title: "delectus aut autem",
			completed: false,
		},
		{
			id: 2,
			title: "quis ut nam facilis et officia qui",
			completed: false,
		},
		{
			id: 3,
			title: "fugiat veniam minus",
			completed: false,
		},
	],
};

const rootReducer = (state = initState, action) => {
	if (action.type === "CREATE_TODO") {
		console.log(action);
		return {
			...state,
		};
	}

	if (action.type === "UPDATE_TODO") {
	}

	if (action.type === "DELETE_TODO") {
	}

	return state;
};

export default rootReducer;
