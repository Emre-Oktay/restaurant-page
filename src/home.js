import restaurantImage from './images/louisa-wilhelm-swamp-tavern.jpg';
import loadMenu from './menu';
import loadEvents from './events';

function createHome() {
    const home = document.createElement('div');

    const heroSection = document.createElement('section');
    heroSection.classList.add('hero');

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to The Mossy Rest';
    heroSection.appendChild(heading);

    heroSection.appendChild(createParagraph('A Hidden Haven of Flavor and Forest Magic'));

    home.appendChild(heroSection);

    const aboutSection = document.createElement('section');
    aboutSection.classList.add('about');

    const restaurantImg = document.createElement('img');
    restaurantImg.src = restaurantImage;
    restaurantImg.alt = 'Image of Whispering Woods';
    aboutSection.appendChild(restaurantImg);

    const aboutHeading = document.createElement('h2');
    aboutHeading.textContent = 'A Forest Retreat Like No Other';
    aboutSection.appendChild(aboutHeading);

    aboutSection.appendChild(
        createParagraph(
            "Nestled in the heart of the Whispering Woods, The Mossy Rest is a sanctuary for adventurers, travellers, and food lovers alike. Our tavern is surrounded by nature's serenity and serves up meals inspired by the forest itself. Whether you seek a hearty feast or a quiet drink by the pond, you'll find your haven here."
        )
    );

    home.appendChild(aboutSection);

    const menuSection = document.createElement('section');
    menuSection.classList.add('menu');

    const menuHeading = document.createElement('h2');
    menuHeading.textContent = 'Taste the Magic of the Forest';
    menuSection.appendChild(menuHeading);

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-items');

    menuDiv.appendChild(createMenuItem('Lily Pad Crisps', 'Thin, fried kale chips with a pond herb dip.'));
    menuDiv.appendChild(createMenuItem('Tadpole Stew', 'A hearty vegetable and fish stew inspired by forest flavors.'));
    menuDiv.appendChild(createMenuItem('Moonlit Mousse', 'A silken chocolate mousse with a hint of lavender.'));
    menuDiv.appendChild(createMenuItem('Frog Prince Ale', 'A frothy, golden beer brewed locally.'));

    menuSection.appendChild(menuDiv);

    const menuButtonDiv = document.createElement('div');
    menuButtonDiv.classList.add('button-div');
    const menuButton = document.createElement('button');
    menuButton.addEventListener('click', loadMenu);
    menuButton.textContent = 'View Full Menu';
    menuButtonDiv.appendChild(menuButton);
    menuSection.appendChild(menuButtonDiv);

    home.appendChild(menuSection);

    const eventSection = document.createElement('section');

    const eventHeading = document.createElement('h2');
    eventHeading.textContent = 'Gather by the Fire for Tales and Tunes';
    eventSection.appendChild(eventHeading);

    eventSection.appendChild(
        createParagraph(
            'Every week, The Mossy Rest hosts lively events to bring our community together. Join us for enchanting bard performances, storytelling nights, and seasonal feasts!'
        )
    );

    const eventButtonDiv = document.createElement('div');
    eventButtonDiv.classList.add('button-div');
    const eventButton = document.createElement('button');
    eventButton.addEventListener('click', loadEvents);
    eventButton.textContent = 'Discover Upcoming Events';
    eventButtonDiv.appendChild(eventButton);
    eventSection.appendChild(eventButtonDiv);

    home.appendChild(eventSection);

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

function createMenuItem(name, description) {
    const heading = document.createElement('h3');
    heading.textContent = name;

    const details = document.createElement('p');
    details.textContent = description;

    const div = document.createElement('div');
    div.classList.add('menu-item');
    div.appendChild(heading);
    div.appendChild(details);

    return div;
}

function loadHome() {
    const content = document.getElementById('content');
    content.textContent = '';
    content.appendChild(createHome());
}

export default loadHome;
