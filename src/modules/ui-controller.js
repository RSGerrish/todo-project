const uiController = () => {

  const addDisplayProjectEvent = (project, element) => {
    element.addEventListener("click", function() {
      console.log(`project: ${project.title}`);
      displayTodos(project);
    })
  }

  const displayTodos = (project) => {
    const listContainer = document.querySelector('.todo-list-container');
    const todoList = document.createElement('ol');

    listContainer.innerHTML = "";

    todoList.className = "todo-list";
    console.log(`projectName: ${project.title}`);
    todoList.innerHTML = `<h1>${project.title}</h1>`;
    listContainer.appendChild(todoList);

    for (let i=0; i<project.todos.length; i++) {
      const todoItem = document.createElement('li');
      todoItem.className = "todo-item";
      todoItem.id = `todo-item-${i}`;
      todoItem.innerHTML = `
      <h2>${project.todos[i].title}</h2>
      <h4>Due Date: ${project.todos[i].dueDate}</h4>
      <h4>Priority: ${project.todos[i].priority}</h4>
      <h3>${project.todos[i].description}</h3>
      <h5>${project.todos[i].notes}</h5>

      `;
      if(i%2===0) {todoItem.style.backgroundColor = "rgb(236, 236, 236)"};
      todoList.appendChild(todoItem);
    }

    return;
  }

  const displayProjects = (project) => {
    const listContainer = document.querySelector('.list-container');
    const projectListContainer = document.createElement('ol');
    projectListContainer.className = "project-list";
    listContainer.appendChild(projectListContainer);

    for (let i=0; i<project.todos.length; i++) {
      const projectListItem = document.createElement('li');
      projectListItem.className = 'project-list-item';
      projectListItem.dataset.index = i;

      console.log(`projectList.todos[${i}]: ${project.todos[i]}`)
      projectListItem.innerHTML = `
      <h2>${project.todos[i].title}</h2>
      `;
      projectListContainer.appendChild(projectListItem);
      //projectList.todos[i].title
      addDisplayProjectEvent(project, projectListItem);
    }


  }

  return { displayTodos, displayProjects};
}

export default uiController;