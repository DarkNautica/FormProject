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
        updateProgress();
      }
    });
  });

  // Function to go back to the previous step
  prevButtons.forEach(button => {
    button.addEventListener('click', () => {
      animateStep(currentStep, currentStep - 1); // Animate to previous step
      currentStep--;
      updateProgress();
    });
  });

  // Animation for step transition
  function animateStep(current, next) {
    // Remove active class from current step and start sliding out
    formSteps[current].classList.remove('active');
    formSteps[current].style.animation = 'slideOut 0.5s forwards';
    
    // Add active class to the next step and start sliding in
    formSteps[next].classList.add('active');
    formSteps[next].style.animation = 'slideIn 0.5s forwards';
  }

  // Update progress bar
  function updateProgress() {
    progressSteps.forEach((step, index) => {
      if (index <= currentStep) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
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
