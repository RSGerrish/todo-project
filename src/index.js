import _ from 'lodash';
import './style.css';
import siteHeader from './modules/header.js';
import siteSidebar from './modules/sidebar.js';
import siteFooter from './modules/footer.js';
import siteTodoBody from './modules/body.js';

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