import _ from 'lodash';
import './style.css';
import siteHeader from './modules/header.js';
import siteSidebar from './modules/sidebar.js';
import siteFooter from './modules/footer.js';
import siteTodoBody from './modules/body.js';
import todoItem from './modules/todos.js';
import projectName from './modules/projects.js';
import uiController from './modules/ui-controller.js';
import projectList from './modules/projectlist.js';

let mainProjectList = new projectList;

function drawSite() {
  const siteBody = document.body;
  const bodyContainer = document.createElement('div');
  bodyContainer.id = "body-container";

  siteBody.appendChild(siteHeader());
  siteBody.appendChild(bodyContainer);
    bodyContainer.appendChild(siteSidebar());
    bodyContainer.appendChild(siteTodoBody());
  siteBody.appendChild(siteFooter());
  return;
}

drawSite();

//Creating dumby lists and adding them to a project 'newList' and that project to the project list 'projectList'
const todo1 = new todoItem("Title1", "Description", "Due Date", "Priority", "Notes", false);
const todo2 = new todoItem("Title2", "Description2", "Due Date2", "Priority2", "Notes2", true);
const todo3 = new todoItem("Title3", "Description3", "Due Date3", "Priority3", "Notes3", false);
const todo4 = new todoItem("Title4", "Description4", "Due Date 4", "Priority4", "Notes4", false);

const newList = new projectName("New List", false, [todo1, todo2, todo3]);

newList.addTodo(todo4);

const todo21 = new todoItem("Titler 2-1", "Description deuce", "Due Deuce", "Priority", "Notes", false);
const todo22 = new todoItem("Titler 2-2", "Deuce Description 2", "Due Deuce 2", "Priority2", "Notes2", true);
const todo23 = new todoItem("Titler 2-3", "Taking a 3", "Due Due Deuce", "Priority3", "Notes3", false);
const todo24 = new todoItem("Titler 2-4", "Deucy Deuce 4", "Poop", "Priority4", "Notes4", false);

const newList2 = new projectName("New List2", false, [todo21, todo22, todo23, todo24]);

mainProjectList.add(newList);
mainProjectList.add(newList2);
console.log(`projectList: ${mainProjectList.list}`);

//Add event listener to 'ADD' button
const addBtn = document.querySelector('#add-button');

addBtn.addEventListener("click", function() {
  const addText = document.querySelector('.add-text-container');
  const textBox = document.querySelector('.add-text');
  const addBtn = document.querySelector('#add-button');
  const moduleContainer = document.querySelector('.module-container');

  if (addText.classList.contains('add-text-container-extend')) {
    addText.classList.remove('add-text-container-extend');
    textBox.classList.remove('add-text-extend');
    moduleContainer.classList.remove('module-container-show');
    addBtn.innerHTML = "ADD";
  } else {
    addText.classList.add('add-text-container-extend');
    textBox.classList.add('add-text-extend');
    moduleContainer.classList.add('module-container-show');
    addBtn.innerHTML = "CANCEL";
  }
});

//Playing with uiController

const display = uiController();
console.log(`projectList: ${JSON.stringify(mainProjectList.list)}`);
display.displayProjects(mainProjectList.list);