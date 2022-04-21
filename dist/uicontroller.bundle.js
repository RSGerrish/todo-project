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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uiController);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWljb250cm9sbGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsY0FBYztBQUM1QztBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQ0FBZ0MsY0FBYztBQUM5QyxnQ0FBZ0MsY0FBYztBQUM5Qzs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQSxpQ0FBaUMsRUFBRTtBQUNuQztBQUNBLFlBQVksdUJBQXVCO0FBQ25DLHNCQUFzQix5QkFBeUI7QUFDL0Msc0JBQXNCLDBCQUEwQjtBQUNoRCxZQUFZLDZCQUE2QjtBQUN6QyxZQUFZLHVCQUF1Qjs7QUFFbkM7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLEVBQUUsS0FBSyxpQkFBaUI7QUFDL0Q7QUFDQSxZQUFZLHVCQUF1QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUEsaUVBQWUsWUFBWSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvdWktY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IHVpQ29udHJvbGxlciA9ICgpID0+IHtcblxuICBjb25zdCBhZGREaXNwbGF5UHJvamVjdEV2ZW50ID0gKHByb2plY3QsIGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBwcm9qZWN0OiAke3Byb2plY3QudGl0bGV9YCk7XG4gICAgICBkaXNwbGF5VG9kb3MocHJvamVjdCk7XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGRpc3BsYXlUb2RvcyA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvbCcpO1xuXG4gICAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgdG9kb0xpc3QuY2xhc3NOYW1lID0gXCJ0b2RvLWxpc3RcIjtcbiAgICBjb25zb2xlLmxvZyhgcHJvamVjdE5hbWU6ICR7cHJvamVjdC50aXRsZX1gKTtcbiAgICB0b2RvTGlzdC5pbm5lckhUTUwgPSBgPGgxPiR7cHJvamVjdC50aXRsZX08L2gxPmA7XG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvTGlzdCk7XG5cbiAgICBmb3IgKGxldCBpPTA7IGk8cHJvamVjdC50b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgdG9kb0l0ZW0uY2xhc3NOYW1lID0gXCJ0b2RvLWl0ZW1cIjtcbiAgICAgIHRvZG9JdGVtLmlkID0gYHRvZG8taXRlbS0ke2l9YDtcbiAgICAgIHRvZG9JdGVtLmlubmVySFRNTCA9IGBcbiAgICAgIDxoMj4ke3Byb2plY3QudG9kb3NbaV0udGl0bGV9PC9oMj5cbiAgICAgIDxoND5EdWUgRGF0ZTogJHtwcm9qZWN0LnRvZG9zW2ldLmR1ZURhdGV9PC9oND5cbiAgICAgIDxoND5Qcmlvcml0eTogJHtwcm9qZWN0LnRvZG9zW2ldLnByaW9yaXR5fTwvaDQ+XG4gICAgICA8aDM+JHtwcm9qZWN0LnRvZG9zW2ldLmRlc2NyaXB0aW9ufTwvaDM+XG4gICAgICA8aDU+JHtwcm9qZWN0LnRvZG9zW2ldLm5vdGVzfTwvaDU+XG5cbiAgICAgIGA7XG4gICAgICBpZihpJTI9PT0wKSB7dG9kb0l0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjM2LCAyMzYsIDIzNilcIn07XG4gICAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvSXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZGlzcGxheVByb2plY3RzID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgcHJvamVjdExpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvbCcpO1xuICAgIHByb2plY3RMaXN0Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwicHJvamVjdC1saXN0XCI7XG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdENvbnRhaW5lcik7XG5cbiAgICBmb3IgKGxldCBpPTA7IGk8cHJvamVjdC50b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcHJvamVjdExpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIHByb2plY3RMaXN0SXRlbS5jbGFzc05hbWUgPSAncHJvamVjdC1saXN0LWl0ZW0nO1xuICAgICAgcHJvamVjdExpc3RJdGVtLmRhdGFzZXQuaW5kZXggPSBpO1xuXG4gICAgICBjb25zb2xlLmxvZyhgcHJvamVjdExpc3QudG9kb3NbJHtpfV06ICR7cHJvamVjdC50b2Rvc1tpXX1gKVxuICAgICAgcHJvamVjdExpc3RJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgIDxoMj4ke3Byb2plY3QudG9kb3NbaV0udGl0bGV9PC9oMj5cbiAgICAgIGA7XG4gICAgICBwcm9qZWN0TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdEl0ZW0pO1xuICAgICAgLy9wcm9qZWN0TGlzdC50b2Rvc1tpXS50aXRsZVxuICAgICAgYWRkRGlzcGxheVByb2plY3RFdmVudChwcm9qZWN0LCBwcm9qZWN0TGlzdEl0ZW0pO1xuICAgIH1cblxuXG4gIH1cblxuICByZXR1cm4geyBkaXNwbGF5VG9kb3MsIGRpc3BsYXlQcm9qZWN0c307XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVpQ29udHJvbGxlcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=