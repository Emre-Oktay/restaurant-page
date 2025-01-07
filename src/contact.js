function createContact() {
    const contact = document.createElement('div');

    const heroSection = document.createElement('section');

    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';
    heroSection.appendChild(heading);

    heroSection.appendChild(
        createParagraph(
            'We’d love to hear from you! Whether it’s a question, feedback, or a booking inquiry, feel free to reach out.'
        )
    );

    contact.appendChild(heroSection);

    const infoSection = document.createElement('section');

    const infoDiv = document.createElement('div');

    const address = document.createElement('p');
    const addressLabel = document.createElement('strong');
    addressLabel.textContent = 'Address:';
    address.appendChild(addressLabel);
    address.appendChild(document.createTextNode(' Deepwood Forest Clearing, Oakshade Glade'));

    infoDiv.appendChild(address);

    const phone = document.createElement('p');
    const phoneLabel = document.createElement('strong');
    phoneLabel.textContent = 'Phone:';
    phone.appendChild(phoneLabel);
    phone.appendChild(document.createTextNode(' (555) 123-4567'));

    infoDiv.appendChild(phone);

    const email = document.createElement('p');
    const emailLabel = document.createElement('strong');
    emailLabel.textContent = 'Email:';
    email.appendChild(emailLabel);
    email.appendChild(document.createTextNode(' hello@mossyrest.com'));

    infoDiv.appendChild(email);

    infoSection.appendChild(infoDiv);

    contact.appendChild(infoSection);

    const formSection = document.createElement('section');

    const form = document.createElement('form');
    form.classList.add('contact-form');

    const formHeading = document.createElement('h2');
    formHeading.textContent = 'Send Us a Message';
    form.appendChild(formHeading);

    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    nameLabel.setAttribute('for', 'name');
    form.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('type', 'text');
    form.appendChild(nameInput);

    const emailFormLabel = document.createElement('label');
    emailFormLabel.textContent = 'Email:';
    emailFormLabel.setAttribute('for', 'email');
    form.appendChild(emailFormLabel);

    const emailInput = document.createElement('input');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('type', 'email');
    form.appendChild(emailInput);

    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Message:';
    messageLabel.setAttribute('for', 'message');
    form.appendChild(messageLabel);

    const messageInput = document.createElement('textarea');
    messageInput.setAttribute('id', 'message');
    messageInput.setAttribute('rows', '5');
    form.appendChild(messageInput);

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

    formSection.appendChild(form);

    contact.appendChild(formSection);

    return contact;
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

function loadContact() {
    const content = document.getElementById('content');
    content.textContent = '';
    content.appendChild(createContact());
}

export default loadContact;
