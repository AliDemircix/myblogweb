import posts from '../data/posts.js';
const newsWrapper = document.createElement('div');
newsWrapper.className = 'container hbr';
const newsCategoryTitle = document.createElement('div');
newsCategoryTitle.className = 'mt-3 text-left col-md-12 col-sm-12 col-lg-12';
newsCategoryTitle.innerHTML = `<h4>News</h4>`;
const progressBar = document.createElement('div');
progressBar.className = 'progress tomato-progress my-2';
progressBar.style.height = '3px';
progressBar.innerHTML = `<div class="progress-bar bg-warning" role="progressbar" style="width: 12%;" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100"></div>`;
newsWrapper.appendChild(newsCategoryTitle);
newsWrapper.appendChild(progressBar);
const newsRow = document.createElement('div');
newsRow.className = 'row';
const news = posts.filter((post) => post.isNews);
news.forEach((hbr) => {
  newsRow.innerHTML += `<div class="col-lg-6 col-md-6 col-sm-12">
<div class="card border-0 my-1">
<div class="row">
<img class="card-img-left col-6 col-lg-5" src="${hbr.img}" alt="${hbr.title}">
<div class="col-md-6 col-6">
<div class="card-block">
  <h5 class="card-title mt-2 green"><a href="#">${hbr.title}</a></h5>
  <p class="card-text">${hbr.content.slice(0, 30)}...</p>
  <i style="color:#567EB5;" class="fa fa-facebook"></i> <span style="font-size: 12px;">1.1b</span>
  <i style="color:green;" class="fa fa-whatsapp"></i> <span style="font-size: 12px;">975</span>
  <span class="text-muted" style="font-size: 12px;">12 Jan 2020</span>
</div>
</div>
</div>
</div> 
</div>`;
});
newsWrapper.appendChild(newsRow);
export { newsWrapper };
