import { validateForm } from './js/validation';
import './style.scss';

const letsTalkButton = document.querySelector('.footer__header-button');
const modal = document.querySelector('.modal');
const modalSuccess = document.querySelector('.modal--success');
const modalSuccessButton = document.querySelector('.modal--success .modal__button');
const messageForm = document.querySelector('.form');

const validateError = {
  name: true,
  email: true,
};

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
  modalSuccessButton.addEventListener('click', closeSuccessModal);
  modalSuccess.addEventListener('click', (evt) => {
    if (evt.target.closest('.modal__inner')) {
      return;
    }

    closeSuccessModal();
  });
}

const showValidateErrors = (nameElement, emailElement) => {
  const nameError = nameElement.parentElement.querySelector('.form__field-error');
  const emailError = emailElement.parentElement.querySelector('.form__field-error');

  validateError.name
    ? nameError.classList.remove('form__field-error--hidden')
    : nameError.classList.add('form__field-error--hidden');
  validateError.email
    ? emailError.classList.remove('form__field-error--hidden')
    : emailError.classList.add('form__field-error--hidden');
};

const messageFormSubmitHandler = async (evt) => {
  evt.preventDefault();

  const { name: nameElement, email: emailElement, message: messageElement } = evt.target;
  const name = nameElement.value.trim();
  const email = emailElement.value.trim();
  const message = messageElement.value.trim();

  const isValid = validateForm(name, email, validateError);

  if (!isValid) {
    showValidateErrors(nameElement, emailElement);
    return;
  }

  try {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
  } catch {
    throw new Error('Ошибка отправки');
  }

  closeModal();
  openSuccessModal();
};

letsTalkButton.addEventListener('click', openFormModal);
messageForm.addEventListener('submit', messageFormSubmitHandler);
