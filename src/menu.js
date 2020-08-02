const menu = () => {
    const menuContent = `
    <div class="menu-tabs">
    
    <div class="tab">
      <input type="radio" id="breakfast" name="tab-group-1" checked>
       <label for="breakfast">Breakfast</label>
        
        <div class="menu-page">
         <div class="menu-items">
      
           <div class="items-col">
               <ul>
                 <li>2 Eggs, Any Style</li>
                 <li>The "Double" B</li>
                 <li>Omlette with Cheese</li>
                 <li>Pancakes and Waffles</li>
                 <li>Steak and Eggs</li>
                </ul>
            </div>
        
            <div class="price">
                <ul>
                  <li>$4.00</li>
                  <li>$7.00</li>
                  <li>$5.25</li>
                  <li>$5.75</li>
                  <li>$9.95</li>
                </ul>
            </div>
        
            <div class="items-col">
                <ul>
                  <li>French Toast</li>
                  <li>Lumberjack Special</li>
                  <li>Woodsman's Combo Breakfast</li>
                  <li>Oatmeal</li>
                  <li></li>
                 </ul>
            </div>
        
            <div class="price">
                <ul>
                 <li>$6.75</li>
                 <li>$6.25</li>
                 <li>$9.95</li>
                 <li>$4.50</li>
                 <li></li>
                 </ul>
            </div>
          </div>

          <div>
            All above served with toast, hash browns and bacon or Sausage
          </div>  
       </div> 
    </div>
     
    <div class="tab">
     <input type="radio" id="burgers" name="tab-group-1">
         <label for="burgers">Burgers & Sides</label>
  
            <div class="menu-page">
             <div class="menu-items">
                
              <div class="items-col">
               <ul>
                <li>Quarter Pounder Hamburger</li>
                <li>BB Special</li>
                <li>Chicken Steak Burger</li>
                <li>Roast Beef</li>
                <li>Ham and Cheese</li>
               </ul>
              </div>
             
             <div class="price">
                <ul>
                 <li>$7.85</li>
                 <li>$7.95</li>
                 <li>$6.50</li>
                 <li>$7.95</li>
                 <li>$5.50</li>
                </ul>
            </div>
   
           <div class="items-col">
             <ul>
                <li>French Fries</li>
                <li>Onion Rings</li>
                <li>Soup of the Day</li>
                <li>Salad</li>
                <li></li>
             </ul>
            </div>

            <div class="price">
             <ul>
              <li>$3.75</li>
              <li>$3.50</li>
              <li>$3.75</li>
              <li>$3.95</li>
              <li></li>
             </ul>
           </div>

        </div>    

            <div>
                All Burgers Served with Fries or Onion Rings
            </div>
       </div> 
    </div>
     
     <div class="tab">
       <input type="radio" id="specials" name="tab-group-1">
        <label for="specials">Specials</label>
       
       <div class="menu-page">
       <div class="menu-items">
   
       <div class="items-col">
         <ul>
             <li>B.B.Q Ribs</li>
             <li>Corned Beef</li>
             <li>Spaghetti & Meatballs</li>
             <li>Fish Special</li>
             <li>Beef Stew</li>
         </ul>
       </div>
     
       <div class="price">
        <ul>
            <li>$11.00</li>
            <li>$8.95</li>
            <li>$8.50</li>
            <li>$11.25</li>
            <li>$8.49</li>
        </ul>
       </div>

       <div class="items-col">
        <ul>
            <li>Roast Chicken</li>
            <li>Pork Schnitzel</li>
            <li>Woodsman's Gumbo</li>
            <li>Surf and Turf</li>
            <li>"T" Bone Steak</li>
        </ul>
       </div>

       <div class="price">
         <ul>
             <li>$8.75</li>
             <li>$7.95</li>
             <li>$6.66</li>
             <li>$14.00</li>
             <li>$12.95</li>
         </ul>
       </div>

   </div>


    </div> 
   </div>
 
    <div class="tab">
      <input type="radio" id="drinks" name="tab-group-1">
      <label for="drinks">Drinks and Deserts</label>
      
      <div class="menu-page">
      <div class="menu-items">

       <div class="items-col">
         <ul>
             <li>Coffee or Tea</li>
             <li>Orange Juice</li>
             <li>Malt</li>
             <li>Rootbeer Float</li>
             <li>Soda</li>
         </ul>
        </div>

        <div class="price">
          <ul>
              <li>$1.75</li>
              <li>$2.50</li>
              <li>$3.50</li>
              <li>$3.50</li>
              <li>$2.25</li>
          </ul>
        </div>

        <div class="items-col">
         <ul>
             <li>Blueberry Pie</li>
             <li>Cherry Pie</li>
             <li>Pumpkin Pie</li>
             <li>LingonBerry Pie</li>
             <li>Ice Cream Sundae</li>
         </ul>
        </div>

        <div class="price">
          <ul>
              <li>$2.75</li>
              <li>$2.25</li>
              <li>$2.95</li>
              <li>$2.50</li>
              <li>$2.00</li>
          </ul>
        </div>

       </div>
       
       <div>
        All Pies Served With Ice Cream or Cream
       </div> 

        </div> 
    </div>

    
    </div>
    <div class="gallery">

     <div class="pic-container">
       
       
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