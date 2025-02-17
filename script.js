'use strict';

const PersonProto = {
  calcAge() {
    console.log(2037);
  },

  init(firstName) {
    this.firstName = firstName;
  }
};

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, course) {
  PersonProto.init.call(this, firstName);
  this.course = course;
};

const tk2 = Object.create(StudentProto);
tk2.init('tk', 'law');