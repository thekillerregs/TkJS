'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.slice(4));

console.log(airline.slice(4, 7));

console.log(airline.slice(4, -1));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

airline.trim();

const priceGB = '288,97E';
const priceUS = priceGB.replace('E', '$');

const heyHey = 'Hey Hey!';
const hiHey = heyHey.replace('Hey', 'Hi');
const hiHi = heyHey.replaceAll('Hey', 'Hi');
const hiHi2 = heyHey.replace(/Hey/g, 'Hi');

//startsWith, endsWith, includes, split, join, padStart, padEnd, repeat
