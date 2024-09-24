document.addEventListener('DOMContentLoaded', () => {
  const formSteps = document.querySelectorAll('.form-step');
  const nextButtons = document.querySelectorAll('.next-step');
  const prevButtons = document.querySelectorAll('.prev-step');
  let currentStep = 0;

  // Function to show the current step and hide the others
  function showStep(stepIndex) {
    formSteps.forEach((step, index) => {
      step.style.display = index === stepIndex ? 'block' : 'none';
    });
  }

  // Initial step display
  showStep(currentStep);

  // Move to the next step
  nextButtons.forEach(button => {
    button.addEventListener('click', () => {
      currentStep++;
      if (currentStep >= formSteps.length) {
        currentStep = formSteps.length - 1;
      }
      showStep(currentStep);
    });
  });

  // Move to the previous step
  prevButtons.forEach(button => {
    button.addEventListener('click', () => {
      currentStep--;
      if (currentStep < 0) {
        currentStep = 0;
      }
      showStep(currentStep);
    });
  });
});
