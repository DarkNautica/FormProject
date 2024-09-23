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
        formSteps[currentStep].classList.remove('active', 'slide-in'); // Remove previous active and animation class
        formSteps[currentStep].classList.add('slide-out'); // Add slide-out animation
        currentStep++; // Increment the step
        formSteps[currentStep].classList.remove('slide-out'); // Remove any slide-out from previous transitions
        formSteps[currentStep].classList.add('active', 'slide-in'); // Show the next step with slide-in animation
        updateProgress();  // Update progress bar
      }
    });
  });

  // Function to go back to the previous step
  prevButtons.forEach(button => {
    button.addEventListener('click', () => {
      formSteps[currentStep].classList.remove('active', 'slide-in'); // Remove previous active and animation class
      formSteps[currentStep].classList.add('slide-out-reverse'); // Add reverse slide-out animation
      currentStep--; // Decrement the step
      formSteps[currentStep].classList.remove('slide-out-reverse'); // Remove reverse slide-out from previous transitions
      formSteps[currentStep].classList.add('active', 'slide-in-reverse'); // Show the previous step with slide-in-reverse animation
      updateProgress();  // Update progress bar
    });
  });

  // Update progress bar (highlight active steps)
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
