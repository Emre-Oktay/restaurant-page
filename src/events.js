function createEvent() {
    const event = document.createElement('div');

    const heroSection = document.createElement('section');

    const heading = document.createElement('h1');
    heading.textContent = 'Events at The Mossy Rest';
    heroSection.appendChild(heading);

    heroSection.appendChild(createParagraph('Experience the magic of the forest through music, feasts, and tales.'));

    event.appendChild(heroSection);

    const eventSection = document.createElement('section');

    const eventHeading = document.createElement('h2');
    eventHeading.textContent = 'Upcoming Events';
    eventSection.appendChild(eventHeading);

    const eventList = document.createElement('div');

    eventList.appendChild(
        createEventCard(
            'Bardic Night',
            '**Every Friday at 8 PM**',
            'Join us for an evening of live music, storytelling, and poetry by the fire. Local bards and traveling minstrels alike gather to enchant with their talents.'
        )
    );
    eventList.appendChild(
        createEventCard(
            'Fae Market Feast',
            '**January 28th, 2025**',
            "Celebrate the forest's bounty with a feast inspired by seasonal flavors. Craft vendors and forest-themed performances add to the charm of the evening."
        )
    );
    eventList.appendChild(
        createEventCard(
            'Moonlit Masquerade',
            '**February 14th, 2025**',
            'A romantic evening under the moonlight. Guests are invited to wear masks and enjoy a special candlelit dinner accompanied by harp melodies.'
        )
    );

    eventSection.appendChild(eventList);

    event.appendChild(eventSection);

    return event;
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

function createEventCard(title, date, description) {
    const heading = document.createElement('h3');
    heading.textContent = title;

    const dateParagraph = document.createElement('p');
    dateParagraph.textContent = date;

    const details = document.createElement('p');
    details.textContent = description;

    const div = document.createElement('div');
    div.classList.add('event-card');
    div.appendChild(heading);
    div.appendChild(dateParagraph);
    div.appendChild(details);

    return div;
}

function loadEvents() {
    const content = document.getElementById('content');
    content.textContent = '';
    content.appendChild(createEvent());
}

export default loadEvents;
