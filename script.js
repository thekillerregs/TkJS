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

// Sets

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log(ordersSet);

ordersSet.clear();

for (const order of ordersSet) console.log(order);

// ES 2025 Methods

// Elements that are present in both Sets
const commonFoods = italianFoods.intersection(mexicanFoods);

// Elements of both sets
const allFoods = italianFoods.union(mexicanFoods);

// Removes elements common to both sets
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);

// Only elements that are EXCLUSIVE to their own Set.
const uniqueFoods = italianFoods.symmetricDifference(mexicanFoods);
