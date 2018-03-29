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
      if (searchResults[i].city != city) {
        searchResults.splice(i, 1);
      };
    };
  }
  if (minPrice != '') {
    for (let i = 0; i < searchResults.length; i++) {
      if (searchResults[i].price < minPrice) {
        searchResults.splice(i, 1);
      };
    };
  }
  if (minPrice != '') {
    for (let i = 0; i < searchResults.length; i++) {
      if (searchResults[i].price > maxPrice) {
        searchResults.splice(i, 1);
      };
    };
  }
  if (baths != '') {
    for (let i = 0; i < searchResults.length; i++) {
      if (searchResults[i].bathrooms < baths) {
        searchResults.splice(i, 1);
      };
    };
  }
  if (beds != '') {
    for (let i = 0; i < searchResults.length; i++) {
      if (searchResults[i].bedrooms < beds) {
        searchResults.splice(i, 1);
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
        <h1>${accommodations[i].hostName}</h1>
        <h2> £${accommodations[i].price} per night</h2>
        <h2>${accommodations[i].house}</h2>
        <h2>${accommodations[i].street}</h2>
        <h2>${accommodations[i].city}</h2>
        <h2>${accommodations[i].bedrooms} Bedrooms</h2>
        <h2>${accommodations[i].bathrooms}</span> Bathrooms</h2>
        <button class="details_button">View Details</button>
      </div>
    </div>
    `
  }
  listings.innerHTML = string
}