import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteToDo } from "../actions/todoActions";

class ToDoList extends Component {
	deleteEntry = (id) => {
		this.props.deleteEntry(id);
	};
	render() {
		const { todos } = this.props;

		const todoList = todos.length ? (
			todos.map((todo) => {
				return (
					<div key={todo.id} onClick={() => this.deleteEntry(todo.id)}>
						{todo.title}
					</div>
				);
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

const deleteData = (dispatch) => {
	return {
		deleteEntry: (id) => {
			dispatch(deleteToDo(id));
		},
	};
};

export default connect(fetchData, deleteData)(ToDoList);
