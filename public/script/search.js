var accommodations;

fetch('/accommodations/all')
  .then(response => response.json())
  .then(json => {
    accommodations = json;
    list(accommodations)
  })

function filterAccommodations() {
  var city = document.getElementById('city').value;
  var minPrice = document.getElementById('min_price').value;
  var maxPrice = document.getElementById('max_price').value;
  var beds = document.getElementById('beds').value;
  var baths = document.getElementById('baths').value;
  var searchResults = accommodations.slice(0);
  if (city != '') {
    for (let i = 0; i < searchResults.length; i++) {
      console.log('city')
      console.log(searchResults)
      if (searchResults[i].city != city) {
        searchResults.splice(i, 1);
        i--;
      };
    };
  }
  if (minPrice != '') {
    for (let i = 0; i < searchResults.length; i++) {
      console.log('city')
      console.log(searchResults)
      if (searchResults[i].price < minPrice) {
        searchResults.splice(i, 1);
        i--;
      };
    };
  }
  if (minPrice != '') {
    for (let i = 0; i < searchResults.length; i++) {
      console.log('city')
      console.log(searchResults)
      if (searchResults[i].price > maxPrice) {
        searchResults.splice(i, 1);
        i--;
      };
    };
  }
  if (baths != '') {
    for (let i = 0; i < searchResults.length; i++) {
      console.log('city')
      console.log(searchResults)
      if (searchResults[i].bathrooms < baths) {
        searchResults.splice(i, 1);
        i--;
      };
    };
  }
  if (beds != '') {
    for (let i = 0; i < searchResults.length; i++) {
      console.log('city')
      console.log(searchResults)
      if (searchResults[i].bedrooms < beds) {
        searchResults.splice(i, 1);
        i--;
      };
    };
  }
  list(searchResults);
};

function list(accommodations) {
  listings = document.getElementById('listings')
  string = ''
  for (let i = 0; i < accommodations.length; i++) {
    string += `
    <div class="accomodation">
      <div>
        <img class="accomodation_image" src="${accommodations[i].images[0]}">
      </div>
      <div>
        <div>
        <h2>${accommodations[i].house}</h2>
        <h2> £${accommodations[i].price} per night</h2>
        <br></br>
        <h3>${accommodations[i].street}</h3>
        <h3>${accommodations[i].city}</h3>
        <br></br>
        <h3>${accommodations[i].bedrooms}x <img class="utility_symbol" src="http://www.clker.com/cliparts/f/D/w/D/P/6/little-bed-2-md.png">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        ${accommodations[i].bathrooms}x <img class="utility_symbol" src="https://image.flaticon.com/icons/svg/34/34730.svg"></h3>
        <br></br>
        <button class="details_button">View Details</button>
        </div>
      </div>
    </div>
    `
  }
  listings.innerHTML = string
}
