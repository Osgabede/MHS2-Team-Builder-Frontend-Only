window.addEventListener('load', () => {
  localStorage.clear();
});

function loadHome(previousSibling) {
  let loginButton = document.createElement("button"); // create the login button
  loginButton.id = "login-button"; // give it an id
  loginButton.textContent = "Log in";
  loginButton.addEventListener('click', function() {
    this.remove();
    loadLoginForm(previousSibling);
  });
  previousSibling.parentNode.appendChild(loginButton);
}

loadHome(document.querySelector('h1'));