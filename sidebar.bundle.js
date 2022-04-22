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
/*!********************************!*\
  !*** ./src/modules/sidebar.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sidebar = function() {
  const sidebar = document.createElement('div');
  sidebar.id = "sidebar";
  sidebar.className = "body-height";
  
  const listTitle = document.createElement('div');
  listTitle.innerHTML = "Projects";
  listTitle.id = "list-title";

  const projectAddContainer = document.createElement('div')
  projectAddContainer.className = "side-add-container"
    const projectAddText = document.createElement('input');
    projectAddText.type = "text";
    projectAddText.name = "add-text";
    projectAddText.className = "side-add-text";
    projectAddText.id = "side-add-text";
    projectAddText.placeholder = "New Project";
    const projectAddBtn = document.createElement("button");
    projectAddBtn.innerHTML = "ADD";
    projectAddBtn.className = "button";
    projectAddBtn.id = "side-add-button";
    projectAddContainer.append(projectAddText, projectAddBtn);

  const listContainer = document.createElement('ol');
  listContainer.className = "list-container";
  sidebar.append(listTitle, projectAddContainer, listContainer);

  return sidebar;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebar);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9tb2R1bGVzL3NpZGViYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBzaWRlYmFyID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2lkZWJhci5pZCA9IFwic2lkZWJhclwiO1xuICBzaWRlYmFyLmNsYXNzTmFtZSA9IFwiYm9keS1oZWlnaHRcIjtcbiAgXG4gIGNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaXN0VGl0bGUuaW5uZXJIVE1MID0gXCJQcm9qZWN0c1wiO1xuICBsaXN0VGl0bGUuaWQgPSBcImxpc3QtdGl0bGVcIjtcblxuICBjb25zdCBwcm9qZWN0QWRkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgcHJvamVjdEFkZENvbnRhaW5lci5jbGFzc05hbWUgPSBcInNpZGUtYWRkLWNvbnRhaW5lclwiXG4gICAgY29uc3QgcHJvamVjdEFkZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3RBZGRUZXh0LnR5cGUgPSBcInRleHRcIjtcbiAgICBwcm9qZWN0QWRkVGV4dC5uYW1lID0gXCJhZGQtdGV4dFwiO1xuICAgIHByb2plY3RBZGRUZXh0LmNsYXNzTmFtZSA9IFwic2lkZS1hZGQtdGV4dFwiO1xuICAgIHByb2plY3RBZGRUZXh0LmlkID0gXCJzaWRlLWFkZC10ZXh0XCI7XG4gICAgcHJvamVjdEFkZFRleHQucGxhY2Vob2xkZXIgPSBcIk5ldyBQcm9qZWN0XCI7XG4gICAgY29uc3QgcHJvamVjdEFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcHJvamVjdEFkZEJ0bi5pbm5lckhUTUwgPSBcIkFERFwiO1xuICAgIHByb2plY3RBZGRCdG4uY2xhc3NOYW1lID0gXCJidXR0b25cIjtcbiAgICBwcm9qZWN0QWRkQnRuLmlkID0gXCJzaWRlLWFkZC1idXR0b25cIjtcbiAgICBwcm9qZWN0QWRkQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0QWRkVGV4dCwgcHJvamVjdEFkZEJ0bik7XG5cbiAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJyk7XG4gIGxpc3RDb250YWluZXIuY2xhc3NOYW1lID0gXCJsaXN0LWNvbnRhaW5lclwiO1xuICBzaWRlYmFyLmFwcGVuZChsaXN0VGl0bGUsIHByb2plY3RBZGRDb250YWluZXIsIGxpc3RDb250YWluZXIpO1xuXG4gIHJldHVybiBzaWRlYmFyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaWRlYmFyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==