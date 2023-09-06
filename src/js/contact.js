import restaurant from "assets/italian-restaurant-outside.jpg";

export default function renderContact() {
    const content = document.querySelector('#content');

    const contactHero = document.createElement('div');
    contactHero.classList.add('hero');
    
    const contactHeroTxt = document.createElement('div');
    contactHeroTxt.classList.add('heroTxt');

    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact';

    const contactDescription = document.createElement('p');
    contactDescription.textContent = 'Got a question? Contact us!';

    const contactImg = document.createElement('img');
    contactImg.src = restaurant;
    contactImg.alt = 'exterior of an Italian restaurant';

    //Contact form container

    const contactFormContainer = document.createElement('div');
    contactFormContainer.classList.add('formContainer');

    //Contact form

    const contactForm = document.createElement('div');
    contactForm.classList.add('contactForm');

    const contactFormTitle = document.createElement('h2');
    contactFormTitle.classList.add('contactFormTitle');
    contactFormTitle.textContent = 'Contact us';

    const contactFormDescription = document.createElement('p');
    contactFormDescription.classList.add('contactFormDescription');
    contactFormDescription.textContent = 'Fill in the form below to contact us!';

    const contactFormName = document.createElement('input');
    contactFormName.classList.add('contactFormName');
    contactFormName.type = 'text';
    contactFormName.placeholder = 'Full Name';
    contactFormName.required = true;

    const contactFormEmail = document.createElement('input');
    contactFormEmail.classList.add('contactFormEmail');
    contactFormEmail.type = 'email';
    contactFormEmail.placeholder = 'Email';
    contactFormEmail.required = true;

    const contactFormMessage = document.createElement('textarea');
    contactFormMessage.classList.add('contactFormMessage');
    contactFormMessage.placeholder = 'Message';
    contactFormMessage.required = true;

    const contactFormSubmit = document.createElement('button');
    contactFormSubmit.classList.add('contactFormSubmit');
    contactFormSubmit.textContent = 'Submit';

    //Append elements

    content.appendChild(contactHero);
    contactHero.appendChild(contactHeroTxt);
    contactHeroTxt.appendChild(contactTitle);
    contactHeroTxt.appendChild(contactDescription);
    contactHero.appendChild(contactImg);
    content.appendChild(contactFormContainer);
    contactFormContainer.appendChild(contactForm);
    contactForm.appendChild(contactFormTitle);
    contactForm.appendChild(contactFormDescription);
    contactForm.appendChild(contactFormName);
    contactForm.appendChild(contactFormEmail);
    contactForm.appendChild(contactFormMessage);
    contactForm.appendChild(contactFormSubmit);

    //Event listeners

    contactFormSubmit.addEventListener('click', () => {
        alert('Thank you for contacting us!');
    });
}