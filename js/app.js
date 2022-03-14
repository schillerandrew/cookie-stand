function randomNumber(min, max){
  // grabbed from MDN documentation
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let Seattle = {
  cityName: Seattle;
  // ^ minimum number of customers each hour
  minCustomersPerHour: 23,
  // ^ maximum number of customers each hour
  maxCustomersPerHour: 65,
  // ^ average number of cookies purchased in each sale
  avgCookiePerSale: 6.3,
  // ^ holds current values for cookies needed at hour intervals in a day
  cookieSchedule: [''],
  // ^ holds current value for total cookies needed for a day
  totalCookies: 0,
  getRandomCustomers: function(){
    // ^ generates random number of customers for an hour slot, given min and max
    return randomNumber(23, 65);
  },
  getCookieSchedule: function(){
    // ^ calculates whole-number of cookies needed for an hour interval, for entire day, and tallies day total
    let i = 0;
    for (i = 0; i < 14; i++) {
      this.cookieSchedule = Math.floor(this.getCustomers * 6.3)[i];
      this.totalCookies = this.totalCookies + Math.floor(this.getCustomers * 6.3);
    }
  }
  renderSchedule: function(){
    let sectionTag = document.createElement('section');
    // creates section element
    cityProfile.appendChild(sectionTag);

    let h2Tag = document.createElement('h2');
    // creates h2 element
    h2Tag.innerText = this.cityName;
    // adds context


  }
}
