import React, { Component } from "react";
import $ from "jQuery";
import { List, TaskList } from "./TaskList";
import ReactDOM from "react-dom";

const taskListVal = [];

export class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.inputRef = React.createRef();
    this.state = {
      listVal: taskListVal
    };
  }
  addTask() {
    const inputVal = $(this.inputRef.current).val();
    if (!!inputVal) {
      taskListVal.push(inputVal);
      this.setState({
        listVal: taskListVal
      });
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
        (this.state.listVal) &&
        <TaskList taskListVal={taskListVal} />
      </>
    );
  }
}
