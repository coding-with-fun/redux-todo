import React from "react";
import { connect } from "react-redux";
import StateCakeAlter from "./StateCakeAlter";
import CakeAlter from "./CakeAlter";

function CakeContainer(props) {
	return (
		<div>
			<StateCakeAlter />
			<CakeAlter />
			<h2>Number of cakes: {props.numOfCakes}</h2>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		numOfCakes: state.numOfCakes,
	};
};

export default connect(mapStateToProps)(CakeContainer);
