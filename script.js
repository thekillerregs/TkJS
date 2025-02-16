'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const nav = document.querySelector('.nav');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const header = document.querySelector('.header');

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

// Page Navigation
document.querySelector('.nav__links').addEventListener('click', function(e) {
    e.preventDefault();

    if (!e.target.classList.contains('nav__link'))
      return;

    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
);

// Tabbed Component

tabsContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(tc => tc.classList.remove('operations__content--active'));
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function(e) {
  const target = e.target;

  if (!target.classList.contains('nav__link'))
    return;

  const siblings = target.closest('.nav').querySelectorAll('.nav__link');
  const logo = target.closest('.nav').querySelector('.img');

  siblings.forEach(el => {
    if (el !== target) el.style.opacity = this;
  });
  logo.style.opacity = this;
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries) {
  const [entry] = entries;

  if (!entry.isIntersecting)
    nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(
  stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px` // Only supports pixels unit
  }
);
headerObserver.observe(header);

// Cookie ok check
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.append(message);

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.parentElement.removeChild(message);
});

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

btnScrollTo.addEventListener('click', (e) =>
  section1.scrollIntoView({ behavior: 'smooth' })
);