function loadTeams(previousSibling) {
  while (previousSibling.nextElementSibling.tagName.toLowerCase() !== 'script') {
    previousSibling.nextElementSibling.remove();
  }
  window.appState.currentPage = 2;
  window.appState.previousSibling = previousSibling;
  attachEventListeners();

  let guideText = document.createElement('p'); // create the p
  guideText.textContent = "Click on any team to edit it"; // add its text

  const loginData = JSON.parse(localStorage.getItem('loginData'));
  if (loginData) {
    let username = loginData.username; // save username from localstorage
    let password = loginData.password; // save password from localstorage

    let teamsOfNameTitle = document.createElement('h2'); // create h2
    teamsOfNameTitle.textContent = username+"'s teams"; // add the username with the message
    teamsOfNameTitle.style.marginTop = '0';
    
    if (previousSibling.nextSibling) { // previousSibling has an element after it
      previousSibling.parentNode.insertBefore(teamsOfNameTitle, previousSibling.nextSibling); // insert before nextSibling
    } else { // previousSibling is the only element in its parent
      previousSibling.parentNode.appendChild(teamsOfNameTitle); // insert as last child
    }
    
    teamsOfNameTitle.insertAdjacentElement('afterend', guideText); // if username exists, insert guideText after it
  } else {
    previousSibling.insertAdjacentElement('afterend', guideText); // if username doesn't exist, insert guideText as last child 
  }

  let teamsDiv = document.createElement('div'); // div that englobes the teams
  teamsDiv.id = 'teams-box';
  teamsDiv.classList.add('on-teams-screen');
  
  let randNum = Math.floor(Math.random() * (6 - 1 + 1) + 1); // randNum between 1 and 6 (inclusive)
  for (let i = 0; i < randNum; i++) { // create as many divs as teams (random for now)
  
    let teamDiv = document.createElement('div'); // create the div
    teamDiv.className = 'team-box'; // add the class "teamBox" to it
    teamDiv.classList.add('blue-on-hover'); // add a class to apply hover

    // - chapuza temporal porque no se me ocurre nada mejor (es de chatgpt): -
    // crear propiedad personalizada para guardar la funcion
    teamDiv.handleTeamDivClick = () => {teamDivLoad(teamDiv)};

    // poder llamar a la función con su parámetro sin que se ejecute al instante
    teamDiv.addEventListener('click', teamDiv.handleTeamDivClick);
    // -----------------------------------------------------------------------

    let teamNameDiv = document.createElement('div'); // create a wrapper
    teamNameDiv.classList.add('team-title');

    let teamName = document.createElement('h2'); // create team name
    teamName.textContent = 'Team '+(i+1); // add content (placeholder)
    teamNameDiv.appendChild(teamName); // insert teamName as last child of the wrapper

    let teamNameEditButton = document.createElement('button'); // create button
    teamNameEditButton.ariaLabel = "EditTeamName"; // set accessibility label
    teamNameEditButton.classList.add('display-none'); // set the class to not display
    teamNameEditButton.addEventListener('click', function () {
      let inputTeamName = document.createElement('input'); // create the input
      inputTeamName.type = 'text';
      inputTeamName.value = teamName.textContent; // asign the h2 textContent to it
      teamName.replaceWith(inputTeamName); // replace h2 with input
      inputTeamName.focus();
      inputTeamName.select();
      
      // --- CHATGPT SOLUTIONS ON DA HOUSE ---
      
      if (document.querySelector('#measure')) {
        document.querySelector('#measure').remove();
      }
      let measureSpan = document.createElement('span');
      measureSpan.id = 'measure';
      inputTeamName.insertAdjacentElement('afterend', measureSpan);
      measureSpan.textContent = inputTeamName.value;
      inputTeamName.style.width = (measureSpan.offsetWidth + 3) + 'px';
      // -------------------------------------

      let yoLoBorro = false; // <- GOAT by Hugo Gil
      
      inputTeamName.addEventListener('blur', () => {
        teamName.textContent = inputTeamName.value;
        if(!yoLoBorro) {
          inputTeamName.replaceWith(teamName);
        }
      });
      inputTeamName.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          yoLoBorro = true;
          teamName.textContent = inputTeamName.value; // Update the h2 text
          inputTeamName.replaceWith(teamName); // Replace input with h2 again
        }
      });
      // --- CHATGPT SOLUTIONS ON DA HOUSE ---
      inputTeamName.addEventListener('input', () => {
        measureSpan.textContent = inputTeamName.value;
        inputTeamName.style.width = (measureSpan.offsetWidth + 20) + 'px';
      })
      // -------------------------------------
      
    });
    let editIcon = document.createElement('i'); // create icon
    editIcon.classList.add('fas', 'fa-pencil-alt'); // add font awesomes class
    teamNameEditButton.appendChild(editIcon); // insert icon inside button
    teamNameDiv.appendChild(teamNameEditButton); // insert button inside wrapper

    teamDiv.appendChild(teamNameDiv);

          
    let randNum2 = Math.floor(Math.random() * (6 - 2 + 1) + 2); // randNum between 2 and 6 (inclusive)
    for (let j = 0; j < randNum2; j++) { // create as many divs as monsties on each team
  
      let monstieDiv = document.createElement('div'); // create the div
      monstieDiv.classList.add('monstie-box'); // add the class "teamBox" to it
              
      let monstieImg = document.createElement('img'); // create its image
      monstieImg.src = './img/rathalos.jpg' // placeholder empty image
      monstieDiv.appendChild(monstieImg); // insert the image
  
      let monstieName = document.createElement('span'); // create its name
      monstieName.textContent = 'Monstie '+(j+1); // placeholder name
      monstieDiv.appendChild(monstieName); // insert the name
  
      teamDiv.appendChild(monstieDiv); // insert monstieDiv as last child of teamDiv
    }
    teamsDiv.appendChild(teamDiv); // insert teamDiv as last child of teamsDiv
  }

  let firstScript = previousSibling.nextSibling;
  while (firstScript.tagName.toLowerCase() !== "script") {
    firstScript = firstScript.nextElementSibling;
  }
  document.body.insertBefore(teamsDiv, firstScript);

  // leer linea 43
  function teamDivLoad(teamDiv) {
    teamsDiv.classList.remove('on-teams-screen');
    teamsDiv.classList.add('on-team-screen');

    // IMPORTANT FIX: catch the selected teamDiv here by its unique ID instead when the DB is implemented:
    window.appState.loadedTeam = teamDiv; 

    loadTeam(teamDiv); // call the load team function
  }
}


