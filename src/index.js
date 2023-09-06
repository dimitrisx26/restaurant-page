import renderHeader from './js/header.js';
import renderFooter from './js/footer.js';
import renderHome from './js/home.js';

import './css/style.css';


(function renderStatic() {
    // Header
    renderHeader();

    renderHome();

    // Footer
    renderFooter();
})();