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

export default todobody;