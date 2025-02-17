'use strict';

const Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

// Prototypes
Person.prototype.calcAge = function() {
  console.log(2003);
};

const Student = function(firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function() {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();


