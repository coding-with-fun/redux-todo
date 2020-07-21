import React, { Component } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

class ToDoBody extends Component {
	render() {
		return (
			<div>
				<h4>ToDo App</h4>

				<ToDoForm />
				<ToDoList />
			</div>
		);
	}
}

export default ToDoBody;
