class projectList {
  constructor() {
    this.list = [];
  }

  add(newProject) {
    this.list.push(newProject);
    console.log(this.list);
  }

  remove(index) {
    this.todos.splice(index, 1);
  }
}

export default projectList;