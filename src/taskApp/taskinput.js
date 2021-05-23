import React, { Component } from "react";
import $ from "jQuery";

export class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.inputRef = React.createRef();
  }
  addTask() {
    const inputVal = $(this.inputRef.current).val();
    if (!!inputVal) {
      alert("task added");
    } else {
      alert("text is empty");
    }
  }
  render() {
    return (
      <>
        Add your todo
        <input
          type="text"
          ref={this.inputRef}
          className="inputTask"
          placeholder="Add your task"
        />
        <button className="addTask" onClick={this.addTask}>
          Add todo
        </button>
      </>
    );
  }
}
