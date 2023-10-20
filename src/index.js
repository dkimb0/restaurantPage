import loadHome from "./loadHome.js";
import loadMenu from "./loadMenu.js";
import loadContact from "./loadContact.js";
import './style.css';



//initialize "tab" buttons and header
    let header = document.createElement('div');
    header.setAttribute('id', 'header');

    let btnHome = document.createElement('button');
    btnHome.textContent = 'Home';
    btnHome.classList.add('button');
    btnHome.addEventListener('click', () => {
        clearPage();
        loadHome();
        tabUpdate(btnHome);
    });
    
    let btnMenu = document.createElement('button');
    btnMenu.textContent = 'Menu';
    btnMenu.classList.add('button');
    btnMenu.addEventListener('click', () => {
        clearPage();
        loadMenu();
        tabUpdate(btnMenu);
    });
    
    let btnContact = document.createElement('button');
    btnContact.textContent = 'Contact';
    btnContact.classList.add('button');
    btnContact.addEventListener('click', () => {
        clearPage();
        loadContact();
        tabUpdate(btnContact);
    });






//initialize page with buttons and homepage
loadHeader();
loadHome();
tabUpdate(btnHome);


//function to clear page
function clearPage() {
     let page = document.getElementById('content');
     while (page.hasChildNodes()){
        page.removeChild(page.firstChild);
     }
     loadHeader();
}

function tabUpdate(button){
    btnContact.classList.remove('selected');
    btnHome.classList.remove('selected');
    btnMenu.classList.remove('selected');

    button.classList.add('selected');
}



//function to load buttons into header DIV which is also loaded into overall content div
function loadHeader(){
    document.getElementById('content').appendChild(header);
    
    document.getElementById('header').appendChild(btnHome);
    document.getElementById('header').appendChild(btnMenu);
    document.getElementById('header').appendChild(btnContact);

}