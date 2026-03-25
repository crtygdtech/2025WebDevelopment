function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361",
  }
  let output = document.getElementById("output");
  //Challenge 1: Create and display a card of the information contained in the JSON variable school
  let build = `
    <div class="card">
      <h2>${school.name}</h2>
      <img src="${school.image}">
      <p>${school.address}</p>
    </div>
  `
  output.innerHTML = build;
}
function artist(){
  //Challenge 2: Fill the JSON below with the specified information
  let artist = {
    "name":"The Weeknd",
    "image":"https://static.wikia.nocookie.net/taylor-swift/images/3/3f/The_Weeknd_1.jpg/revision/latest?cb=20250608131114",
    "album":"https://www.google.com/search?sca_esv=484202b0491193e0&rlz=1C1GCEA_enUS1178US1178&q=The+Weeknd+Starboy&stick=H4sIAAAAAAAAAONgFuLSz9U3SM9KyTNJVuLVT9c3NEw2LDasyDYu1hLPTrbSzy0tzkzWTywqySwusUrMSSrNLV7EKhSSkaoQnpqanZeiEFySWJSUXwkAHrv64ksAAAA&sa=X&ved=2ahUKEwiA97eVkruTAxUajIkEHT3gAgQQ9OUBegQIGRAH&biw=1920&bih=859&dpr=1#&tbs=kac:1,kac_so:0",
    "url":"https://en.wikipedia.org/wiki/The_Weeknd_discography"
  }
  let output = document.getElementById("output");
  //Challenge 3: Build a card for the information in the JSON.  Make the image a hyperlink to the url provided.
  let build = `
    <div class="card">
      <h2>${artist.name}</h2>
      <a href="${artist.url}">
        <img src="${artist.image}">
      </a>
      <a href="${artist.album}">
        <span>Album</span>
      </a>
    </div>
  `
  output.innerHTML = build;
}


