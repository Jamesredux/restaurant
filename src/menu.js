const menu = () => {
    const menuContent = `<p> This is the menu</p>`


    const homeTab = document.querySelector('.home-div');
    homeTab.style.display = 'none';

    const contentDiv = document.querySelector('#content')
    const innerDiv = document.createElement('div');
    innerDiv.innerHTML = menuContent;
    contentDiv.appendChild(innerDiv);
};


export default menu