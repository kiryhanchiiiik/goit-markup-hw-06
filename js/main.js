const modalWin = document.querySelector('.modal-div');
const burgerBtn = document.querySelector('.header-burger');
const modalBtn = document.querySelector('.btn-modal');
const heroBtn = document.querySelector('.buttonn');
burgerBtn.addEventListener('click', () => {
  modalWin.classList.add('is-open');
});

modalBtn.addEventListener('click', () => {
  modalWin.classList.remove('is-open');
});
heroBtn.addEventListener('click', () => {
  modalWin.classList.add('is-open');
});
