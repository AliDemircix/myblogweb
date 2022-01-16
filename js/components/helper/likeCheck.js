const likeCheck = () => {
  const likes = document.querySelectorAll('.fa-heart');

  likes.forEach((like) =>
    like.addEventListener('click', (e) => {
      e.target.innerText = parseInt(e.target.innerText) + 1;
      console.log(e.target.innerText);
      e.target.style.fontWeight = 'bolder';
    }),
  );
};
export default likeCheck;
