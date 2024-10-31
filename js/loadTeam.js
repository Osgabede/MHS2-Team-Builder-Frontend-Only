function loadTeam(loadedTeam) {
    while(loadedTeam.nextElementSibling) {
        loadedTeam.nextElementSibling.remove();
    }
    while(loadedTeam.previousElementSibling) {
        loadedTeam.previousElementSibling.remove();
    }
    loadedTeam.style.width = '100%';
    loadedTeam.classList.remove('blue-on-hover');
    const monstieBoxes = loadedTeam.querySelectorAll('.monstie-box');
    for(let monstieBox of monstieBoxes) {
        monstieBox.style.width = '100%';
        monstieBox.style.display = 'flex';
        monstieBox.style.flexDirection = 'row';
        monstieBox.style.justifyContent = 'center';
        monstieBox.style.columnGap = '1em';

    }
}