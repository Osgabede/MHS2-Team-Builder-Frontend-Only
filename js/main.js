window.appState = {
  currentPage: 0,
  previousSibling: null,
  loadedTeam: null
}
let returnedPages = 0;
loadHome(document.querySelector('h1'), window.appState.currentPage); // call the function to load the home page from loadHome.js

let backArrowButton = document.createElement('i');
backArrowButton.ariaLabel = "Forward";
backArrowButton.id = "back-arrow-button";
backArrowButton.classList.add('arrow-button', 'fas', 'fa-arrow-left');
document.querySelector('h1').prepend(backArrowButton);

let fwdArrowButton = document.createElement('i');
fwdArrowButton.ariaLabel = "Forward";
fwdArrowButton.id = "forward-arrow-button";
fwdArrowButton.classList.add('arrow-button', 'fas', 'fa-arrow-right');
fwdArrowButton.addEventListener('click', function () {
  
});
document.querySelector('h1').appendChild(fwdArrowButton);

// PENDIENTE INSERTARLOS EN EL DOM Y HACER TODO SU EVENT LISTENER ADEMÁS DEL CÓDIGO RESPONSIVO QUE CAMBIA EL COLOR Y ESTADO
function loadPageFunction(previousSibling, pageToLoadNumber) {
  const pages = {
    0 : loadHome,
    1 : loadLoginForm,
    2 : loadTeams,
    3 : loadTeam
  }

  const pageFunction = pages[pageToLoadNumber];
  if (pageToLoadNumber < 3) {
    pageFunction(previousSibling, pageToLoadNumber);
  } else {
    pageFunction(window.appState.loadedTeam, pageToLoadNumber)
  }

}

function attachEventListeners() {
  const backArrow = document.querySelector('#back-arrow-button');
  if (backArrow) {
    backArrow.removeEventListener('click', onBackArrowClick); // Remove any previous event listener
    backArrow.addEventListener('click', onBackArrowClick); // Attach the event listener
  }
  const fwdArrow = document.querySelector('#forward-arrow-button');
  if (fwdArrow) {
    fwdArrow.removeEventListener('click', onFwdArrowClick); // Remove any previous event listener
    fwdArrow.addEventListener('click', onFwdArrowClick); // Attach the event listener
  }
}

 // Define the click handler with the current page captured in the closure
function onBackArrowClick() {
  const { previousSibling, currentPage } = window.appState;
  if (window.appState.currentPage !== 0) {
    loadPageFunction(previousSibling, currentPage - 1);
    returnedPages++;
    if (window.appState.currentPage === 0) {
      backArrowButton.classList.remove('enabled');
      backArrowButton.classList.add('disabled');
    }
    fwdArrowButton.classList.add('enabled');
  }
}

function onFwdArrowClick() {
  const { previousSibling, currentPage } = window.appState;
  debugger;
  if (returnedPages > 0) {
    loadPageFunction(previousSibling, currentPage + 1);
    returnedPages--;
    backArrowButton.classList.add('enabled');
    if (returnedPages === 0) {
      fwdArrowButton.classList.remove('enabled');
      fwdArrowButton.classList.add('disabled');
    }
  } else {
    fwdArrowButton.classList.remove('enabled');
    fwdArrowButton.classList.add('disabled');
  }
}

// FIX(URGENT): quitar eventlistener de fwdArrow cuando cargas cualquier página manualmente
// FIX(URGENT): añadir el enabled a backArrow cuando cargas cualquier página manualmente