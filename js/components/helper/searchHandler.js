const searchHandler = () => {
  const showInput = () => {
    const searchBoxInput = document.querySelector('#searchBox');
    // searchBoxInput.style.display === 'block'
    //   ? (searchBoxInput.style.display = 'none')
    //   : (searchBoxInput.style.display = 'block');
    searchBoxInput.style.opacity == 0
      ? (searchBoxInput.style.opacity = 1)
      : (searchBoxInput.style.opacity = 0);
  };
  const search = document.getElementById('search');
  search.addEventListener('click', showInput);
};

export default searchHandler;
