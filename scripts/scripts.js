document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('multiStepForm');
  const nextButtons = document.querySelectorAll('.next-step');
  const prevButtons = document.querySelectorAll('.prev-step');
  const formSteps = document.querySelectorAll('.form-step');
  const progressSteps = document.querySelectorAll('.progress-step');
  let currentStep = 0;

  // Function to go to the next step
  nextButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (validateStep(currentStep)) {
        animateStep(currentStep, currentStep + 1); // Animate to next step
        currentStep++;
        updateProgress();  // Update progress bar after moving to the next step
      }
    });
  });

  // Function to go back to the previous step
  prevButtons.forEach(button => {
    button.addEventListener('click', () => {
      animateStep(currentStep, currentStep - 1); // Animate to previous step
      currentStep--;
      updateProgress();  // Update progress bar after moving to the previous step
    });
  });

  // Animation for step transition
  function animateStep(current, next) {
    formSteps[current].classList.remove('active');
    formSteps[current].style.animation = 'slideOut 0.5s forwards';
    
    formSteps[next].classList.add('active');
    formSteps[next].style.animation = 'slideIn 0.5s forwards';
  }

  // Update progress bar (fix for highlighting active step in green)
  function updateProgress() {
    progressSteps.forEach((step, index) => {
      if (index <= currentStep) {
        step.classList.add('active');  // Highlight the current step and previous ones
      } else {
        step.classList.remove('active');  // Remove highlight from future steps
      }
    });
  }

  // Validate the current step's inputs
  function validateStep(step) {
    const inputs = formSteps[step].querySelectorAll('input');
    let valid = true;
    inputs.forEach(input => {
      if (!input.checkValidity()) {
        valid = false;
        input.reportValidity(); // Show validation error
      }
    });
    return valid;
  }
});
