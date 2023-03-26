'use strict';
//Setting Variables
const modal = document.querySelector('.modal');
const close = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const showModalButtons = document.querySelectorAll('.show-modal');

//Show Modal Function
const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Hide Modal Function
const hideModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//function for showing modal with buttons
showModalButtons.forEach((button) =>
  button.addEventListener('click', function () {
    showModal();
  })
);

//function for hiding modal
close.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideModal();
  }
});
