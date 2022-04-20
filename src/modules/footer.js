const footer = function() {
  const footer = document.createElement('footer');

  const credit = document.createElement('div');
  credit.innerHTML = "Site Design By Robin Gerrish 2022"
  footer.appendChild(credit);

  return footer;
}

export default footer;