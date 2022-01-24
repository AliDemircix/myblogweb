import categories from '../data/categories.js';

const headerWrapper = document.createElement('div');
const headerWrapperRow = document.createElement('div');
const logoWrapper = document.createElement('div');
const upMenuWrapper = document.createElement('div');
const rowMenuWrapper = document.createElement('div');
const menuLi = document.createElement('li');
headerWrapper.className = 'container header shadow-sm tomato-progress';
headerWrapperRow.className = 'row col-lg-12 col-md-12 col-sm-12';
logoWrapper.className = 'col-lg-2 logo col-sm-12';
logoWrapper.innerHTML = `<img id="logo" router-link="/myblogweb" class="ml-2 p-2" src="img/logo.png"> <span class="text-white" router-link="/myblogweb">My Blog</span>`;
upMenuWrapper.className = 'col-lg-4 ml-auto col-sm-12 upmenu';
rowMenuWrapper.className = 'row menu';
menuLi.className = 'dropdown';
menuLi.innerHTML =
  '<a href="" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-list mr-1"></i>Categories</a>';
const catDropdown = document.createElement('div');
catDropdown.className = 'dropdown-menu';
categories.forEach((category) => {
  catDropdown.innerHTML += `<a class="dropdown-item ${category.className}" href=""> ${category.icon} ${category.title}</a>`;
});
menuLi.appendChild(catDropdown);
headerWrapperRow.appendChild(logoWrapper);
headerWrapperRow.appendChild(upMenuWrapper);
upMenuWrapper.appendChild(rowMenuWrapper);
rowMenuWrapper.appendChild(menuLi);
rowMenuWrapper.innerHTML += `<li id="search"><i class="fa fa-search mr-1"></i>Search </li>
        <li class="dropdown"><a href="" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-sign mr-1"></i>Register/Login </a>
          <div class="dropdown-menu"> <input class="dropdown-item form-control " type="text" placeholder="E-Mail Adress" name=""> <input class="dropdown-item form-control" type="text" placeholder="Password" name=""> <a class="btn btn-success btn-sm ml-2" href="">Login</a><a class="btn btn-danger btn-sm ml-2" href="">Register</a></div>
          
        </li><input type="text" class="form-control col-lg-12" id="searchBox"  placeholder="Search Something...">`;
// menuLi.appendChild(menuA);

headerWrapper.appendChild(headerWrapperRow);
const rowCatWrapper = document.createElement('div');
rowCatWrapper.className = 'col-lg-12 row categorybg';
const rowCatText = document.createElement('div');
rowCatText.className = 'col-lg-9 row cattext mt-2 ml-2';
categories.forEach((category) => {
  rowCatText.innerHTML += `<h6 class="p-2 text-dark "><span class="categoryUrl" router-link="/${category.url}">${category.title}</span></h6>`;
});
rowCatWrapper.appendChild(rowCatText);
headerWrapper.appendChild(rowCatWrapper);

export { headerWrapper };
