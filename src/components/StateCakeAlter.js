import React, { Component } from "react";
import { connect } from "react-redux";
import { buyCake, addCake } from "../redux/cake/cakeActions";

class StateCakeAlter extends Component {
	state = {
		noOfCake: 0,
	};

	buyCake = () => {
		this.props.buyCake(this.state.noOfCake);
	};

	addCake = () => {
		this.props.addCake(this.state.noOfCake);
	};

	render() {
		return (
			<div>
				<input
					type="text"
					onChange={(e) =>
						this.setState({
							noOfCake: e.target.value,
						})
					}
				/>
				<button onClick={this.addCake}>Add Cake</button>
				<button onClick={this.buyCake}>Buy Cake</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		buyCake: (noOfCake) => {
			dispatch(buyCake(noOfCake));
		},

		addCake: (noOfCake) => {
			dispatch(addCake(noOfCake));
		},
	};
};

export default connect(null, mapDispatchToProps)(StateCakeAlter);
