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
                <h2>${complaint.collision_id}</h2>
                <h3>${complaint.crash_date}</h3>
                <h3>${complaint.crash_time}</h3>
                <h3>${complaint.borough}</h3>
                <p>Language: ${country.primary_language}</p>
                <p>Population: ${country.population}</p>
                <p>Continent: ${country.continent}</p>
                <a href="${country.googleMaps}" target="_blank"> Map </a>
              </div>`
  }


  output.innerHTML = build;

}