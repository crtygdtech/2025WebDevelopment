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
  let id = document.getElementById("collision_id").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.collision_id == id){
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
function filterByCrash_date(){
  let output = document.getElementById("output");
  let date = document.getElementById("crash_date").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.crash_date == date){
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

function filterByCrash_time(){
  let output = document.getElementById("output");
  let time = document.getElementById("crash_time").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.crash_time == time){
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

function filterByContribute_fator1(){
  let output = document.getElementById("output");
  let contribute_factor1 = document.getElementById("contributing_factor_vehicle_1").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.contributing_factor_vehicle_1 == contribute_factor1){
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

function filterByContribute_fator2(){
  let output = document.getElementById("output");
  let contribute_factor2 = document.getElementById("contributing_factor_vehicle_2").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.contributing_factor_vehicle_2 == contribute_factor2){
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
function filterByContribute_fator3(){
  let output = document.getElementById("output");
  let contribute_factor3 = document.getElementById("contributing_factor_vehicle_3").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.contributing_factor_vehicle_3 == contribute_factor3){
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