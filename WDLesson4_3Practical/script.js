/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/
/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/
function bmi(){
       let w = parseFloat(document.getElementById("w").value);
       let h = parseFloat(document.getElementById("h").value);
       let output = document.getElementById("output");
       let bmi = w/(h**2);
       let status = "";

       if (bmi == 18,5-24,9){
              status = "healthyweight.png";
       }
       else if (bmi < 18,5){
              status = "underweight.png";
       }
       else if (bmi == 25-29,9){
              status = "overweight.png";
       }
       else if (bmi == 30-34,9){
              status = "obeseweight.png";
       }
}
