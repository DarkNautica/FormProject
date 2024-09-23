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
        formSteps[currentStep].classList.remove('active'); // Hide the current step
        currentStep++; // Increment the step
        formSteps[currentStep].classList.add('active'); // Show the next step
        updateProgress();  // Update progress bar
      }
    });
  });

  // Function to go back to the previous step
  prevButtons.forEach(button => {
    button.addEventListener('click', () => {
      formSteps[currentStep].classList.remove('active'); // Hide the current step
      currentStep--; // Decrement the step
      formSteps[currentStep].classList.add('active'); // Show the previous step
      updateProgress();  // Update progress bar
    });
  });

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
