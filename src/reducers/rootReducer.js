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
		console.log(action);
		let newList = state.todoList.filter((post) => {
			return post.id !== action.id;
		});

		return {
			...state,
			todoList: newList,
		};
	}

	return state;
};

export default rootReducer;
