import { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <li>{this.props.name}</li>;
  }
}

class TaskList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.taskListVal
      ? this.props.taskListVal.map((list) => <List key={list} name={list} />)
      : "";
  }
}

export { TaskList, List };
