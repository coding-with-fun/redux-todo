import React from "react";
import { buyCake, addCake } from "../redux/cake/cakeActions";
import { connect } from "react-redux";

function CakeContainer(props) {
	return (
		<div>
			<h2>Number of cakes: {props.numOfCakes}</h2>
			<button onClick={props.buyCake}>Buy cake</button>
			<button onClick={props.addCake}>Add cake</button>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		numOfCakes: state.numOfCakes,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyCake: () => {
			dispatch(buyCake());
		},

		addCake: () => {
			dispatch(addCake());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
