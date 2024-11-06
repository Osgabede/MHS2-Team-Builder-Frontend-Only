function loadTeam(loadedTeam) {
    window.appState.currentPage = 3;
    attachEventListeners();

    loadedTeam.removeEventListener('click', loadedTeam.handleTeamDivClick);

    // while to remove guideText
    while (loadedTeam.parentNode.previousElementSibling.tagName.toLowerCase() !== 'h2') { 
        loadedTeam.parentNode.previousElementSibling.remove();
    }

    // 2 whiles to remove every other team beisdes the selected (previous and next ones)
    while(loadedTeam.nextElementSibling) {
        loadedTeam.nextElementSibling.removeEventListener('click', loadedTeam.nextElementSibling.handleTeamDivClick);
        delete loadedTeam.nextElementSibling.handleTeamDivClick;
        loadedTeam.nextElementSibling.remove();
    }
    while(loadedTeam.previousElementSibling) {
        loadedTeam.previousElementSibling.removeEventListener('click', loadedTeam.previousElementSibling.handleTeamDivClick);
        delete loadedTeam.previousElementSibling.handleTeamDivClick;
        loadedTeam.previousElementSibling.remove();
    }

    // display edit button
    document.querySelector('.team-title > .display-none').classList.remove('display-none');
    // change of css to make the team occupy 100% of the parent and have a better layout
    loadedTeam.style.width = '100%';
    loadedTeam.classList.remove('blue-on-hover'); // remove hover property
    const monstieBoxes = loadedTeam.querySelectorAll('.monstie-box'); // catch every monstie-box to apply css to all of them
    for(let monstieBox of monstieBoxes) {
        monstieBox.classList.add('on-team-screen');
    }
}