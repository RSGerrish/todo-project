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
/*!*****************************!*\
  !*** ./src/modules/body.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const todobody = function() {
  const siteTodoBody = document.createElement('div');
  siteTodoBody.id = "todo-body";
  siteTodoBody.className = "todo-body";

  const addBtnContainer = document.createElement('div');
  addBtnContainer.id = "add-button-container";
    const addTextContainer = document.createElement('div');
    addTextContainer.className = "add-text-container";
      const addText = document.createElement('input');
      addText.type = "text";
      addText.name = "add-text";
      addText.className = "add-text";
      addText.id = "add-text";
      addText.placeholder = "Task Title";
      addTextContainer.appendChild(addText);
    const addBtn = document.createElement('button');
    addBtn.innerHTML = "ADD";
    addBtn.className = "button";
    addBtn.id = "add-button";
    addBtnContainer.append(addTextContainer, addBtn);
  const moduleContainer = document.createElement('div');
  moduleContainer.id = "module-container";
  moduleContainer.classList = "module-container";
    const descDiv = document.createElement('div');
    descDiv.className = "add-field-container";
      const descLabel = document.createElement('label');
      descLabel.innerHTML = "Short Description";
      descLabel.htmlFor = "desc-text";
      descLabel.className = "add-field-label";
      const descText = document.createElement('input');
      descText.type = "text";
      descText.id = "desc-text";
      descText.name = "desc-text";
      descText.className = "add-field-text";
      descDiv.append(descLabel, descText);

    const dueDateDiv = document.createElement('div');
    dueDateDiv.className = "add-field-container";
      const dueDateLabel = document.createElement('label');
      dueDateLabel.innerHTML = "Due Date";
      dueDateLabel.htmlFor = "due-text";
      dueDateLabel.className = "add-field-label";
      const dueDateText = document.createElement('input');
      dueDateText.type = "date";
      dueDateText.id = "due-text";
      dueDateText.name = "due-text";
      dueDateText.className = "add-field-text";
      dueDateDiv.append(dueDateLabel, dueDateText);

    const completeDiv = document.createElement('div');
    completeDiv.className = "add-field-container";
    completeDiv.id = "complete-div";
      const completeLabel = document.createElement('label');
      completeLabel.innerHTML = "Completed?";
      completeLabel.htmlFor = "complete-bool";
      completeLabel.className = "add-field-label";
      const completeBool = document.createElement('input');
      completeBool.type = "checkbox";
      completeBool.id = "complete-bool";
      completeBool.name = "complete-bool";
      completeBool.className = "add-field-text";
      completeDiv.append(completeLabel, completeBool);

    const priorityDiv = document.createElement('div');
    priorityDiv.className = "add-field-container";
      const priorityLabel = document.createElement('label');
      priorityLabel.innerHTML = "Priority";
      priorityLabel.htmlFor = "priority-text";
      priorityLabel.className = "add-field-label";
      const priorityText = document.createElement('input');
      priorityText.type = "range";
      priorityText.id = "priority-text";
      priorityText.name = "priority-text";
      priorityText.className = "add-field-text";
      priorityText.min = "0";
      priorityText.max = "5";
      priorityDiv.append(priorityLabel, priorityText);

    const notesDiv = document.createElement('div');
    notesDiv.className = "add-field-container";
      const notesLabel = document.createElement('label');
      notesLabel.innerHTML = "Notes (Optional)";
      notesLabel.htmlFor = "notes-text";
      notesLabel.className = "add-field-label";
      const notesText = document.createElement('input');
      notesText.type = "text";
      notesText.id = "notes-text";
      notesText.name = "notes-text";
      notesText.className = "add-field-text";
      notesDiv.append(notesLabel, notesText);

    const subBtn = document.createElement('button');
    subBtn.innerHTML = "ADD";
    subBtn.className = "button";
    subBtn.id = "add-todo-button";

    moduleContainer.append(descDiv, dueDateDiv, completeDiv, priorityDiv, notesDiv, subBtn);
  const listContainer = document.createElement('div');
  listContainer.className = "todo-list-container";

  siteTodoBody.append(addBtnContainer, moduleContainer, listContainer);

  return siteTodoBody;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todobody);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb2JvZHkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9tb2R1bGVzL2JvZHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCB0b2RvYm9keSA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBzaXRlVG9kb0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2l0ZVRvZG9Cb2R5LmlkID0gXCJ0b2RvLWJvZHlcIjtcbiAgc2l0ZVRvZG9Cb2R5LmNsYXNzTmFtZSA9IFwidG9kby1ib2R5XCI7XG5cbiAgY29uc3QgYWRkQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFkZEJ0bkNvbnRhaW5lci5pZCA9IFwiYWRkLWJ1dHRvbi1jb250YWluZXJcIjtcbiAgICBjb25zdCBhZGRUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkVGV4dENvbnRhaW5lci5jbGFzc05hbWUgPSBcImFkZC10ZXh0LWNvbnRhaW5lclwiO1xuICAgICAgY29uc3QgYWRkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBhZGRUZXh0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgIGFkZFRleHQubmFtZSA9IFwiYWRkLXRleHRcIjtcbiAgICAgIGFkZFRleHQuY2xhc3NOYW1lID0gXCJhZGQtdGV4dFwiO1xuICAgICAgYWRkVGV4dC5pZCA9IFwiYWRkLXRleHRcIjtcbiAgICAgIGFkZFRleHQucGxhY2Vob2xkZXIgPSBcIlRhc2sgVGl0bGVcIjtcbiAgICAgIGFkZFRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGV4dCk7XG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnRuLmlubmVySFRNTCA9IFwiQUREXCI7XG4gICAgYWRkQnRuLmNsYXNzTmFtZSA9IFwiYnV0dG9uXCI7XG4gICAgYWRkQnRuLmlkID0gXCJhZGQtYnV0dG9uXCI7XG4gICAgYWRkQnRuQ29udGFpbmVyLmFwcGVuZChhZGRUZXh0Q29udGFpbmVyLCBhZGRCdG4pO1xuICBjb25zdCBtb2R1bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kdWxlQ29udGFpbmVyLmlkID0gXCJtb2R1bGUtY29udGFpbmVyXCI7XG4gIG1vZHVsZUNvbnRhaW5lci5jbGFzc0xpc3QgPSBcIm1vZHVsZS1jb250YWluZXJcIjtcbiAgICBjb25zdCBkZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY0Rpdi5jbGFzc05hbWUgPSBcImFkZC1maWVsZC1jb250YWluZXJcIjtcbiAgICAgIGNvbnN0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICBkZXNjTGFiZWwuaW5uZXJIVE1MID0gXCJTaG9ydCBEZXNjcmlwdGlvblwiO1xuICAgICAgZGVzY0xhYmVsLmh0bWxGb3IgPSBcImRlc2MtdGV4dFwiO1xuICAgICAgZGVzY0xhYmVsLmNsYXNzTmFtZSA9IFwiYWRkLWZpZWxkLWxhYmVsXCI7XG4gICAgICBjb25zdCBkZXNjVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBkZXNjVGV4dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICBkZXNjVGV4dC5pZCA9IFwiZGVzYy10ZXh0XCI7XG4gICAgICBkZXNjVGV4dC5uYW1lID0gXCJkZXNjLXRleHRcIjtcbiAgICAgIGRlc2NUZXh0LmNsYXNzTmFtZSA9IFwiYWRkLWZpZWxkLXRleHRcIjtcbiAgICAgIGRlc2NEaXYuYXBwZW5kKGRlc2NMYWJlbCwgZGVzY1RleHQpO1xuXG4gICAgY29uc3QgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGVEaXYuY2xhc3NOYW1lID0gXCJhZGQtZmllbGQtY29udGFpbmVyXCI7XG4gICAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgZHVlRGF0ZUxhYmVsLmlubmVySFRNTCA9IFwiRHVlIERhdGVcIjtcbiAgICAgIGR1ZURhdGVMYWJlbC5odG1sRm9yID0gXCJkdWUtdGV4dFwiO1xuICAgICAgZHVlRGF0ZUxhYmVsLmNsYXNzTmFtZSA9IFwiYWRkLWZpZWxkLWxhYmVsXCI7XG4gICAgICBjb25zdCBkdWVEYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBkdWVEYXRlVGV4dC50eXBlID0gXCJkYXRlXCI7XG4gICAgICBkdWVEYXRlVGV4dC5pZCA9IFwiZHVlLXRleHRcIjtcbiAgICAgIGR1ZURhdGVUZXh0Lm5hbWUgPSBcImR1ZS10ZXh0XCI7XG4gICAgICBkdWVEYXRlVGV4dC5jbGFzc05hbWUgPSBcImFkZC1maWVsZC10ZXh0XCI7XG4gICAgICBkdWVEYXRlRGl2LmFwcGVuZChkdWVEYXRlTGFiZWwsIGR1ZURhdGVUZXh0KTtcblxuICAgIGNvbnN0IGNvbXBsZXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29tcGxldGVEaXYuY2xhc3NOYW1lID0gXCJhZGQtZmllbGQtY29udGFpbmVyXCI7XG4gICAgY29tcGxldGVEaXYuaWQgPSBcImNvbXBsZXRlLWRpdlwiO1xuICAgICAgY29uc3QgY29tcGxldGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICBjb21wbGV0ZUxhYmVsLmlubmVySFRNTCA9IFwiQ29tcGxldGVkP1wiO1xuICAgICAgY29tcGxldGVMYWJlbC5odG1sRm9yID0gXCJjb21wbGV0ZS1ib29sXCI7XG4gICAgICBjb21wbGV0ZUxhYmVsLmNsYXNzTmFtZSA9IFwiYWRkLWZpZWxkLWxhYmVsXCI7XG4gICAgICBjb25zdCBjb21wbGV0ZUJvb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgY29tcGxldGVCb29sLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICBjb21wbGV0ZUJvb2wuaWQgPSBcImNvbXBsZXRlLWJvb2xcIjtcbiAgICAgIGNvbXBsZXRlQm9vbC5uYW1lID0gXCJjb21wbGV0ZS1ib29sXCI7XG4gICAgICBjb21wbGV0ZUJvb2wuY2xhc3NOYW1lID0gXCJhZGQtZmllbGQtdGV4dFwiO1xuICAgICAgY29tcGxldGVEaXYuYXBwZW5kKGNvbXBsZXRlTGFiZWwsIGNvbXBsZXRlQm9vbCk7XG5cbiAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaW9yaXR5RGl2LmNsYXNzTmFtZSA9IFwiYWRkLWZpZWxkLWNvbnRhaW5lclwiO1xuICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICBwcmlvcml0eUxhYmVsLmlubmVySFRNTCA9IFwiUHJpb3JpdHlcIjtcbiAgICAgIHByaW9yaXR5TGFiZWwuaHRtbEZvciA9IFwicHJpb3JpdHktdGV4dFwiO1xuICAgICAgcHJpb3JpdHlMYWJlbC5jbGFzc05hbWUgPSBcImFkZC1maWVsZC1sYWJlbFwiO1xuICAgICAgY29uc3QgcHJpb3JpdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIHByaW9yaXR5VGV4dC50eXBlID0gXCJyYW5nZVwiO1xuICAgICAgcHJpb3JpdHlUZXh0LmlkID0gXCJwcmlvcml0eS10ZXh0XCI7XG4gICAgICBwcmlvcml0eVRleHQubmFtZSA9IFwicHJpb3JpdHktdGV4dFwiO1xuICAgICAgcHJpb3JpdHlUZXh0LmNsYXNzTmFtZSA9IFwiYWRkLWZpZWxkLXRleHRcIjtcbiAgICAgIHByaW9yaXR5VGV4dC5taW4gPSBcIjBcIjtcbiAgICAgIHByaW9yaXR5VGV4dC5tYXggPSBcIjVcIjtcbiAgICAgIHByaW9yaXR5RGl2LmFwcGVuZChwcmlvcml0eUxhYmVsLCBwcmlvcml0eVRleHQpO1xuXG4gICAgY29uc3Qgbm90ZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub3Rlc0Rpdi5jbGFzc05hbWUgPSBcImFkZC1maWVsZC1jb250YWluZXJcIjtcbiAgICAgIGNvbnN0IG5vdGVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgbm90ZXNMYWJlbC5pbm5lckhUTUwgPSBcIk5vdGVzIChPcHRpb25hbClcIjtcbiAgICAgIG5vdGVzTGFiZWwuaHRtbEZvciA9IFwibm90ZXMtdGV4dFwiO1xuICAgICAgbm90ZXNMYWJlbC5jbGFzc05hbWUgPSBcImFkZC1maWVsZC1sYWJlbFwiO1xuICAgICAgY29uc3Qgbm90ZXNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIG5vdGVzVGV4dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICBub3Rlc1RleHQuaWQgPSBcIm5vdGVzLXRleHRcIjtcbiAgICAgIG5vdGVzVGV4dC5uYW1lID0gXCJub3Rlcy10ZXh0XCI7XG4gICAgICBub3Rlc1RleHQuY2xhc3NOYW1lID0gXCJhZGQtZmllbGQtdGV4dFwiO1xuICAgICAgbm90ZXNEaXYuYXBwZW5kKG5vdGVzTGFiZWwsIG5vdGVzVGV4dCk7XG5cbiAgICBjb25zdCBzdWJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJCdG4uaW5uZXJIVE1MID0gXCJBRERcIjtcbiAgICBzdWJCdG4uY2xhc3NOYW1lID0gXCJidXR0b25cIjtcbiAgICBzdWJCdG4uaWQgPSBcImFkZC10b2RvLWJ1dHRvblwiO1xuXG4gICAgbW9kdWxlQ29udGFpbmVyLmFwcGVuZChkZXNjRGl2LCBkdWVEYXRlRGl2LCBjb21wbGV0ZURpdiwgcHJpb3JpdHlEaXYsIG5vdGVzRGl2LCBzdWJCdG4pO1xuICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpc3RDb250YWluZXIuY2xhc3NOYW1lID0gXCJ0b2RvLWxpc3QtY29udGFpbmVyXCI7XG5cbiAgc2l0ZVRvZG9Cb2R5LmFwcGVuZChhZGRCdG5Db250YWluZXIsIG1vZHVsZUNvbnRhaW5lciwgbGlzdENvbnRhaW5lcik7XG5cbiAgcmV0dXJuIHNpdGVUb2RvQm9keTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9kb2JvZHk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9