import pizzaImg from "assets/pizza-margarita.jpg";

export default function renderMenu() {
    const content = document.querySelector('#content');

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuHero = document.createElement('div');
    menuHero.classList.add('hero');

    const menuHeroTxt = document.createElement('div');
    menuHeroTxt.classList.add('heroTxt');

    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Menu';

    const menuDescription = document.createElement('p');
    menuDescription.textContent = 'Al Dente: Authentic Italian cuisine!';
    
    const menuImg = document.createElement('img');
    menuImg.src = pizzaImg;
    menuImg.alt = 'Italian food, pizza margherita';

    //Menu items container

    const menuItems = document.createElement('div');
    menuItems.classList.add('menuItems');

    //Menu items

    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');
    const menuItemTitle = document.createElement('h2');
    menuItemTitle.classList.add('menuItemTitle');
    menuItemTitle.textContent = 'Spaghetti alla Carbonara';
    const menuItemDescription = document.createElement('p');
    menuItemDescription.classList.add('menuItemDescription');
    menuItemDescription.textContent = 'Spaghetti alla carbonara is an Italian pasta dish from Rome made with egg, hard cheese, cured pork, and black pepper. The dish arrived at its modern form, with its current name, in the middle of the 20th century.'
    const menuItemPrice = document.createElement('p');
    menuItemPrice.classList.add('menuItemPrice');
    menuItemPrice.textContent = '€ 12.00';

    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menuItem');
    const menuItemTitle2 = document.createElement('h2');
    menuItemTitle2.classList.add('menuItemTitle');
    menuItemTitle2.textContent = 'Pizza Margherita';
    const menuItemDescription2 = document.createElement('p');
    menuItemDescription2.classList.add('menuItemDescription');
    menuItemDescription2.textContent = 'Pizza Margherita is a typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil. Traditionally, it is made with fior di latte rather than mozzarella di bufala.'
    const menuItemPrice2 = document.createElement('p');
    menuItemPrice2.classList.add('menuItemPrice');
    menuItemPrice2.textContent = '€ 10.00';

    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menuItem');
    const menuItemTitle3 = document.createElement('h2');
    menuItemTitle3.classList.add('menuItemTitle');
    menuItemTitle3.textContent = 'Lasagne alla Bolognese';
    const menuItemDescription3 = document.createElement('p');
    menuItemDescription3.classList.add('menuItemDescription');
    menuItemDescription3.textContent = 'Lasagne are a type of wide, flat pasta, possibly one of the oldest types of pasta. Lasagne, or the singular lasagna, is also an Italian dish made of stacked layers of this flat pasta alternating with fillings such as ragù and other vegetables, cheese, and seasonings and spices such as garlic, oregano and basil.'
    const menuItemPrice3 = document.createElement('p');
    menuItemPrice3.classList.add('menuItemPrice');
    menuItemPrice3.textContent = '€ 12.00';

    const menuItem4 = document.createElement('div');
    menuItem4.classList.add('menuItem');
    const menuItemTitle4 = document.createElement('h2');
    menuItemTitle4.classList.add('menuItemTitle');
    menuItemTitle4.textContent = 'Risotto ai Funghi';
    const menuItemDescription4 = document.createElement('p');
    menuItemDescription4.classList.add('menuItemDescription');
    menuItemDescription4.textContent = 'Risotto is a northern Italian rice dish cooked with broth until it reaches a creamy consistency. The broth can be derived from meat, fish, or vegetables. Many types of risotto contain butter, onion, white wine, and parmesan cheese. It is one of the most common ways of cooking rice in Italy.'
    const menuItemPrice4 = document.createElement('p');
    menuItemPrice4.classList.add('menuItemPrice');
    menuItemPrice4.textContent = '€ 12.00';

    const menuItem5 = document.createElement('div');
    menuItem5.classList.add('menuItem');
    const menuItemTitle5 = document.createElement('h2');
    menuItemTitle5.classList.add('menuItemTitle');
    menuItemTitle5.textContent = 'Tiramisù';
    const menuItemDescription5 = document.createElement('p');
    menuItemDescription5.classList.add('menuItemDescription');
    menuItemDescription5.textContent = 'Tiramisu is a coffee-flavoured Italian dessert. It is made of ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavoured with cocoa.'
    const menuItemPrice5 = document.createElement('p');
    menuItemPrice5.classList.add('menuItemPrice');
    menuItemPrice5.textContent = '€ 6.00';

    const menuItem6 = document.createElement('div');
    menuItem6.classList.add('menuItem');
    const menuItemTitle6 = document.createElement('h2');
    menuItemTitle6.classList.add('menuItemTitle');
    menuItemTitle6.textContent = 'Panna Cotta';
    const menuItemDescription6 = document.createElement('p');
    menuItemDescription6.classList.add('menuItemDescription');
    menuItemDescription6.textContent = 'Panna cotta is an Italian dessert of sweetened cream thickened with gelatin and molded. The cream may be aromatized with coffee, vanilla, or other flavorings.'
    const menuItemPrice6 = document.createElement('p');
    menuItemPrice6.classList.add('menuItemPrice');
    menuItemPrice6.textContent = '€ 6.50';

    //Append elements to content

    content.appendChild(menu);
    menu.appendChild(menuHero);
    menuHero.appendChild(menuHeroTxt);
    menuHeroTxt.appendChild(menuTitle);
    menuHeroTxt.appendChild(menuDescription);
    menuHero.appendChild(menuImg);
    menu.appendChild(menuItems);
    menuItems.appendChild(menuItem);
    menuItems.appendChild(menuItem2);
    menuItems.appendChild(menuItem3);
    menuItems.appendChild(menuItem4);
    menuItems.appendChild(menuItem5);
    menuItems.appendChild(menuItem6);

    //Append elements to menu items

    menuItem.appendChild(menuItemTitle);
    menuItem.appendChild(menuItemDescription);
    menuItem.appendChild(menuItemPrice);
    menuItem2.appendChild(menuItemTitle2);
    menuItem2.appendChild(menuItemDescription2);
    menuItem2.appendChild(menuItemPrice2);
    menuItem3.appendChild(menuItemTitle3);
    menuItem3.appendChild(menuItemDescription3);
    menuItem3.appendChild(menuItemPrice3);
    menuItem4.appendChild(menuItemTitle4);
    menuItem4.appendChild(menuItemDescription4);
    menuItem4.appendChild(menuItemPrice4);
    menuItem5.appendChild(menuItemTitle5);
    menuItem5.appendChild(menuItemDescription5);
    menuItem5.appendChild(menuItemPrice5);
    menuItem6.appendChild(menuItemTitle6);
    menuItem6.appendChild(menuItemDescription6);
    menuItem6.appendChild(menuItemPrice6);
}