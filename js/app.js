// generates a random number, given a min and max number
function randomNumber(min, max) {
  // (next line) was grabbed from MDN documentation
  return Math.random() * (max - min + 1) + min;
}
// create window into DOM
let tableElem = document.getElementById('city-schedule');

// holds values from Store objects
let storeValues = [];

// object constructor for making stores
function Store(city, minCust, maxCust, avgCook) {
  this.cityName = city;
  this.minCustomersPerHour = minCust;
  this.maxCustomersPerHour = maxCust;
  this.avgCookiesPerSale = avgCook;
  this.cookiesForGivenHour = [];
  this.totalCookies = 0;

  storeValues.push(this);
}

// method to calculate cookies needed for each hour, given customer guesstimate
Store.prototype.calculateCookieSchedule = function () {
  let i = 0;
  for (i = 0; i < 14; i++) {
    this.cookiesForGivenHour[i] = Math.floor(randomNumber(this.minCustomersPerHour, this.maxCustomersPerHour) * this.avgCookiesPerSale);
    this.totalCookies = this.totalCookies + Math.floor(randomNumber(this.minCustomersPerHour, this.maxCustomersPerHour) * this.avgCookiesPerSale);
  }
};

// method to render header row to HTML page
Store.prototype.renderHeader = function () {
  // create a header row
  let headerRow = document.createElement('tr');
  // add to DOM
  tableElem.appendChild(headerRow);

  // create empty top-left cell
  let topLeftEmptyCell = document.createElement('th');
  // no context needed
  // add to DOM
  headerRow.appendChild(topLeftEmptyCell);

  // array for holding each header
  let hourOfTheDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  // render each header
  let i = 0;
  for (i = 0; i < hourOfTheDay.length; i++) {
    // create header
    let headers = document.createElement('th');
    // add context
    headers.innerText = `${hourOfTheDay[i]}`;
    // add to DOM
    headerRow.appendChild(headers);
  }

  // create header for "Daily Location Total"
  let headerDailyTotal = document.createElement('th');
  // add context
  headerDailyTotal.innerText = 'Daily Location Total';
  // add to DOM
  headerRow.appendChild(headerDailyTotal);
};

// method for rendering one row to the table, that contains cookie guesstimates
Store.prototype.renderStore = function() {

  // create a row
  let row = document.createElement('tr');
  // add to DOM
  tableElem.appendChild(row);

  // create td for city name
  let tdName = document.createElement('td');
  // add context
  tdName.innerText = `${this.cityName}`;
  // add to DOM
  row.appendChild(tdName);

  // render each td, which contains a cookie guesstimate
  let i = 0;
  for (i = 0; i < this.cookiesForGivenHour.length; i++) {
    // create td
    let tdTag = document.createElement('td');
    // add context
    tdTag.innerText = `${this.cookiesForGivenHour[i]}`;
    // add to DOM
    row.appendChild(tdTag);
  }

  // create td, for daily cookie total
  let tdTagTotal = document.createElement('td');
  // add context
  tdTagTotal.innerText = `${this.totalCookies}`;
  // add to DOM
  row.appendChild(tdTagTotal);
};

// creating an object for each store
new Store ('Seattle', 23, 65, 6.3);
new Store ('Tokyo', 3, 24, 1.2);
new Store ('Dubai', 11, 38, 3.7);
new Store ('Paris', 20, 38, 2.3);
new Store ('Lima', 2, 16, 4.6);

function displayStores() {
  for (let i = 0; i < storeValues.length; i++) {
    storeValues[i].calculateCookieSchedule();
    storeValues[i].renderHeader();
    storeValues[i].renderStore();
  }
}

displayStores();
