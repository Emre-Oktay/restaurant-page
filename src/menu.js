function createMenu() {
    const menu = document.createElement('div');

    const heroSection = document.createElement('section');
    heroSection.classList.add('hero');

    const heading = document.createElement('h1');
    heading.textContent = 'Our Enchanted Menu';
    heroSection.appendChild(heading);

    heroSection.appendChild(
        createParagraph('Savor the flavors of the forest, crafted with care and a touch of magic.')
    );

    menu.appendChild(heroSection);

    const starterSection = document.createElement('section');

    const starterHeading = document.createElement('h2');
    starterHeading.textContent = 'Starters';
    starterSection.appendChild(starterHeading);

    const starterDiv = document.createElement('div');
    starterDiv.classList.add('menu-items');

    starterDiv.appendChild(createMenuItem('Lily Pad Crisps', 'Thin, fried kale chips served with a pond herb dip.'));
    starterDiv.appendChild(
        createMenuItem('Forest Mushroom Soup', 'A creamy blend of wild mushrooms, thyme, and truffle oil.')
    );
    starterDiv.appendChild(
        createMenuItem('Elven Herb Salad', 'A mix of greens, edible flowers, and a honey-lavender dressing.')
    );

    starterSection.appendChild(starterDiv);

    menu.appendChild(starterSection);

    const mainSection = document.createElement('section');

    const mainHeading = document.createElement('h2');
    mainHeading.textContent = 'Mains';
    mainSection.appendChild(mainHeading);

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('menu-items');

    mainDiv.appendChild(createMenuItem('Tadpole Stew', 'A hearty vegetable and fish stew inspired by forest flavors.'));
    mainDiv.appendChild(
        createMenuItem('Roasted Wild Boar', 'Slow-roasted boar served with rosemary potatoes and forest berries.')
    );
    mainDiv.appendChild(
        createMenuItem('Elven Garden Pie', 'A vegetarian pie filled with fresh forest herbs and mushrooms.')
    );

    mainSection.appendChild(mainDiv);

    menu.appendChild(mainSection);

    const dessertSection = document.createElement('section');

    const dessertHeading = document.createElement('h2');
    dessertHeading.textContent = 'Desserts';
    dessertSection.appendChild(dessertHeading);

    const dessertDiv = document.createElement('div');
    dessertDiv.classList.add('menu-items');

    dessertDiv.appendChild(createMenuItem('Moonlit Mousse', 'A silken chocolate mousse with a hint of lavender.'));
    dessertDiv.appendChild(
        createMenuItem('Faerie Forest Tart', 'A fruit tart topped with seasonal berries and edible glitter.')
    );
    dessertDiv.appendChild(createMenuItem('Golden Honey Cake', 'A layered cake infused with honey and cinnamon.'));

    dessertSection.appendChild(dessertDiv);

    menu.appendChild(dessertSection);

    const drinkSection = document.createElement('section');

    const drinkHeading = document.createElement('h2');
    drinkHeading.textContent = 'Drinks';
    drinkSection.appendChild(drinkHeading);

    const drinkDiv = document.createElement('div');
    drinkDiv.classList.add('menu-items');

    drinkDiv.appendChild(createMenuItem('Frog Prince Ale', 'A frothy golden beer brewed locally.'));
    drinkDiv.appendChild(createMenuItem('Forest Elixir', 'A refreshing mix of cucumber, mint, and sparkling water.'));
    drinkDiv.appendChild(createMenuItem('Dragon’s Blood Mead', 'A rich honey mead with hints of cranberry and spice.'));

    drinkSection.appendChild(drinkDiv);

    menu.appendChild(drinkSection);

    return menu;
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

function loadMenu() {
    const content = document.getElementById('content');
    content.textContent = '';
    content.appendChild(createMenu());
}

export default loadMenu;
