const asideOpen = document.querySelector('.header__open-aside');
const asideClose = document.querySelector('.aside__close');
const asideMenu = document.querySelector('.aside');

const asideBlur = document.querySelector('.blur')

asideOpen.addEventListener('click', function () {
  asideMenu.classList.add('aside--active');
  asideBlur.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
});

asideClose.addEventListener('click', function () {
  asideMenu.classList.remove('aside--active');
  asideBlur.classList.add('hidden');
  document.body.style.overflow = '';
});

asideBlur.addEventListener('click', function () {
  asideMenu.classList.remove('aside--active');
  asideBlur.classList.add('hidden');
  document.body.style.overflow = '';
});