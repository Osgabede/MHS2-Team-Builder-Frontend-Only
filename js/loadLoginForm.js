function loadLoginForm(previousSibling) {
  let formDiv = document.createElement("div"); // create a div for the form
  formDiv.id = "login-form-div"; // give it an id

  const form = document.createElement("form"); // create form
  form.id = "login-form"; // give it an id

  // create inputs (ChatGPT for speed)
  const usernameInput = document.createElement("input");
  usernameInput.type = "text";
  usernameInput.id = "username-input"; // changed the names myself
  usernameInput.name = "username";
  usernameInput.placeholder = "Username";
  usernameInput.required = true;

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.id = "password-input"; // changed the names myself
  passwordInput.name = "password";
  passwordInput.placeholder = "Password";
  passwordInput.required = true;

  const submitButton = document.createElement("button");
  submitButton.id = "submit-button"; // added this myself
  submitButton.textContent = "Login";

  // insert them as last child
  form.appendChild(usernameInput);
  form.appendChild(passwordInput);
  form.appendChild(submitButton);

  formDiv.prepend(form); // insert the form as first child of formDiv

  if (previousSibling.nextSibling) { // previousSibling has an element after it
    previousSibling.parentNode.insertBefore(formDiv, previousSibling.nextSibling); // insert before nextSibling
  } else { // previousSibling is the only element in its parent
    previousSibling.parentNode.appendChild(formDiv); // insert as last child
  }

  // Add event listener for form submission (ChatGPT for speed)
  submitButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    if (usernameInput.value !== "") {
      const formData = {
        username: usernameInput.value,
        password: passwordInput.value
      };

      // Store the data in localStorage
      localStorage.setItem("loginData", JSON.stringify(formData));
      document.querySelector('h1').style.marginBottom = '0';
    }
  });
  
}
