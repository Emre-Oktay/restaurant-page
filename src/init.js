import './styles.css';
import loadHome from './home';
import loadMenu from './menu';
import loadEvents from './events';
import loadContact from './contact';

function init() {
    const homeButton = document.getElementById('homeBtn');
    homeButton.addEventListener('click', loadHome);
    const menuButton = document.getElementById('menuBtn');
    menuButton.addEventListener('click', loadMenu);
    const eventButton = document.getElementById('eventsBtn');
    eventButton.addEventListener('click', loadEvents);
    const contactButton = document.getElementById('contactBtn');
    contactButton.addEventListener('click', loadContact);
    loadHome();
}

export default init;
