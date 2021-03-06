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

          <div class="menu-info">
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

            <div class="menu-info">
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
       
       <div class="menu-info">
        All Pies Served With Ice Cream or Cream
       </div> 

        </div> 
    </div>

    
    </div>

    
    <div class="gallery">
    
      <div class="gallery-header">
        <h1> A Selection from our Menu </h1>
      </div>

    <div class="gallery-container">

       <div class="pic-container">
       
         <img src="./images/food1.jpg" alt="toast" >
    
        </div>

     <div class="pic-container">
       
     <img src="./images/food2.jpg" alt="pancakes" >
    
     </div>

     <div class="pic-container">
       
     <img src="./images/food3.jpg" alt="pancakes" >
    
     </div>

     <div class="pic-container">
       
     <img src="./images/food4.jpg" alt="hamburger" >
    
     </div>

     <div class="pic-container">
       
     <img src="./images/food5.jpg" alt="blueberrypie" >
    
     </div>

     <div class="pic-container">
       
     <img src="./images/food6.jpg" alt="cherry pie" >
    
     </div>

     <div class="pic-container">
       
     <img src="./images/food7.jpg" alt="applepie" >
    
     </div>

     <div class="pic-container">
       
     <img src="./images/food8.jpg" alt="coffee" >
    
     </div>

     <div class="pic-container">
       
     <img src="./images/food9.jpg" alt="stew" >
    
     </div>

     <div class="pic-container">
       
     <img src="./images/food10.jpg" alt="pork" >
    
     </div>

     <div class="pic-container">
       
     <img src="./images/food11.jpg" alt="tbone" >
    
     </div>

     <div class="pic-container">
       
     <img src="./images/food12.jpg" alt="burger" >
    
     </div>

     </div>


    </div>  
  
    `;

  const contentDiv = document.querySelector("#content");
  const innerDiv = document.createElement("div");
  innerDiv.classList.add("added-content");
  innerDiv.innerHTML = menuContent;
  contentDiv.appendChild(innerDiv);
};

export default menu;

const this_fog = 5634;
var banga = "no way";
let bag = { god: 34, norese: 33 };
