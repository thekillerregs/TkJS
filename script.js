'use strict';

const Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

const jonas = new Person('Jonas', 1991);

console.log(jonas instanceof Person);

// Prototypes
Person.prototype.calcAge = function() {
  console.log(2003);
};

jonas.calcAge();

console.log(jonas.__prototype__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species);

console.log(jonas.hasOwnProperty('species'));
console.log(jonas.hasOwnProperty('firstName'));

// Declaration:
// const PersonCl = class { }

class PersonCl {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(this.birthYear);
  }
}