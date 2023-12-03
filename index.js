let accordionButtons = document.querySelectorAll('.accordion-question');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    accordionButtons.forEach(otherButtons => {
      if (otherButtons != button) {
        const otherPlusIcon = otherButtons.querySelector('.plus-icon');
        const otherMinusIcon = otherButtons.querySelector('.minus-icon');
        const otherAnswers = otherButtons.nextElementSibling;

        otherPlusIcon.classList.remove('hide-icon');
        otherMinusIcon.classList.remove('show-icon');
        otherAnswers.classList.remove('show-answer');
      }
    });
    
    const plusIcon = button.querySelector('.plus-icon');
    const minusIcon = button.querySelector('.minus-icon');
    const answer = button.nextElementSibling;
    
    plusIcon.classList.toggle('hide-icon');
    minusIcon.classList.toggle('show-icon');
    answer.classList.toggle('show-answer');
  });
});