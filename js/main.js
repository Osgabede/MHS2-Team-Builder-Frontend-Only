loadHome(document.querySelector('h1')); // call the function to load the home page from loadHome.js

let backArrowButton = document.createElement('button');
backArrowButton.ariaLabel = "Back";
backArrowButton.id = "back-arrow-button";
backArrowButton.classList.add("arrow-button");
let backArrowIcon = document.createElement('i');
backArrowIcon.classList.add('fas', 'fa-arrow-left');

let fwdArrowButton = document.createElement('button');
fwdArrowButton.ariaLabel = "Forward";
fwdArrowButton.id = "forward-arrow-button";
fwdArrowButton.classList.add("arrow-button");
let fwdArrowIcon = document.createElement('i');
fwdArrowIcon.classList.add('fas', 'fa-arrow-right');

// PENDIENTE INSERTARLOS EN EL DOM Y HACER TODO SU EVENT LISTENER ADEMÁS DEL CÓDIGO RESPONSIVO QUE CAMBIA EL COLOR Y ESTADO
