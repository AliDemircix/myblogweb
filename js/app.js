import categories from './components/data/categories.js';
import { topContainerWrapper } from './components/view/topContainer.js';
import { headerWrapper, headerWrapperRow } from './components/view/header.js';
const myMobile = document.querySelector('.mobile');
myMobile.appendChild(headerWrapper);
myMobile.appendChild(topContainerWrapper);
