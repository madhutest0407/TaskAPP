import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import { TaskInput } from "./taskApp/taskinput";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Header />
    <TaskInput />
  </StrictMode>,
  rootElement
);
