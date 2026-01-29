
//  For each challenge fix the error and explain the correction in the comment


/* Challenge 4: Does the function name match the event handler referenced in the event listener? 
Function name is different*/
function cylinder(){

  /* Challenge 5: Are there any errors in retrieving and parsing the information from the text inputs?
  First line is missing 'Id' and second line the 'b' of 'by' has to be capitalize also the name should be 'h' for the id of height.*/
  let r = parseInt(document.getElementById("r").value);
  let h = parseInt(document.getElementById("height").value);

  /* Challenge 6: Does the variable output correctly create a reference to the output container? 
  It has '.value' that should not be there*/
  let output = document.getElementById("output");

  /* Challenge 7: Is the following calculation for volume of a cylinder correct?
  Formula is multiplying h not dividing and the 'm' for math.PI and math.pow has to be capitalize.*/
  let v = Math.PI * Math.pow(r,2) * h;

  /* Challenge 8: Are there any errors in displaying the output? 
  The words are missing a quote at the end of the phrase, remove the dollar sign and curly brackets and add the plus sign.*/
  output.innerHTML = 'Volume of the cylinder is' + v; 

}