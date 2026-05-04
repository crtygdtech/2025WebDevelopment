let data;
async function init(){
  
  let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json"
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    build += `<div class="card">
                <h2>Collision ID: ${complaint.collision_id}</h2>
                <h3>Date: ${complaint.crash_date}</h3>
                <h3>Time: ${complaint.crash_time}</h3>
                <h3>Borough: ${complaint.borough}</h3>
                <p>Contributing factor1: ${complaint.contributing_factor_vehicle_1}</p>
                <p>Contributing factor2: ${complaint.contributing_factor_vehicle_2}</p>
                <p>Contributing factor3: ${complaint.contributing_factor_vehicle_3}</p>
              </div>`
  }


  output.innerHTML = build;

}
function filterByCollision_id(){
  let output = document.getElementById("output");
  let collision_id = document.getElementById("borough").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.collision_id == collision_id){
      build += `<div class="card">
                <h2>Collision ID: ${complaint.collision_id}</h2>
                <h3>Date: ${complaint.crash_date}</h3>
                <h3>Time: ${complaint.crash_time}</h3>
                <h3>Borough: ${complaint.borough}</h3>
                <p>Contributing factor1: ${complaint.contributing_factor_vehicle_1}</p>
                <p>Contributing factor2: ${complaint.contributing_factor_vehicle_2}</p>
                <p>Contributing factor3: ${complaint.contributing_factor_vehicle_3}</p>
              </div>`
              
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.borough == borough){
      build += `<div class="card">
                <h2>Collision ID: ${complaint.collision_id}</h2>
                <h3>Date: ${complaint.crash_date}</h3>
                <h3>Time: ${complaint.crash_time}</h3>
                <h3>Borough: ${complaint.borough}</h3>
                <p>Contributing factor1: ${complaint.contributing_factor_vehicle_1}</p>
                <p>Contributing factor2: ${complaint.contributing_factor_vehicle_2}</p>
                <p>Contributing factor3: ${complaint.contributing_factor_vehicle_3}</p>
              </div>`
              
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.crash_date == borough){
      build += `<div class="card">
                <h2>Collision ID: ${complaint.collision_id}</h2>
                <h3>Date: ${complaint.crash_date}</h3>
                <h3>Time: ${complaint.crash_time}</h3>
                <h3>Borough: ${complaint.borough}</h3>
                <p>Contributing factor1: ${complaint.contributing_factor_vehicle_1}</p>
                <p>Contributing factor2: ${complaint.contributing_factor_vehicle_2}</p>
                <p>Contributing factor3: ${complaint.contributing_factor_vehicle_3}</p>
              </div>`
              
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}