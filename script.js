'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  }
};

lufthansa.book(239, 'Tk');
lufthansa.book(635, 'Kt');

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: []
};

const book = lufthansa.book;

// Call method
book.call(eurowings, 23, 'Tk');
console.log(eurowings);

// Apply Method (replaced by call(this, ...data)
const flightData = [583, 'George Cooper'];
book.apply(eurowings, flightData);

// Bind method
const bookEW = book.bind(eurowings);
bookEW(23, 'Steven Williams');

// Binding args
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Tkzudo');

lufthansa.planes = 300;
lufthansa.buyPlane = function() {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
