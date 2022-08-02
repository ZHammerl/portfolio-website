(function () {
  let form = document.querySelector('#contact-form');
  let emailInput = document.querySelector('#contact-email');
  let messageInput = document.querySelector('#contact-message');
  let nameInput = document.querySelector('#contact-name');



  function nameNotEmpty() {
    let value = nameInput.value;

    if (!value) {
      showErrorMessage(nameInput, 'Name is a required field.');
      return false;
    }

    showErrorMessage(emailInput, null);
    return true;
  }

  function messageNotEmpty() {
    let value = messageInput.value;

    if (!value) {
      showErrorMessage(messageInput, 'Message is a required field.');
      return false;
    }

    showErrorMessage(messageInput, null);
    return true;
  }
  function validateEmail() {
    let value = emailInput.value;

    if (!value) {
      showErrorMessage(emailInput, 'Email is a required field.');
      return false;
    }

    if (value.indexOf('@') <= 0 && value.indexOf('.') <= 0) {
      showErrorMessage(emailInput, 'Please enter a valid email address.');
      return false;
    }

    showErrorMessage(emailInput, null);
    return true;
  }

  function showErrorMessage(input, message) {
    let container = input.parentElement;

    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }

    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }
  function validateForm() {
    let isValidEmail = validateEmail();
    return isValidEmail;
  }
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Thank you for sending me a message. I"ll get back to you as quickly as possible.');
    }
  });

  nameInput.addEventListener('input', nameNotEmpty);
  emailInput.addEventListener('input', validateEmail);
  messageInput.addEventListener('input', messageNotEmpty);
})();
