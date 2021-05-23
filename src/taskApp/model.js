// import { Model } from "backbone.model";

var taskModel = [];

const getModel = function (id) {
  return taskModel[id];
};

const setModel = function (id, name) {
  taskModel.push(id, name);
};

export { getModel, setModel };
