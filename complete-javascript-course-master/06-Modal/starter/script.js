'use strict';

const modal = document.querySelector('.modal');
const showModalBtns = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < showModalBtns.length; i++)
  showModalBtns[i].addEventListener('click', function () {
    console.log(`button clicked n:  ${i}`);
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

const closeTheModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModal.addEventListener('click', close);
overlay.addEventListener('click', close);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')){ 
        closeTheModal();
        // console.log('Pressed');
  }}
});
