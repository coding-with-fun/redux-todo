import React, { Component } from "react";
import { connect } from "react-redux";
import { buyCake, addCake } from "../redux/cake/cakeActions";

class StateCakeAlter extends Component {
	state = {
		noOfCake: 0,
	};

	funBuyCake = () => {
		this.props.buyCakes(this.state.noOfCake);
	};

	funAddCake = () => {
		this.props.addCakes(this.state.noOfCake);
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
				<button onClick={this.funAddCake}>Add Cake</button>
				<button onClick={this.funBuyCake}>Buy Cake</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		buyCakes: (noOfCake) => {
			dispatch(buyCake(noOfCake));
		},

		addCakes: (noOfCake) => {
			dispatch(addCake(noOfCake));
		},
	};
};

export default connect(null, mapDispatchToProps)(StateCakeAlter);
