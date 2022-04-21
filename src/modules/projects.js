import { add, remove } from "lodash";

class project {
  constructor(title, checked, todos) {
    this.title = title;
    this.checked = checked;
    this.todos = todos; 
  }

  addTodo(newTodo) {
    this.todos.push(newTodo);
  }

  removeTodo(index) {
    this.todos.splice(index, 1);
  }

  getLength() {
    return this.prototype.length;
  }
}

export default project;