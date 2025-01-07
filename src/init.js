import './styles.css';
import loadHome from './home';
import loadMenu from './menu';

function init() {
    const homeButton = document.getElementById('homeBtn');
    homeButton.addEventListener('click', loadHome);
    const menuButton = document.getElementById('menuBtn');
    menuButton.addEventListener('click', loadMenu);
    loadHome();
}

export default init;
