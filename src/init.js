import './styles.css';
import loadHome from './home';

function init() {
    const homeButton = document.getElementById('homeBtn');
    homeButton.addEventListener('click', loadHome);

    loadHome();
}

export default init;
