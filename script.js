'use strict';

class Account {

  locale = navigator.language; //Public fields
  bank = 'Bankist';
  #movements = []; // Private field!
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log('Acc open');
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  // Private method!
  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val))
      this.deposit(val);
  }
}
