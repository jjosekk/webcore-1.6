const modalFeedbackOpen  = document.querySelector('.aside__message-btn')
const modalFeedbackClose = document.querySelector('.modal__close--feedback')
const modalFeedback = document.querySelector('.modal--feedback')
const headerFeedbackButton  = document.querySelector('.header__message-btn');

const modalPhoneOpen  = document.querySelector('.aside__phone-btn')
const modalPhoneClose = document.querySelector('.modal__close--phone')
const modalPhone = document.querySelector('.modal--phone')
const headerCallButton = document.querySelector('.header__phone-btn');

const contentBlur = document.querySelector('.modal__blur');

  const openModalChat = () => {
    modalFeedback.classList.remove('hidden');
    contentBlur.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  headerFeedbackButton.addEventListener('click', openModalChat);
  modalFeedbackOpen.addEventListener('click', openModalChat);

  const closeModalChat = () => {
    modalFeedback.classList.add('hidden');
    contentBlur.classList.add('hidden');
    document.body.style.overflow = '';
  }

  modalFeedbackClose.addEventListener('click', closeModalChat);

  const openModalCall = () => {
    modalPhone.classList.remove('hidden');
    contentBlur.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  headerCallButton.addEventListener('click', openModalCall);
  modalPhoneOpen.addEventListener('click', openModalCall);

  const closeModalCall = () => {
    modalPhone.classList.add('hidden');
    contentBlur.classList.add('hidden');
    document.body.style.overflow = '';
  }

  modalPhoneClose.addEventListener('click', closeModalCall);

  contentBlur.addEventListener('click', function () {
    modalFeedback.classList.add('hidden');
    modalPhone.classList.add('hidden');
    contentBlur.classList.add('hidden');
    document.body.style.overflow = '';
  });