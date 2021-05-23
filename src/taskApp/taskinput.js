import { Component } from "react";

export class TaskInput extends Component {
  render() {
    return (
      <>
        <text> Add your todo </text>
        <input type="text" className="inputTask" placeholder="Add your task" />
        <button className="addTask">Add todo </button>
      </>
    );
  }
}
