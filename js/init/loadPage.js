const myMobile = document.querySelector('.mobile');
const createComponent = (componentName) => {
  myMobile.appendChild(componentName);
};
export default createComponent;
