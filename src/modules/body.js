const todobody = function() {
  const siteTodoBody = document.createElement('div');
  siteTodoBody.id = "todo-body";

  const addBtnContainer = document.createElement('div');
  addBtnContainer.id = "add-button-container";
    const addBtn = document.createElement('button');
    addBtn.innerHTML = "ADD";
    addBtn.className = "button";
    addBtn.id = "add-button";
    addBtnContainer.appendChild(addBtn);
  const moduleContainer = document.createElement('div');
  moduleContainer.id = "module-container";
  const listContainer = document.createElement('div');
  listContainer.id = "list-container";

  siteTodoBody.append(addBtnContainer, moduleContainer, listContainer);

  return siteTodoBody;
}

export default todobody;