
const form = document.getElementById('generator-form');
const minimumInput = document.getElementById('minimum');
const maximumInput = document.getElementById('maximum');
const result = document.getElementById('result');
const errorMessage = document.getElementById('error-message');
const restartButton = document.getElementById('restart');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const minText = minimumInput.value.trim();
  const maxText = maximumInput.value.trim();

  const min = Number(minText);
  const max = Number(maxText);

  errorMessage.textContent = '';
  result.textContent = '?';

  if (minText === '' || maxText === '') {
    errorMessage.textContent = 'Please enter both numbers!';
    return;
  }

  if (!Number.isSafeInteger(min) ||
      !Number.isSafeInteger(max)) {
    errorMessage.textContent =
      'Please enter valid whole numbers.';
    return;
  }

  if (min > max) {
    errorMessage.textContent =
      'Minimum must be less than or equal to maximum!';
    return;
  }

  if (max - min + 1 > Number.MAX_SAFE_INTEGER) {
    errorMessage.textContent =
      'This range is too large. Please choose a smaller one.';
    return;
  }

  const randomNumber =
    Math.floor(Math.random() * (max - min + 1)) + min;

  result.textContent = randomNumber;
});

restartButton.addEventListener('click', function () {
  form.reset();
  result.textContent = '?';
  errorMessage.textContent = '';
});