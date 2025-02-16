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
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

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

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// We can only log styles we've set ourselves
console.log(message.style.height);
console.log(message.style.backgroundColor);

// Now it works
console.log(getComputedStyle(message).height);

// Setting css variables
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
// JavaScript automatically adds the properties that are supposed to be on the specific type of element, mannualy added ones won't be retrieved
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);

logo.alt = 'Beautiful minimalist logo';

// Retrieving custom attribute from DOM
console.log(logo.getAttribute('designer'));

console.log(logo.src);
// logo.src points to absolute URL, get path this way:
logo.getAttribute('src');

const link = document.querySelector('.nav__link--btn');

// Absolute vs Path
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes (insert attribute that starts with "data" in the HTML), dash -> camelcase
console.log(logo.dataset.versionNumber);

/* Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');
Don't use
logo.className = 'a'
*/

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', (e) => {
  const s1coords = section1.getBoundingClientRect();

  /* Old way
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth'
  });
   */

  // Modern Way
  section1.scrollIntoView({ behavior: 'smooth' });
});

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', (e) => {
  console.log('Link');
  //e.stopPropagation();
  // "true" setting enables listening in capturing phase
}, true);


