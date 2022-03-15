function randomNumber(min, max) {
  // (next line) grabbed from MDN documentation
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let cityProfile = document.getElementById('city-profile');

// Seattle object <><><><><><><><><><><><><><><><><><><><><><>
let seattle = {
  cityName: 'Seattle',
  // minimum number of customers each hour
  minCustomersPerHour: 23,
  // maximum number of customers each hour
  maxCustomersPerHour: 65,
  // average number of cookies purchased in each sale
  avgCookiesPerSale: 6.3,
  // hold current values for cookies needed at hour intervals in a day
  cookiesForGivenHour: [],
  // hold current value for total cookies needed for a day
  totalCookies: 0,
  // generate random number of customers for an hour slot, given min and max
  getRandomCustomers: function () {
    return randomNumber(this.minCustomersPerHour, this.maxCustomersPerHour);
  },
  // calculate whole-number of cookies needed for an hour interval, for entire day, and tallies day total
  getCookieSchedule: function () {
    let i = 0;
    for (i = 0; i < 14; i++) {
      this.cookiesForGivenHour[i] = Math.floor(this.getRandomCustomers() * this.avgCookiesPerSale);
      this.totalCookies = this.totalCookies + Math.floor(this.getRandomCustomers() * this.avgCookiesPerSale);
    }
  },
  // render content to HTML page
  renderSchedule: function () {
    // create h2 element
    let h2Tag = document.createElement('h2');
    // add context
    h2Tag.innerText = `${this.cityName}`;
    // add to DOM
    cityProfile.appendChild(h2Tag);

    // create ul element
    let ulTag = document.createElement('ul');
    // add to DOM
    cityProfile.appendChild(ulTag);

    // create hour labels
    let hourOfTheDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    // create li elements
    let i = 0;
    for (i = 0; i < 14; i++) {
      let liTag = document.createElement('li');
      // add context
      liTag.innerText = `${hourOfTheDay[i]}: ${this.cookiesForGivenHour[i]} cookies`;
      // add to DOM
      cityProfile.appendChild(liTag);
    }
    // create "Total" li element
    let liTag = document.createElement('li');
    // add context
    liTag.innerText = `Total: ${this.totalCookies} cookies`;
    // add to DOM
    cityProfile.appendChild(liTag);

    // create line break
    let brTag = document.createElement('br');
    // add to DOM
    cityProfile.appendChild(brTag);
  }
};

// generate random number of customers
seattle.getRandomCustomers();
// generate schedule of estimated customers and needed cookies each hour for day
seattle.getCookieSchedule();
// render the schedule to sales.html in unordered list
seattle.renderSchedule();

// Tokyo object <><><><><><><><><><><><><><><><><><><><><><>
let tokyo = {
  cityName: 'Tokyo',
  // minimum number of customers each hour
  minCustomersPerHour: 3,
  // maximum number of customers each hour
  maxCustomersPerHour: 24,
  // average number of cookies purchased in each sale
  avgCookiesPerSale: 1.2,
  // hold current values for cookies needed at hour intervals in a day
  cookiesForGivenHour: [],
  // hold current value for total cookies needed for a day
  totalCookies: 0,
  // generate random number of customers for an hour slot, given min and max
  getRandomCustomers: function () {
    return randomNumber(this.minCustomersPerHour, this.maxCustomersPerHour);
  },
  // calculate whole-number of cookies needed for an hour interval, for entire day, and tallies day total
  getCookieSchedule: function () {
    let i = 0;
    for (i = 0; i < 14; i++) {
      this.cookiesForGivenHour[i] = Math.floor(this.getRandomCustomers() * this.avgCookiesPerSale);
      this.totalCookies = this.totalCookies + Math.floor(this.getRandomCustomers() * this.avgCookiesPerSale);
    }
  },
  // render content to HTML page
  renderSchedule: function () {
    // create h2 element
    let h2Tag = document.createElement('h2');
    // add context
    h2Tag.innerText = `${this.cityName}`;
    // add to DOM
    cityProfile.appendChild(h2Tag);

    // create ul element
    let ulTag = document.createElement('ul');
    // add to DOM
    cityProfile.appendChild(ulTag);

    // create hour labels
    let hourOfTheDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    // create li elements
    let i = 0;
    for (i = 0; i < 14; i++) {
      let liTag = document.createElement('li');
      // add context
      liTag.innerText = `${hourOfTheDay[i]}: ${this.cookiesForGivenHour[i]} cookies`;
      // add to DOM
      cityProfile.appendChild(liTag);
    }
    // create "Total" li element
    let liTag = document.createElement('li');
    // add context
    liTag.innerText = `Total: ${this.totalCookies} cookies`;
    // add to DOM
    cityProfile.appendChild(liTag);

    // create line break
    let brTag = document.createElement('br');
    // add to DOM
    cityProfile.appendChild(brTag);
  }
};

// generate random number of customers
tokyo.getRandomCustomers();
// generate schedule of estimated customers and needed cookies each hour for day
tokyo.getCookieSchedule();
// render the schedule to sales.html in unordered list
tokyo.renderSchedule();


// Dubai object <><><><><><><><><><><><><><><><><><><><><><>
let dubai = {
  cityName: 'Dubai',
  // minimum number of customers each hour
  minCustomersPerHour: 11,
  // maximum number of customers each hour
  maxCustomersPerHour: 38,
  // average number of cookies purchased in each sale
  avgCookiesPerSale: 3.7,
  // hold current values for cookies needed at hour intervals in a day
  cookiesForGivenHour: [],
  // hold current value for total cookies needed for a day
  totalCookies: 0,
  // generate random number of customers for an hour slot, given min and max
  getRandomCustomers: function () {
    return randomNumber(this.minCustomersPerHour, this.maxCustomersPerHour);
  },
  // calculate whole-number of cookies needed for an hour interval, for entire day, and tallies day total
  getCookieSchedule: function () {
    let i = 0;
    for (i = 0; i < 14; i++) {
      this.cookiesForGivenHour[i] = Math.floor(this.getRandomCustomers() * this.avgCookiesPerSale);
      this.totalCookies = this.totalCookies + Math.floor(this.getRandomCustomers() * this.avgCookiesPerSale);
    }
  },
  // render content to HTML page
  renderSchedule: function () {
    // create h2 element
    let h2Tag = document.createElement('h2');
    // add context
    h2Tag.innerText = `${this.cityName}`;
    // add to DOM
    cityProfile.appendChild(h2Tag);

    // create ul element
    let ulTag = document.createElement('ul');
    // add to DOM
    cityProfile.appendChild(ulTag);

    // create hour labels
    let hourOfTheDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    // create li elements
    let i = 0;
    for (i = 0; i < 14; i++) {
      let liTag = document.createElement('li');
      // add context
      liTag.innerText = `${hourOfTheDay[i]}: ${this.cookiesForGivenHour[i]} cookies`;
      // add to DOM
      cityProfile.appendChild(liTag);
    }
    // create "Total" li element
    let liTag = document.createElement('li');
    // add context
    liTag.innerText = `Total: ${this.totalCookies} cookies`;
    // add to DOM
    cityProfile.appendChild(liTag);

    // create line break
    let brTag = document.createElement('br');
    // add to DOM
    cityProfile.appendChild(brTag);
  }
};

// generate random number of customers
dubai.getRandomCustomers();
// generate schedule of estimated customers and needed cookies each hour for day
dubai.getCookieSchedule();
// render the schedule to sales.html in unordered list
dubai.renderSchedule();

// Paris object <><><><><><><><><><><><><><><><><><><><><><>
let paris = {
  cityName: 'Paris',
  // minimum number of customers each hour
  minCustomersPerHour: 20,
  // maximum number of customers each hour
  maxCustomersPerHour: 38,
  // average number of cookies purchased in each sale
  avgCookiesPerSale: 2.3,
  // hold current values for cookies needed at hour intervals in a day
  cookiesForGivenHour: [],
  // hold current value for total cookies needed for a day
  totalCookies: 0,
  // generate random number of customers for an hour slot, given min and max
  getRandomCustomers: function () {
    return randomNumber(this.minCustomersPerHour, this.maxCustomersPerHour);
  },
  // calculate whole-number of cookies needed for an hour interval, for entire day, and tallies day total
  getCookieSchedule: function () {
    let i = 0;
    for (i = 0; i < 14; i++) {
      this.cookiesForGivenHour[i] = Math.floor(this.getRandomCustomers() * this.avgCookiesPerSale);
      this.totalCookies = this.totalCookies + Math.floor(this.getRandomCustomers() * this.avgCookiesPerSale);
    }
  },
  // render content to HTML page
  renderSchedule: function () {
    // create h2 element
    let h2Tag = document.createElement('h2');
    // add context
    h2Tag.innerText = `${this.cityName}`;
    // add to DOM
    cityProfile.appendChild(h2Tag);

    // create ul element
    let ulTag = document.createElement('ul');
    // add to DOM
    cityProfile.appendChild(ulTag);

    // create hour labels
    let hourOfTheDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    // create li elements
    let i = 0;
    for (i = 0; i < 14; i++) {
      let liTag = document.createElement('li');
      // add context
      liTag.innerText = `${hourOfTheDay[i]}: ${this.cookiesForGivenHour[i]} cookies`;
      // add to DOM
      cityProfile.appendChild(liTag);
    }
    // create "Total" li element
    let liTag = document.createElement('li');
    // add context
    liTag.innerText = `Total: ${this.totalCookies} cookies`;
    // add to DOM
    cityProfile.appendChild(liTag);

    // create line break
    let brTag = document.createElement('br');
    // add to DOM
    cityProfile.appendChild(brTag);
  }
};

// generate random number of customers
paris.getRandomCustomers();
// generate schedule of estimated customers and needed cookies each hour for day
paris.getCookieSchedule();
// render the schedule to sales.html in unordered list
paris.renderSchedule();

// Lima object <><><><><><><><><><><><><><><><><><><><><><>
let lima = {
  cityName: 'Lima',
  // minimum number of customers each hour
  minCustomersPerHour: 2,
  // maximum number of customers each hour
  maxCustomersPerHour: 16,
  // average number of cookies purchased in each sale
  avgCookiesPerSale: 4.6,
  // hold current values for cookies needed at hour intervals in a day
  cookiesForGivenHour: [],
  // hold current value for total cookies needed for a day
  totalCookies: 0,
  // generate random number of customers for an hour slot, given min and max
  getRandomCustomers: function () {
    return randomNumber(this.minCustomersPerHour, this.maxCustomersPerHour);
  },
  // calculate whole-number of cookies needed for an hour interval, for entire day, and tallies day total
  getCookieSchedule: function () {
    let i = 0;
    for (i = 0; i < 14; i++) {
      this.cookiesForGivenHour[i] = Math.floor(this.getRandomCustomers() * this.avgCookiesPerSale);
      this.totalCookies = this.totalCookies + Math.floor(this.getRandomCustomers() * this.avgCookiesPerSale);
    }
  },
  // render content to HTML page
  renderSchedule: function () {
    // create h2 element
    let h2Tag = document.createElement('h2');
    // add context
    h2Tag.innerText = `${this.cityName}`;
    // add to DOM
    cityProfile.appendChild(h2Tag);

    // create ul element
    let ulTag = document.createElement('ul');
    // add to DOM
    cityProfile.appendChild(ulTag);

    // create hour labels
    let hourOfTheDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    // create li elements
    let i = 0;
    for (i = 0; i < 14; i++) {
      let liTag = document.createElement('li');
      // add context
      liTag.innerText = `${hourOfTheDay[i]}: ${this.cookiesForGivenHour[i]} cookies`;
      // add to DOM
      cityProfile.appendChild(liTag);
    }
    // create "Total" li element
    let liTag = document.createElement('li');
    // add context
    liTag.innerText = `Total: ${this.totalCookies} cookies`;
    // add to DOM
    cityProfile.appendChild(liTag);

    // create line break
    let brTag = document.createElement('br');
    // add to DOM
    cityProfile.appendChild(brTag);
  }
};

// generate random number of customers
lima.getRandomCustomers();
// generate schedule of estimated customers and needed cookies each hour for day
lima.getCookieSchedule();
// render the schedule to sales.html in unordered list
lima.renderSchedule();
