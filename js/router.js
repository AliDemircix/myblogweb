import { topContainerWrapper } from './components/view/topContainer.js';
import { headerWrapper } from './components/view/header.js';
import { newPostsWrapper } from './components/view/newPosts.js';
import { likedPostsWrapper } from './components/view/mostLikedPosts.js';
import { newsWrapper } from './components/view/news.js';
import { footer } from './components/view/footer.js';
import likeCheck from './components/helper/likeCheck.js';
import searchHandler from './components/helper/searchHandler.js';
import { filteredHtmlPosts } from './components/view/catView/html.js';
import { filteredCssPosts } from './components/view/catView/css.js';
const router = () => {
  const container = document.querySelector('.mobile');
  const appRoutes = [
    {
      path: '/html',
      name: [headerWrapper, filteredHtmlPosts, footer],
    },
    {
      path: '/css',
      name: [headerWrapper, filteredCssPosts, footer],
    },
    {
      path: 'myblogweb/',
      name: [
        headerWrapper,
        topContainerWrapper,
        newPostsWrapper,
        likedPostsWrapper,
        newsWrapper,
        footer,
      ],
    },
  ];

  function navigate(event) {
    console.log(typeof event);
    const route =
      typeof event === 'string' ? event : event.target.attributes[1].value;

    // redirect to the router instance
    const routeInfo = appRoutes.filter((r) => r.path === route)[0];
    console.log(route);
    if (!routeInfo) {
      window.history.pushState({}, '', '#error');
      // define content of fallback path
      container.innerHTML = `This route is not Defined`;
    } else {
      container.innerHTML = '';
      window.history.pushState({}, '', `${routeInfo.path}`);
      routeInfo.name.forEach((content) => container.appendChild(content));
      likeCheck();
      searchHandler();
      // define content of the routes; this could be created differently for each route and managed using an if-else or switch block
    }
  }

  function main() {
    navigate(window.location.pathname);
    const routes = Array.from(document.querySelectorAll('[router-link]'));

    routes.forEach((route) => {
      route.addEventListener('click', navigate);
    });
  }

  main();
};

export default router;
