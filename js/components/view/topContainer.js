import posts from '../data/posts.js';

//Add Left Container in Top Container
const topContainerWrapper = document.createElement('div');
topContainerWrapper.className = 'container middle mt-3 mb-3';
const sliderRow = document.createElement('div');
sliderRow.className = 'row col-lg-12 col-md-12 col-sm-12 slider';
const leftSliderWrapper = document.createElement('div');
const post = posts.find((post) => post.isFeatured);
console.log(post);
leftSliderWrapper.className =
  'col-lg-9 col-md-12 col-sm-12 mr-auto leftslider shadow-sm';
leftSliderWrapper.innerHTML = `    <div class="row ">
<div class="col-lg-8 col-md-12 col-sm-12 "> <a href=""> <img src="${post.img}" class="img-fluid mt-3"></a></div>
<div class="col-lg-4 col-md-12 col-sm-12 sliderprofil "> <h5 class="text-danger mt-3">${post.title}</h5> <p>${post.content}<br> <img src="${post.writerAvatar}"> <b class="text-danger">${post.writerName}</b>
</p>  </div>
</div>`;

// Add Right Pinned Posts to Top Container
const rightSliderWrapper = document.createElement('div');
rightSliderWrapper.className =
  'col-lg-3 col-md-4 col-sm-12 ml-auto rightslider';
posts.forEach((post) => {
  if (post.isPinned) {
    rightSliderWrapper.innerHTML += ` <div class="col-lg-12 col-md-12 col-sm-12 righttop mb-4 "> <a href=""> <img class="img-fluid shadow-sm" src="${post.img}"> <p style="position: absolute; top:50%; left:50%; transform: translate(-50%,-50%);color:white; background-color:rgba(255, 99, 71, 0.562); padding:3px;  " class="text-center">${post.title} </p></a></div>`;
  }
});
sliderRow.appendChild(leftSliderWrapper);
sliderRow.appendChild(rightSliderWrapper);
topContainerWrapper.appendChild(sliderRow);

export { topContainerWrapper };
