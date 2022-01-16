const likeCheck = () => {
  const likes = document.querySelectorAll('.fa-heart');

  likes.forEach((like) =>
    like.addEventListener('click', (e) => {
      if (e.target.classList.contains('liked')) {
        e.target.innerText = parseInt(e.target.innerText) - 1;
        e.target.style.fontWeight = 'lighter';
        e.target.classList.remove('liked');
      } else {
        e.target.innerText = parseInt(e.target.innerText) + 1;
        console.log(e.target.innerText);
        e.target.style.fontWeight = 'bolder';
        e.target.classList.add('liked');
      }
    }),
  );
};
export default likeCheck;
