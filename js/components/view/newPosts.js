import posts from '../data/posts.js';
const newPostsWrapper = document.createElement('div');
newPostsWrapper.className = 'container newposts';
const newPostsCategoryTitle = document.createElement('div');
newPostsCategoryTitle.className =
  'mt-3 text-left col-md-12 col-sm-12 col-lg-12';
newPostsCategoryTitle.innerHTML = `<h4>New Posts</h4>`;
const tomatoProgressive = document.createElement('div');
tomatoProgressive.className = 'progress tomato-progress my-2';
tomatoProgressive.style.height = '3px';
tomatoProgressive.innerHTML = ` <div class="progress-bar bg-warning" role="progressbar" style="width: 12%;" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100"></div>`;
newPostsWrapper.appendChild(newPostsCategoryTitle);
newPostsWrapper.appendChild(tomatoProgressive);
const newPostsCard = document.createElement('div');
newPostsCard.className =
  'row col-md-12 col-sm-12 col-lg-12 mt-3 mb-3  mx-0 px-0';
const reversedPosts = [...posts];
reversedPosts.reverse();
reversedPosts.forEach((post, i) => {
  if (i < 4) {
    newPostsCard.innerHTML += `<div id="${
      post.id
    }" class="col-lg-3 col-md-6 col-sm-6 col-12 postarea px-1"><a href=""><img class="img-fluid img-fix "src="${
      post.img
    }"></a> <div class="bg-white textpro  p-2"> <h5>${post.title}</h5> 
    <p class="badge badge-danger" router-link="/${post.category}">${
      post.category
    }</p>
    <p>${post.content.slice(0, 200)}</p> <img src="${
      post.writerAvatar
    }"> <b class="text-danger">${
      post.writerName
    }</b>  <i class=" ml-4 far fa-heart text-danger"> ${
      post.liked
    }</i> <i class="far fa-eye text-muted"> ${post.viewed}</i> </div> </div>`;
  }
});
newPostsWrapper.appendChild(newPostsCard);

export { newPostsWrapper };
