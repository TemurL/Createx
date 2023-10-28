import * as TLFunc from './modules/functions.js';
import { mobMenu } from './modules/mobMenu.js';
import { portfolioCard } from './modules/portfolioCard.js';
import { serviceCardHover } from './modules/serviceCardHover.js';
import { newCard } from './modules/newCard.js';
import { formBtn } from './modules/formBtn.js';
import { headerBack } from './modules/headerBack.js';
import { paralaxCeo } from './modules/paralaxCeo.js';
import { presentation } from './modules/presentation.js';
import { indexSlider } from './modules/indexSlider.js';

TLFunc.isWebp()

indexSlider();
mobMenu();
serviceCardHover();
// portfolioCard();
newCard();
formBtn();
headerBack();
paralaxCeo();
presentation();