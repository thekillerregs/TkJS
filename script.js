'use strict';

class PersonCl {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(this.birthYear);
  }

  get latest() {
    return this.name.slice(-1).pop;
  }

  set latest(name) {
    this.name = name;
  }

  static hey() {
    console.log('OIIIIIIIII :3');
  }
}

class StudentCl extends PersonCl {
  constructor(name, birthYear, course) {
    super(name, birthYear);
    this.course = course;
  }

  introduce() {
    console.log('oii');
  }
}

const tk = new StudentCl('tk', 2003, 'law');

tk.introduce();
tk.calcAge();
