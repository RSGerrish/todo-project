import _ from 'lodash';
import './style.css';
import siteHeader from './modules/header.js';
import siteSidebar from './modules/sidebar.js';
import siteFooter from './modules/footer.js';
import siteTodoBody from './modules/body.js';
import projectName from './modules/projects.js';
import uiController from './modules/ui-controller.js';

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

//Initialize UI which will add event listeners to appropriate buttones
const display = uiController();
display.initializeUI();

//Display project for initial project list 'mainProjectList.list'
//display.displayProjects(display.mainProjectList.list);

//Display todo list for initial project 'mainProjectList.list[0]'
//display.displayTodos(display.mainProjectList.list[0]);