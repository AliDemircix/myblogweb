import { topContainerWrapper } from './components/view/topContainer.js';
import { headerWrapper } from './components/view/header.js';
import { newPostsWrapper } from './components/view/newPosts.js';
import { likedPostsWrapper } from './components/view/mostLikedPosts.js';
import { newsWrapper } from './components/view/news.js';
import { footer } from './components/view/footer.js';
import likeCheck from './components/helper/likeCheck.js';
import searchHandler from './components/helper/searchHandler.js';

const myMobile = document.querySelector('.mobile');
myMobile.appendChild(headerWrapper);
myMobile.appendChild(topContainerWrapper);
myMobile.appendChild(newPostsWrapper);
myMobile.appendChild(likedPostsWrapper);
myMobile.appendChild(newsWrapper);
myMobile.appendChild(footer);
likeCheck();
searchHandler();
