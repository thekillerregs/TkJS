'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function(e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Selecting Stuff
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');

const allSections = document.querySelectorAll('.selection');
console.log(allSections);

const byId = document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent = 'We use cookies for improved functionality and analytics.'
message.innerHTML = 'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// Element moves, doesn't stay at two places at the same time.
//header.prepend(message);
header.append(message);
//header.append(message.cloneNode(true));

//header.before(message);
//header.after(message);

// Deleting elements
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  // message.remove();
  message.parentElement.removeChild(message);
});