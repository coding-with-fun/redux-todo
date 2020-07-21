import React, { Component } from "react";
import { connect } from "react-redux";

class ToDoList extends Component {
	render() {
		const { todos } = this.props;

		const todoList = todos.length ? (
			todos.map((todo) => {
				return <div key={todo.id}>{todo.title}</div>;
			})
		) : (
			<div>No data found</div>
		);
		return <div>{todoList}</div>;
	}
}

const fetchData = (state) => {
	return {
		todos: state.todoList,
	};
};

export default connect(fetchData)(ToDoList);
