import React, { Component } from "react";
import $ from "jQuery";

export class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.collection = props.collection;
    this.addTask = this.addTask.bind(this);
    this.inputRef = React.createRef();
  }
  addTask() {
    const inputVal = $(this.inputRef.current).val();
    if (!!inputVal) {
      this.collection.addModel({
        name: inputVal
      });
    } else {
      alert("text is empty");
    }
  }
  render() {
    return (
      <>
        <span className="textSpan"> Add your todo </span>
        <input
          type="text"
          ref={this.inputRef}
          className="inputBox"
          placeholder="Add your task"
        />
        <button className="addTask" onClick={this.addTask}>
          Add todo
        </button>
      </>
    );
  }
}
