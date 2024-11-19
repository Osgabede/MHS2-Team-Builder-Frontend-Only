// global variables
window.appState = {
  currentPage: 0,
  previousSibling: null,
  loadedTeam: null,
  onBackArrowClick: onBackArrowClick,
  onFwdArrowClick: onFwdArrowClick
}

let returnedPages = 0; // needed variable for arrows
loadHome(document.querySelector('h1'), window.appState.currentPage); // call the function to load the home page from loadHome.js

// create back arrow, set id, icon and classes and insert it
let backArrowButton = document.createElement('i');
backArrowButton.ariaLabel = "Forward";
backArrowButton.id = "back-arrow-button";
backArrowButton.classList.add('arrow-button', 'fas', 'fa-arrow-left');
document.querySelector('h1').prepend(backArrowButton);

// create forward arrow, set id, icon and classes and insert it
let fwdArrowButton = document.createElement('i');
fwdArrowButton.ariaLabel = "Forward";
fwdArrowButton.id = "forward-arrow-button";
fwdArrowButton.classList.add('arrow-button', 'fas', 'fa-arrow-right');
document.querySelector('h1').appendChild(fwdArrowButton);

// function to load the stated page
function loadPageFunction(previousSibling, pageToLoadNumber) {
  // assign the functions that load a page to numbers using an object
  const pages = {
    // these functions are from the other scripts
    0 : loadHome,
    1 : loadLoginForm,
    2 : loadTeams,
    3 : loadTeam
    // ------------------------------------------
  }

  // select the function corresponding to the specified number
  const pageFunction = pages[pageToLoadNumber];
  if (pageToLoadNumber < 3) {
    // normal call to the function using both parameters
    pageFunction(previousSibling, pageToLoadNumber);
  } else {
    // if page is loadTeam use the global variable to load the correct team
    pageFunction(window.appState.loadedTeam, pageToLoadNumber)
  }

}

// function to attach the event listeners to the arrows
function attachEventListeners() {
  // back arrow
  const backArrow = document.querySelector('#back-arrow-button');
  if (backArrow) {
    backArrow.removeEventListener('click', onBackArrowClick); // Remove any previous event listener
    backArrow.addEventListener('click', onBackArrowClick); // Attach the event listener
  }
  // forward arrow
  const fwdArrow = document.querySelector('#forward-arrow-button');
  if (fwdArrow) {
    fwdArrow.removeEventListener('click', onFwdArrowClick); // Remove any previous event listener
    fwdArrow.addEventListener('click', onFwdArrowClick); // Attach the event listener
  }
}

// function that will be attached to the back arrow
function onBackArrowClick() {
  if (window.appState.currentPage !== 0) {                        // we are not on the home page (function does nothing if we are)

    loadPageFunction(window.appState.previousSibling, window.appState.currentPage - 1);  // load the previous page (currentPage - 1)
    returnedPages++;  // increase the returnedPages counter

    if (window.appState.currentPage === 0) {  // after returning a page, we are now on the home page
      // disable the button
      backArrowButton.classList.remove('enabled'); 
      backArrowButton.classList.add('disabled');
    }
    // enable the forward arrow as we have now returned a page
    fwdArrowButton.classList.add('enabled');  
  }
}

function onFwdArrowClick() {
  // take the needed variables from appState
  const { previousSibling, currentPage } = window.appState;
  if (returnedPages > 0) {                      // we already returned at least 1 page

    loadPageFunction(previousSibling, currentPage + 1); // load the next page (currentPage + 1)
    returnedPages--;                                    // decrease returnedPages counter
    backArrowButton.classList.add('enabled');           // enable back arrow, as we have gone a page forward

    if (returnedPages === 0) {                          // after advancing a page, we came back to the first page before pressing the back button
      // disable the button
      fwdArrowButton.classList.remove('enabled');
      fwdArrowButton.classList.add('disabled');
    } else {  // in case we aren't at the first returned page yet but another function disables it on load
      // enable the button
      fwdArrowButton.classList.remove('disabled');
      fwdArrowButton.classList.add('enabled');
    }
  }
}