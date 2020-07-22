export const buyCake = (cakes) => {
	return {
		type: "BUY_CAKE",
		cakes,
	};
};

export const addCake = (cakes) => {
	return {
		type: "ADD_CAKE",
		cakes,
	};
};
