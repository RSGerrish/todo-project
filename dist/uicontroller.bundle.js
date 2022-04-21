/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/modules/ui-controller.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const uiController = () => {

  const addDisplayProjectEvent = (project, element) => {
    element.addEventListener("click", function() {
      console.log(`event index: ${event.target.dataset.index}`);
      displayTodos(project[event.target.dataset.index]);
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

    for (let i=0; i < project.length; i++) {
      const projectListItem = document.createElement('li');
      projectListItem.className = 'project-list-item';
      projectListItem.dataset.index = i;

      console.log(`projectList.todos[${i}]: ${project[i].title}`)
      projectListItem.innerHTML = project[i].title;
      projectListItem.className = "h2-title";
      projectListContainer.appendChild(projectListItem);
      //projectList.todos[i].title
      addDisplayProjectEvent(project, projectListItem);
    }


  }

  return { displayTodos, displayProjects };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uiController);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWljb250cm9sbGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsMkJBQTJCO0FBQzdEO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdDQUFnQyxjQUFjO0FBQzlDLGdDQUFnQyxjQUFjO0FBQzlDOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBLGlDQUFpQyxFQUFFO0FBQ25DO0FBQ0EsWUFBWSx1QkFBdUI7QUFDbkMsc0JBQXNCLHlCQUF5QjtBQUMvQyxzQkFBc0IsMEJBQTBCO0FBQ2hELFlBQVksNkJBQTZCO0FBQ3pDLFlBQVksdUJBQXVCOztBQUVuQztBQUNBLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsRUFBRSxLQUFLLGlCQUFpQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxZQUFZLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvbW9kdWxlcy91aS1jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgdWlDb250cm9sbGVyID0gKCkgPT4ge1xuXG4gIGNvbnN0IGFkZERpc3BsYXlQcm9qZWN0RXZlbnQgPSAocHJvamVjdCwgZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coYGV2ZW50IGluZGV4OiAke2V2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4fWApO1xuICAgICAgZGlzcGxheVRvZG9zKHByb2plY3RbZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXhdKTtcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgZGlzcGxheVRvZG9zID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdC1jb250YWluZXInKTtcbiAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJyk7XG5cbiAgICBsaXN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICB0b2RvTGlzdC5jbGFzc05hbWUgPSBcInRvZG8tbGlzdFwiO1xuICAgIGNvbnNvbGUubG9nKGBwcm9qZWN0TmFtZTogJHtwcm9qZWN0LnRpdGxlfWApO1xuICAgIHRvZG9MaXN0LmlubmVySFRNTCA9IGA8aDE+JHtwcm9qZWN0LnRpdGxlfTwvaDE+YDtcbiAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9MaXN0KTtcblxuICAgIGZvciAobGV0IGk9MDsgaTxwcm9qZWN0LnRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICB0b2RvSXRlbS5jbGFzc05hbWUgPSBcInRvZG8taXRlbVwiO1xuICAgICAgdG9kb0l0ZW0uaWQgPSBgdG9kby1pdGVtLSR7aX1gO1xuICAgICAgdG9kb0l0ZW0uaW5uZXJIVE1MID0gYFxuICAgICAgPGgyPiR7cHJvamVjdC50b2Rvc1tpXS50aXRsZX08L2gyPlxuICAgICAgPGg0PkR1ZSBEYXRlOiAke3Byb2plY3QudG9kb3NbaV0uZHVlRGF0ZX08L2g0PlxuICAgICAgPGg0PlByaW9yaXR5OiAke3Byb2plY3QudG9kb3NbaV0ucHJpb3JpdHl9PC9oND5cbiAgICAgIDxoMz4ke3Byb2plY3QudG9kb3NbaV0uZGVzY3JpcHRpb259PC9oMz5cbiAgICAgIDxoNT4ke3Byb2plY3QudG9kb3NbaV0ubm90ZXN9PC9oNT5cblxuICAgICAgYDtcbiAgICAgIGlmKGklMj09PTApIHt0b2RvSXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyMzYsIDIzNiwgMjM2KVwifTtcbiAgICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9JdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBkaXNwbGF5UHJvamVjdHMgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1jb250YWluZXInKTtcbiAgICBjb25zdCBwcm9qZWN0TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJyk7XG4gICAgcHJvamVjdExpc3RDb250YWluZXIuY2xhc3NOYW1lID0gXCJwcm9qZWN0LWxpc3RcIjtcbiAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0Q29udGFpbmVyKTtcblxuICAgIGZvciAobGV0IGk9MDsgaSA8IHByb2plY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHByb2plY3RMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBwcm9qZWN0TGlzdEl0ZW0uY2xhc3NOYW1lID0gJ3Byb2plY3QtbGlzdC1pdGVtJztcbiAgICAgIHByb2plY3RMaXN0SXRlbS5kYXRhc2V0LmluZGV4ID0gaTtcblxuICAgICAgY29uc29sZS5sb2coYHByb2plY3RMaXN0LnRvZG9zWyR7aX1dOiAke3Byb2plY3RbaV0udGl0bGV9YClcbiAgICAgIHByb2plY3RMaXN0SXRlbS5pbm5lckhUTUwgPSBwcm9qZWN0W2ldLnRpdGxlO1xuICAgICAgcHJvamVjdExpc3RJdGVtLmNsYXNzTmFtZSA9IFwiaDItdGl0bGVcIjtcbiAgICAgIHByb2plY3RMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0SXRlbSk7XG4gICAgICAvL3Byb2plY3RMaXN0LnRvZG9zW2ldLnRpdGxlXG4gICAgICBhZGREaXNwbGF5UHJvamVjdEV2ZW50KHByb2plY3QsIHByb2plY3RMaXN0SXRlbSk7XG4gICAgfVxuXG5cbiAgfVxuXG4gIHJldHVybiB7IGRpc3BsYXlUb2RvcywgZGlzcGxheVByb2plY3RzIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVpQ29udHJvbGxlcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=