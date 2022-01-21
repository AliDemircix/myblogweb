const searchHandler = () => {
  const showInput = () => {
    const searchBoxInput = document.querySelector('#searchBox');
    searchBoxInput.style.display === 'block'
      ? (searchBoxInput.style.display = 'none')
      : (searchBoxInput.style.display = 'block');
  };
  const search = document.getElementById('search');
  search.addEventListener('click', showInput);
};

export default searchHandler;
