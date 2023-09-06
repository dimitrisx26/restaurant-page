import renderHeader from "./header.js";
import renderFooter from "./footer.js";
import renderMenu from "./menu.js";
import restImg from "assets/italian-restaurant.jpg"
import foodImg from "assets/italian-food.jpg"

export default function renderHome() {
        const content = document.querySelector('#content');

        // Hero section

        const hero = document.createElement('div');
        hero.classList.add('hero');

        const heroTxt = document.createElement('div');
        heroTxt.classList.add('heroTxt');

        const heroTitle = document.createElement('h2');
        heroTitle.textContent = 'Benvenuto';

        const heroSubtitle = document.createElement('p');
        heroSubtitle.textContent = 'Al Dente: Savory Pasta Perfection!';

        const heroImg = document.createElement('img');
        heroImg.src = restImg;
        heroImg.alt = 'Italian restaurant';

        // Info section

        const info = document.createElement('div');
        info.classList.add('info');

        const infoMulti = document.createElement('div');
        infoMulti.classList.add('infoMulti');

        const infoTxt = document.createElement('div');
        infoTxt.classList.add('infoTxt');
        infoTxt.textContent = `Welcome to Al Dente, a culinary haven where  the art of pasta reaches
    new heights. Nestled in the heart of the city, our restaurant
            transports you to the charming streets of Italy with its warm and
            inviting ambiance.At Al Dente, we are passionate about crafting
            authentic Italian dishes that celebrate the rich flavors and
            traditions of the Mediterranean.Our talented chefs meticulously
            handcraft each pasta dish, ensuring it is cooked to perfection - al
    dente, of course.From classic favorites like spaghetti carbonara to
            innovative creations like truffle - infused gnocchi, our menu is a
            tantalizing journey through the diverse regions of Italy.
            Complemented by a carefully curated selection of fine wines and
            attentive service, dining at Al Dente is an experience that
            stimulates the senses and leaves a lasting impression.Join us and
            savor the essence of Italy, one delicious bite at a time.`;
        const infoBtn = document.createElement('button');
        infoBtn.textContent = 'View Menu';
        infoBtn.classList.add('infoBtn');
        infoBtn.addEventListener('click', () => {
                content.innerHTML = '';
                renderHeader();
                renderMenu();
                renderFooter();
        });
        
        const infoImg = document.createElement('img');
        infoImg.src = foodImg;
        infoImg.alt = 'Italian pasta food';

        // Appending elements

        content.appendChild(hero);
        hero.appendChild(heroTxt);
        heroTxt.appendChild(heroTitle);
        heroTxt.appendChild(heroSubtitle);
        hero.appendChild(heroImg);

        content.appendChild(info);
        info.appendChild(infoMulti);
        infoMulti.appendChild(infoTxt);
        infoTxt.appendChild(infoBtn);
        infoMulti.appendChild(infoImg);
}