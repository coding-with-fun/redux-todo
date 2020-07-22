import React from "react";
import { buyCake, addCake } from "../redux/cake/cakeActions";

import { connect } from "react-redux";

let noOfCakes = 0;

function CakeAlter(props) {
	const changeCake = (e) => {
		noOfCakes = e.target.value;
	};
	return (
		<div>
			<input type="text" onChange={(e) => changeCake(e)} />
			<button onClick={props.buyCake}>Buy cake</button>
			<button onClick={props.addCake}>Add cake</button>
		</div>
	);
}

const mapStateToProps = (state) => {
	return state;
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyCake: () => {
			dispatch(buyCake(noOfCakes));
		},

		addCake: () => {
			dispatch(addCake(noOfCakes));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeAlter);
