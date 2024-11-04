window.addEventListener('load', () => {
  localStorage.clear(); // placeholder functionality due to no DB
});

function loadHome(previousSibling) {
  let loginButton = document.createElement("button"); // create the login button
  loginButton.id = "login-button"; // give it an id
  loginButton.textContent = "Log in"; // its text content
  loginButton.addEventListener('click', function() { // add on click event
    this.remove();  // remove itself
    loadLoginForm(previousSibling); // load the formulary
  });
  previousSibling.insertAdjacentElement('afterend', loginButton); // insert into the DOM
}