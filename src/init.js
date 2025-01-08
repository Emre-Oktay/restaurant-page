import './styles.css';
import loadHome from './home';
import loadMenu from './menu';
import loadEvents from './events';
import loadContact from './contact';

function init() {
    const homeButton = document.getElementById('homeBtn');
    homeButton.addEventListener('click', () => {
        setActiveButton('homeBtn');
        loadHome();
    });
    const menuButton = document.getElementById('menuBtn');
    menuButton.addEventListener('click', () => {
        setActiveButton('menuBtn');
        loadMenu();
    });
    const eventButton = document.getElementById('eventsBtn');
    eventButton.addEventListener('click', () => {
        setActiveButton('eventsBtn');
        loadEvents();
    });
    const contactButton = document.getElementById('contactBtn');
    contactButton.addEventListener('click', () => {
        setActiveButton('contactBtn');
        loadContact();
    });
    setActiveButton('homeBtn');
    loadHome();
}

function setActiveButton(buttonId) {
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach((button) => {
        button.classList.remove('active');
    });

    const activeButton = document.getElementById(buttonId);
    activeButton.classList.add('active');
}

export default init;
