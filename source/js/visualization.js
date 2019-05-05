var visualBlock = document.querySelector('.visualization__wrapper');

visualBlock.classList.add('visualization__wrapper--before');

var labelBefore = document.querySelector('.visualization__label--before');
var labelAfter = document.querySelector('.visualization__label--after');

labelAfter.addEventListener('click', function () {
  if (visualBlock.classList.contains('visualization__wrapper--before')) {
    visualBlock.classList.remove('visualization__wrapper--before');
    visualBlock.classList.add('visualization__wrapper--after');
  }
});

labelBefore.addEventListener('click', function () {
  if (visualBlock.classList.contains('visualization__wrapper--after')) {
    visualBlock.classList.remove('visualization__wrapper--after');
    visualBlock.classList.add('visualization__wrapper--before');
  }
});

