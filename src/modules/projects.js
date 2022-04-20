class project {
  constructor(title, checked, todos) {
    this.title = title;
    this.checked = checked;
    this.todos = todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
    console.log(this);
  }

  removeTodo(index) {
    this.todos.splice(index, 1);
    console.log(this);
  }
}

export default project;