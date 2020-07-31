import './style.css';
import './assets/diner1.jpg';
import home from './home';
import menu from './menu';
import contact from './contact'


const content = document.querySelector('.test');
const newPara = document.createElement('p')
const para = `<p>This para</p>`;
newPara.innerHTML = para;
content.appendChild(newPara);
newPara.classList.add('test');

// on load

window.onload = home();

 const setUpPage =(() => {
    const homeLink = document.querySelector('.home-tab');
    const menuLink = document.querySelector('.food-menu');
    const contactLink = document.querySelector('.contact');

    homeLink.addEventListener('click', home);
    menuLink.addEventListener('click', menu);
    contactLink.addEventListener('click', contact);

 })();