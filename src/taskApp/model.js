import { Model, Collection } from "backbone.model";

const TaskModel = Model.extend({
  defaults() {}
});
const TaskCollection = Collection.extend({
  model: TaskModel,
  addModel(model) {
    this.add(model);
    window.console.log(this);
    this.trigger("add:task");
  }
});

const fetchAllModel = (collection) => {
  return collection.toJSON();
};

export { TaskCollection, TaskModel, fetchAllModel };
