function loadScript(src, callback) {
  const script = document.createElement('script'); // Create the script element
  script.src = src; // Set the source
  script.async = true; // Do async

  script.onload = () => { // after script has loaded
    if (callback) {
      callback(); // do callback if provided
    }
  };

  document.body.appendChild(script); //insert the script
}

document.querySelector('#login-button').addEventListener('click', function() { // add onclick to login-button
  this.remove();
  // load the loginForm
  loadScript('js/loadLoginForm.js', () => {
    loadLoginForm(document.querySelector('h1'));

    document.querySelector('#submit-button').addEventListener('click', function() { // add onclick to submit-button
      this.parentNode.remove();
      loadScript('js/loadTeams.js', () => {
        loadTeams(document.querySelector('h1'));

        const teamBoxes = document.querySelectorAll('.team-box'); // get every team-box
        for (let teamBox of teamBoxes) { // iterate on teamBoxes
          teamBox.addEventListener('click', function() { // add onclick to every team-box
            
          });
        }
      });
    });
  });
});

window.addEventListener('load', () => {
  localStorage.clear();
})