/*
  List of all the images. "beeftips.jpg","brisket.jpg","ribeye.jpg","steak.jpg","clams.jpg","crabs.jpg","lobster.png","scallops.jpg","shrimp.jpg","tuna.jpg","flan.jpg","passionberry.jpeg","oreocup.jpg"
*/ 
//Challenge 1: Add the appropriate images to each array below from the list above.
//Challenge 2: Add appropriate prices for each food in their corresponding array.
//Challenge 3: Add appropriate titles for each food in their corresponding array.  Use the image names as a hint for the food title.
let meat_titles = ["Beeftips", "Brisket", "Ribeye", "Steak"];
let meats = ["beeftips.jpg","brisket.jpg", "ribeye.jpg", "steak.jpg"];
let meat_prices = [21.99, 22.40, 18.00, 23.25];
let seafood_titles = ["Clams", "Crabs", "Lobster", "Scallops", "Shrimp", "Tuna"];
let seafood = ["clams.jpg","crabs.jpg","lobster.png","scallops.jpg","shrimp.jpg","tuna.jpg"];
let seafood_prices = [18.00, 18.99, 20.23, 19.25, 16.00, 14.50];
let dessert_titles = ["Flan", "Oreocup", "Passionberry"];
let dessert = ["flan.jpg","oreocup.jpg", "passionberry.jpeg"];
let dessert_prices = [15.00, 15.99, 18.35];

function init(){
  //Each food has its own output container
  let m = document.getElementById("meats");
  let s = document.getElementById("seafood");
  let d = document.getElementById("dessert");
  let build = " ";
  //Challenge 4:  Build cards for the meats. Place the build in the meat container. 
  for(let i = 0; i < meat.length; i += 1){
    build += `<div class="card">`;
    build += `  <h2> ${meat_titles[i]} </h2>`;
    build += `  <img src="images/${meats[i]}">`;
    build += `  <span> ${meat_prices[i]} </span>`;
    build += `</div>`;
  }
  m.innerHTML = build;
  //Challenge 5:  Build cards for the seafoods. Place the build in the seafood container.
   for(let i = 0; i < seafood.length; i += 1){
    build += `<div class="card">`;
    build += `  <h2> ${seafood_titles[i]} </h2>`;
    build += `  <img src="images/${seafood[i]}">`;
    build += `  <span> ${seafood_prices[i]} </span>`;
    build += `</div>`;
  }
  s.innerHTML = build;
  //Challenge 6:  Build cards for the desserts. Place the build in the dessert container.
  for(let i = 0; i < dessert.length; i += 1){
    build += `<div class="card">`;
    build += `  <h2> ${dessert_titles[i]} </h2>`;
    build += `  <img src="images/${dessert[i]}">`;
    build += `  <span> ${dessert_prices[i]} </span>`;
    build += `</div>`;
  }
  d.innerHTML = build;
  /*Notes for Challenges 4 through 6:
      1) Each challenge requires its own for loop to build the output.
      2) You can reuse the build variable as long as you set it back to `` before each loop.
      3) Create a basic card with the title, image and price.
  */
}
