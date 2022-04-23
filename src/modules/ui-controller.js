import projectList from "./projectlist.js";
import projectName from "./projects.js";
import todoItem from './todos.js';
import storage from './storage.js';

const uiController = () => {
  let mainProjectList = new projectList;
  let appStorage = storage();

  const addDisplayProjectEvent = (project, element) => {
    element.addEventListener("click", function() {
      project.currentIndex = event.target.dataset.index;

      console.log(`event index: ${project.currentIndex}`);
      console.log(this);
      displayTodos(project.list[project.currentIndex]);
    })
  }

  const displayTodos = (projectTodos) => {
    const listContainer = document.querySelector('.todo-list-container');
    const todoList = document.createElement('ol');

    listContainer.innerHTML = "";

    todoList.className = "todo-list";
    console.log(`projectName: ${projectTodos.title}`);
    todoList.innerHTML = `<h1>${projectTodos.title}</h1>`;
    listContainer.appendChild(todoList);

    for (let i=0; i<projectTodos.todos.length; i++) {
      const todoItem = document.createElement('li');
      todoItem.className = "todo-item";
      todoItem.id = `todo-item-${i}`;
      todoItem.innerHTML = `
      <h2>${projectTodos.todos[i].title}</h2>
      <h4>Due Date: ${projectTodos.todos[i].dueDate}</h4>
      <h4>Priority: ${projectTodos.todos[i].priority}</h4>
      <h3>${projectTodos.todos[i].description}</h3>
      <h5>${projectTodos.todos[i].notes}</h5>

      `;
      if(i%2===0) {todoItem.style.backgroundColor = "rgb(236, 236, 236)"};
      todoList.appendChild(todoItem);
    }

    return;
  }

  const displayProjects = (project) => {
    const listContainer = document.querySelector('.list-container');

    listContainer.innerHTML = "";

    for (let i=0; i < project.list.length; i++) {
      const projectListItem = document.createElement('li');
      projectListItem.className = 'project-list-item';
      projectListItem.dataset.index = i;

      console.log(`projectList.todos[${i}]: ${project.list[i].title}`)
      projectListItem.innerHTML = project.list[i].title;
      projectListItem.className = "h2-title";
      listContainer.appendChild(projectListItem);
      //projectList.todos[i].title
      addDisplayProjectEvent(project, projectListItem);
    }


  }

  const initializeUI = (mainList) => {
    const addText = document.querySelector('.add-text-container');
    const textBox = document.querySelector('.add-text');
    const addExtendBtn = document.querySelector('#add-button');
    const addTodoBtn = document.querySelector('#add-todo-button');
    const moduleContainer = document.querySelector('.module-container');
    const todoTitle = document.querySelector('#add-text');
    const shortDescription = document.querySelector('#desc-text');
    const dueDate = document.querySelector('#due-text');
    const completeBool = document.querySelector('#complete-bool');
    const priorityLevel = document.querySelector('#priority-text');
    const notesText = document.querySelector('#notes-text');
    const addProjectBtn = document.querySelector('#side-add-button');
    const sideAddText = document.querySelector('#side-add-text');

    // if (appStorage.storageAvailable('localStorage') && localStorage.getItem('mainProjectList')) {
    //  mainProjectList = localStorage.getItem('mainProjectList');
    //  console.log(JSON.stringify(mainProjectList, null, 2));
    //  console.log(JSON.stringify(mainProjectList.list, null, 2));
    //} else {
      // Creating initial todos and adding them to the initial list 'newList' and that project to the project list 'projectList'

      const todo1 = new todoItem("Laundry", "Wash all the clothes", "04/26/2022", "3", "Separate the whites from the colors!", false);
      const todo2 = new todoItem("Dishes", "Put dishes through the dishwasher", "04/24/2022", "4", "", true);
      const todo3 = new todoItem("Trash", "Take out trash and recycling", "04/21/2022", "5", "Trash: grey can, Recycling: green can", false);
      const todo4 = new todoItem("Floors", "Sweep and mop", "04/30/2022", "1", "", false);

      const newList = new projectName("To Do", false, 0, [todo1, todo2, todo3, todo4]);
      
      mainProjectList.add(newList);
    //}

    addExtendBtn.addEventListener("click", function() {
      if (addText.classList.contains('add-text-container-extend')) {
        addText.classList.remove('add-text-container-extend');
        textBox.classList.remove('add-text-extend');
        moduleContainer.classList.remove('module-container-show');
        addExtendBtn.innerHTML = "ADD";
      } else {
        addText.classList.add('add-text-container-extend');
        textBox.classList.add('add-text-extend');
        moduleContainer.classList.add('module-container-show');
        addExtendBtn.innerHTML = "CANCEL";
      }
    })

    addProjectBtn.addEventListener("click", function() {
      if (sideAddText.value) {
        const newProject = new projectName(sideAddText.value, false, 0, []);

        mainProjectList.add(newProject);
        displayProjects(mainProjectList);
        sideAddText.value = "";
        const endIndex = mainProjectList.list.length - 1;

        displayTodos(mainProjectList.list[endIndex]);
      }
    })

    addTodoBtn.addEventListener("click", function() {
      if (todoTitle && shortDescription && dueDate && notesText) {
        const newTodo = new todoItem(todoTitle.value, shortDescription.value, dueDate.value, completeBool.value, priorityLevel.value, notesText.value);
        const cIndex = mainProjectList.list.length - 1;

        mainProjectList.list[cIndex].addTodo(newTodo); // - start here to begin adding new todos to the current list
        console.log("added");
        displayTodos(mainProjectList.list[cIndex]);
        if (appStorage.storageAvailable('localStorage')) {
          appStorage.populateStorage('mainProjectList', mainProjectList);
          console.log("storage successful");
        }
      }
    })

    displayProjects(mainProjectList);
    //if (appStorage.storageAvailable('localStorage')) {
    //  appStorage.populateStorage('mainProjectList', mainProjectList);

    //  console.log("storage successful");
    //}
    displayTodos(mainProjectList.list[0]);
  }

  return { displayTodos, displayProjects, initializeUI, mainProjectList };
}

export default uiController;