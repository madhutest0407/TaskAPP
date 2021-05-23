import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import { TaskInput } from "./taskApp/taskinput";
import { TaskList } from "./taskApp/TaskList";
import { TaskCollection } from "./taskApp/model";

const rootElement = document.getElementById("root");
const collection = new TaskCollection({ name: "" });
ReactDOM.render(
  <StrictMode>
    <Header />
    <TaskInput collection={collection} />
    <TaskList collection={collection} />
  </StrictMode>,
  rootElement
);
