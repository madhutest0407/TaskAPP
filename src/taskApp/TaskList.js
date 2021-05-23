import { Component } from "react";
import { fetchAllModel } from "./model";
import isEmpty from "lodash/isEmpty";
class List extends Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: []
    };
    this.collection = props.collection;
    this.getList = this.getList.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
  }
  getList() {
    const model = fetchAllModel(this.collection);
    return model.map((task) => {
      if (!!task.name) {
        return <List key={task?.name} name={task?.name} />;
      }
      return "";
    });
  }

  addNewTask() {
    this.setState({
      newTask: this.collection
    });
  }

  componentDidMount() {
    this.collection.on("add:task", this.addNewTask);
  }
  componentWillUnmount() {
    this.collection.off("add:task", this.addNewTask);
  }
  render() {
    return !isEmpty(this.state.newTask) && <div>{this.getList()}</div>;
  }
}

export { TaskList, List };
