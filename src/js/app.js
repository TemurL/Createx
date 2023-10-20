import * as TLFunc from './modules/functions.js';
import { heroSlider } from './modules/heroSlider.js';
import { mobMenu } from './modules/mobMenu.js';
import { portfolioCard } from './modules/portfolioCard.js';
import { serviceCardHover } from './modules/serviceCardHover.js';
import { newCard } from './modules/newCard.js';

TLFunc.isWebp()

heroSlider();
mobMenu();
serviceCardHover();
// portfolioCard();
newCard();

const formBtn = document.getElementById('footer__form-btn');
const checker = document.getElementById('agree');

checker.onchange = function() {
    formBtn.disabled = !this.checked;
}