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

export default sidebar;