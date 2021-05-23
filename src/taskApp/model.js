import { Model, Collection } from "backbone.model";
import find from "lodash/find";
let count = 1;
const TaskModel = Model.extend({
  defaults() {}
});
const TaskCollection = Collection.extend({
  model: TaskModel,
  addModel(model) {
    model.id = count;
    count++;
    this.add(model);
    window.console.log(this);
    this.trigger("add:task");
  }
});

const fetchAllModel = (collection) => collection.toJSON();

const fetchModel = (collection, id) =>
  find(collection, (task) => task.id === id);

export { TaskCollection, TaskModel, fetchAllModel, fetchModel };
