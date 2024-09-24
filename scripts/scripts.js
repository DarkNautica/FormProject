document.addEventListener('DOMContentLoaded', () => {
  const formSteps = document.querySelectorAll('.form-step'); // Get all form steps
  const nextButtons = document.querySelectorAll('.next-step'); // Get all Next buttons
  const progressSteps = document.querySelectorAll('.progress-step'); // Get all progress steps
  let currentStep = 0; // Keep track of the current step

  // Function to show the current step and hide the others
  function showStep(stepIndex) {
    formSteps.forEach((step, index) => {
      if (index === stepIndex) {
        step.classList.add('active'); // Show current step
      } else {
        step.classList.remove('active'); // Hide other steps
      }
    });

    // Update progress bar
    progressSteps.forEach((step, index) => {
      if (index <= stepIndex) {
        step.classList.add('active'); // Highlight steps up to the current one
      } else {
        step.classList.remove('active'); // Remove highlight from future steps
      }
    });
  }

  // Initial step display
  showStep(currentStep);

  // Move to the next step
  nextButtons.forEach(button => {
    button.addEventListener('click', () => {
      currentStep++;
      if (currentStep >= formSteps.length) {
        currentStep = formSteps.length - 1; // Prevent going past the last step
      }
      showStep(currentStep); // Show the next step
    });
  });
});
