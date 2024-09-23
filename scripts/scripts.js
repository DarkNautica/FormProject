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
        formSteps[currentStep].classList.remove('active');
        progressSteps[currentStep].classList.remove('active');
        currentStep++;
        formSteps[currentStep].classList.add('active');
        progressSteps[currentStep].classList.add('active');
      }
    });
  });

  // Function to go back to the previous step
  prevButtons.forEach(button => {
    button.addEventListener('click', () => {
      formSteps[currentStep].classList.remove('active');
      progressSteps[currentStep].classList.remove('active');
      currentStep--;
      formSteps[currentStep].classList.add('active');
      progressSteps[currentStep].classList.add('active');
    });
  });

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
