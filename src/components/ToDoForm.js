import React, { Component } from "react";

class ToDoForm extends Component {
	render() {
		return (
			<div>
				<input type="text" name="todoEntry" placeholder="Your Task" />
                <button>Submit</button>
			</div>
		);
	}
}

export default ToDoForm;
