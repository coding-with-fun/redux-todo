export const createToDo = () => {
	return {
		type: "CREATE_TODO",
		id: 3,
	};
};

export const updateToDo = (id) => {
	return {
		type: "UPDATE_TODO",
		id,
	};
};

export const deleteToDo = (id) => {
	return {
		type: "DELETE_TODO",
		id,
	};
};
