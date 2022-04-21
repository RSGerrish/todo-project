const sidebar = function() {
  const sidebar = document.createElement('div');
  sidebar.id = "sidebar";
  sidebar.className = "body-height";
  
  const listTitle = document.createElement('div');
  listTitle.innerHTML = "Projects";
  listTitle.id = "list-title";
  const listContainer = document.createElement('ul');
  listContainer.className = "list-container";
  sidebar.append(listTitle, listContainer);

  return sidebar;
}

export default sidebar;