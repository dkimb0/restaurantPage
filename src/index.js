import loadHome from "./loadHome.js";
import loadMenu from "./loadMenu.js";
import loadContact from "./loadContact.js";

let btnHome = document.createElement('button');
btnHome.textContent = 'Home';
btnHome.addEventListener('click', () => {
    clearPage();
    loadHome();
})

let btnMenu = document.createElement('button');
btnMenu.textContent = 'Menu';
btnMenu.addEventListener('click', () => {
    clearPage();
    loadMenu();
})

let btnContact = document.createElement('button');
btnContact.textContent = 'Contact';
btnContact.addEventListener('click', () => {
    clearPage();
    loadContact();
})

loadButton();
loadHome();


function clearPage() {
     let page = document.getElementById('content');
     while (page.hasChildNodes()){
        page.removeChild(page.firstChild);
     }
     loadButton();
}

function loadButton() {
    document.getElementById('content').appendChild(btnHome);
    document.getElementById('content').appendChild(btnMenu);
    document.getElementById('content').appendChild(btnContact);
}