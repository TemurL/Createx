import * as TLFunc from './modules/functions.js';
import { mobMenu } from './modules/mobMenu.js';
import { serviceCardHover } from './modules/serviceCardHover.js';
import { newCard } from './modules/newCard.js';
import { formBtn } from './modules/formBtn.js';
import { headerBack } from './modules/headerBack.js';
import { paralaxCeo } from './modules/paralaxCeo.js';
import { presentation } from './modules/presentation.js';
import { indexSlider } from './modules/indexSlider.js';
import { katalogCollaps } from './modules/katalogCollaps.js';
import { newspaper } from './modules/newspaper.js';
import { newspaperMapingBtns } from './modules/newspaperMapingBtns.js';
import { modal } from './modules/modal.js';
import { teamSocials } from './modules/teamSocials.js';

TLFunc.isWebp()

modal();
indexSlider();
mobMenu();
teamSocials();
serviceCardHover();
newCard();
formBtn();
headerBack();
paralaxCeo();
presentation();
katalogCollaps();
// Qqt of cards on a single page {newspaper(=> n )}
newspaper(2);
newspaperMapingBtns();
