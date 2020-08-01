const menu = () => {
    const menuContent = `
    <div class="menu-tabs">
    
    <div class="tab">
        <input type="radio" id="breakfast" name="tab-group-1" checked>
        <label for="breakfast">Breakfast</label>
        
        <div class="menu-page">
            Breakfast Menu
        </div> 
    </div>
     
    <div class="tab">
        <input type="radio" id="burgers" name="tab-group-1">
        <label for="burgers">Burgers & Sides</label>
        
        <div class="menu-page">
            burger meal menu
        </div> 
    </div>
     
     <div class="tab">
        <input type="radio" id="specials" name="tab-group-1">
        <label for="specials">Specials</label>
      
        <div class="menu-page">
            specials
        </div> 
    </div>

    <div class="tab">
        <input type="radio" id="drinks" name="tab-group-1">
        <label for="drinks">Drinks and Deserts</label>
      
        <div class="menu-page">
            Drinks
        </div> 
    </div>
     
 </div>

    
    
    `








    const contentDiv = document.querySelector('#content')
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('added-content');
    innerDiv.innerHTML = menuContent;
    contentDiv.appendChild(innerDiv);
};


export default menu