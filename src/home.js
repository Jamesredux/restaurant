
const home = () => {

    const homeContent = `
    <div class='welcome-page'>
    <h1>Welcome to the World Famous BB Diner</h1>
    <p>Serving delicious, hearty inexpensive food to the people of Deer Meadow, Washington since
        1959. We pride ourselves that all our food is home made from the best available ingredients.
    </p>
    <p> First Opened by Bridget and Bob Tremond to serve the logging community of the area the BB Diner 
    has been keeping the residents of Deer Meadow well fed for over 50 years!</p>
    

    <div class="middle-home">
    
         <div class="welcome-pic">
             <img src="./images/food5.jpg" alt="pie" >
         </div>

         <div class="opening-hours">
           <h1>Opening Hours</h1>
           <table>
               <tr><td>Monday:</td> <td>24hrs</td></tr>
               <tr><td>Tuesday:</td> <td>24hrs</td></tr>
               <tr><td>Wednesday:</td> <td>24hrs</td></tr>
               <tr><td>Thursday:</td> <td>24hrs</td></tr>
               <tr><td>Friday:</td> <td>24hrs</td></tr>
               <tr><td>Saturday:</td> <td>24hrs</td></tr>
               <tr><td>Sunday:</td> <td>Closed</td></tr>
           </table>
         </div>   
    </div>     
    
    <p>Delivery Available - Events Catered</p>
    <p>Our speciality is Blueberry Pie</p>
    </div>
    `

    const contentDiv = document.querySelector('#content')
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('added-content');
    innerDiv.innerHTML = homeContent;
    contentDiv.appendChild(innerDiv);

};

export default home