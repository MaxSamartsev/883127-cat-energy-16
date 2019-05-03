var labelBefore = document.querySelector('.visualization__label--before');
var labelAfter = document.querySelector('.visualization__label--after');
var labelButton = document.querySelector('.visualization__label');
var inputBefore = document.querySelector('.visualization__input--before');

if (inputBefore.checked) {
  labelBefore.classList.add('visualization__label--active');}
  else (labelAfter.classList.add('visualization__label--active'));

labelBefore.addEventListener('click', function () {
  if (labelAfter.classList.contains('visualization__label--active')) {
    labelAfter.classList.remove('visualization__label--active');
    labelBefore.classList.add('visualization__label--active');
  }
});

labelAfter.addEventListener('click', function () {
  if (labelBefore.classList.contains('visualization__label--active')) {
    labelBefore.classList.remove('visualization__label--active');
    labelAfter.classList.add('visualization__label--active');
  }
});

