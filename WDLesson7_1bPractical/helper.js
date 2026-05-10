//get( ) accepts an id of an element and returns the actual element with that id. This functions serves to shorten the code required to get an element
function get(id){
  return document.getElementById(id);
}

//Challeng 1: Create a function card that accepts a JSON of a 311 complaint, generates and returns an appropriate card for the complaint
function card(complaint){
  let build="";
  build += `<div class="fitted card">:
                  <h3>${complaint.complaint_type}</h3>
                  <p>${complaint.borough}</p>
                  <p>${complaint.incident_zip}</p>
                  <p>${complaint.descriptor}</p>
  </div>
  `
}
return build;

//Challenge 2: Create a function cards that accepts an array of JSON of Open Parking and Camera Violations, generates and return cards for each violation
function filterByParking_CameraViolations(){
  let complaint_type = document.getElementById("complaint_types").value;
  let descriptor = document.getElementById("descriptors").value;
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
      let complaint = data[i];
      if(complaint.complaint_type == complaint_type || complaint.descriptor == descriptor){
        build += card(complaint);
        ct += 1;
      }
    }
    result.innerHTML = `${ct} Results found.`
    output.innerHTML = build;
    
  }

