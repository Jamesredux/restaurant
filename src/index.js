import './reset.css';
import './style.css';

import './assets/diner1.jpg';
import './assets/food1.jpg';
import home from './home';
import menu from './menu';
import contact from './contact'




// on load

// window.onload = home();
const homeLink = document.querySelector('.home-tab');
const menuLink = document.querySelector('.food-menu');
const contactLink = document.querySelector('.contact');

 const setUpPage =(() => {
    home();
    const changeContent = (e) => {
      const oldContent = document.querySelector('.added-content');
      if (oldContent) oldContent.remove();
      const newPage = e.target.className;
      switch (newPage) {
         case 'home-tab':
            home();
            break;
         case 'food-menu':
            menu();
            break;
         case 'contact':
            contact();
            break;

      }
   
      
    }

    homeLink.addEventListener('click', changeContent);
    menuLink.addEventListener('click', changeContent);
    contactLink.addEventListener('click', changeContent);



 })();
