import renderHome from './home.js';
import renderMenu from './menu.js';
import renderContact from './contact.js';
import renderFooter from './footer.js';

export default function renderHeader() {
    const content = document.querySelector('#content');

    const header = document.createElement('header');
    content.appendChild(header);
    const h1 = document.createElement('h1');
    h1.textContent = 'Al Dente';
    header.appendChild(h1);
    const nav = document.createElement('nav');
    header.appendChild(nav);
    const ul = document.createElement('ul');
    nav.appendChild(ul);
    let li;
    for (let i = 0; i < 3; i++) {
        li = document.createElement('li');
        ul.appendChild(li);
    }
    const liElements = document.querySelectorAll('li');
    liElements[0].textContent = 'Home';
    liElements[1].textContent = 'Menu';
    liElements[2].textContent = 'Contact';

    h1.addEventListener('click', () => {
        content.innerHTML = '';
        renderHeader();
        renderHome();
        renderFooter();

    });
    liElements[0].addEventListener('click', () => {
        content.innerHTML = '';
        renderHeader();
        renderHome();
        renderFooter();
    });
    liElements[1].addEventListener('click', () => {
        content.innerHTML = '';
        renderHeader();
        renderMenu();
        renderFooter();
    });
    liElements[2].addEventListener('click', () => {
        content.innerHTML = '';
        renderHeader();
        renderContact();
        renderFooter();
    });
}