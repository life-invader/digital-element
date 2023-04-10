import { validateForm } from './js/validation';
import './style.scss';

const letsTalkButton = document.querySelector('.footer__header-button');
const modal = document.querySelector('.modal');
const modalSuccess = document.querySelector('.modal--success');
const messageForm = document.querySelector('.form');

function openFormModal() {
  modal.classList.remove('modal--close');
  modal.addEventListener('click', (evt) => {
    if (evt.target.closest('.modal__inner')) {
      return;
    }

    closeModal();
  });
}

function closeModal() {
  modal.classList.add('modal--close');
}

function closeSuccessModal() {
  modalSuccess.classList.add('modal--close');
}

function openSuccessModal() {
  modalSuccess.classList.remove('modal--close');
  modalSuccess.addEventListener('click', (evt) => {
    if (evt.target.closest('.modal__inner')) {
      return;
    }

    closeSuccessModal();
  });
}

const messageFormSubmitHandler = async (evt) => {
  evt.preventDefault();
  const { name, email, message } = evt.target;

  const isValid = validateForm(name.value.trim(), email.value.trim());

  if (!isValid) {
    return;
  }

  const result = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name.value.trim(),
      email: email.value.trim(),
      message: message.value.trim(),
    }),
  });
  const data = await result.json();
  console.log(data);

  closeModal();
  openSuccessModal();
};

letsTalkButton.addEventListener('click', openFormModal);
messageForm.addEventListener('submit', messageFormSubmitHandler);
