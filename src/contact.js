const contact = () => {
   


    const homeTab = document.querySelector('.home-div');
    homeTab.style.display = 'none';

    const contentDiv = document.querySelector('#content')
    const innerDiv = document.createElement('div');
    innerDiv.innerHTML = menuContent;
    contentDiv.appendChild(innerDiv);
};


export default contact