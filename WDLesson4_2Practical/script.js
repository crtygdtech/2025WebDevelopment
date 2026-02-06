// General Guideline
/*
function name(){
  // Step 1: Create variables for the information from the text inputs and the output element

  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
*/

/* Challenge 2:  Create the function for Challenge 1 scenario */
function Area(){
  let l = parseInt(document.getElementById("length").value);
  let w = parseInt(document.getElementById("width").value);
  let output = document.getElementById("output");
  let a = l * w;
  let message = "";

  if (l <= 0 || w <= 0){
    message ="Inappropriate measurement";
  }
  else{
    message = a;
  }
  output.innerHTML = message;
}


/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/
function pet(){
  let animal = document.getElementById("animal").value;
  let emotion = document.getElementById("emotion").value;
  let output = document.getElementById("output");
  let picture = "";
  
  if (animal == "Bear" && emotion == "Sad"){
    picture = "sadBear.jpg";
  }
  if (animal == "Cat" && emotion == "Sad"){
    picture = "sadCat.jpg";
  }
  if (animal == "Dog" && emotion == "Sad"){
    picture = "sadDog.jpg";
  }
  if (animal == "Bear" && emotion == "Funny"){
    picture = "funnyBear.jpg";
  }
  if (animal == "Cat" && emotion == "Funny"){
    picture = "funnyCat.jpg";
  }
  if (animal == "Dog" && emotion == "Funny"){
    picture = "funnyDog.jpg";
  }
  output.innerHTML=`<img src= ${picture}>`;
}