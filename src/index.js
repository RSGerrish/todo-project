import _ from 'lodash';
import './style.css';
import siteHeader from './modules/header.js';
import siteSidebar from './modules/sidebar.js';
import siteFooter from './modules/footer.js';
import siteTodoBody from './modules/body.js';
import todoItem from './modules/todos.js';
import projectList from './modules/projects.js';

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

//Creating dumby lists and adding them to a project 'newList'
const todo1 = new todoItem("Title1", "Description", "Due Date", "Priority", "Notes", false);
const todo2 = new todoItem("Title2", "Description2", "Due Date2", "Priority2", "Notes2", true);
const todo3 = new todoItem("Title3", "Description3", "Due Date3", "Priority3", "Notes3", false);
const todo4 = new todoItem("Title4", "Description4", "Due Date 4", "Priority4", "Notes4", false);

const newList = new projectList("New List", false, [todo1, todo2, todo3]);

newList.addTodo(todo4);

//Add event listener to 'ADD' button
const addBtn = document.querySelector('#add-button');

addBtn.addEventListener("click", function() {
  newList.removeTodo(2);
})