document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('multiStepForm');
  const nextButtons = document.querySelectorAll('.next-step');
  const prevButtons = document.querySelectorAll('.prev-step');
  const formSteps = document.querySelectorAll('.form-step');
  const progressSteps = document.querySelectorAll('.progress-step');
  let currentStep = 0;

  nextButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (validateStep(currentStep)) {
        formSteps[currentStep].classList.remove('active');
        progressSteps[currentStep].classList.remove('active');
        currentStep++;
        formSteps[currentStep].classList.add('active');
        progressSteps[currentStep].classList.add('active');
        updateReview();
      }
    });
  });

  prevButtons.forEach(button => {
    button.addEventListener('click', () => {
      formSteps[currentStep].classList.remove('active');
      progressSteps[currentStep].classList.remove('active');
      currentStep--;
      formSteps[currentStep].classList.add('active');
      progressSteps[currentStep].classList.add('active');
    });
  });

  function validateStep(step) {
    const inputs = formSteps[step].querySelectorAll('input');
    let valid = true;
    inputs.forEach(input => {
      if (!input.checkValidity()) {
        valid = false;
        input.reportValidity();
      }
    });
    return valid;
  }

  function updateReview() {
    document.getElementById('reviewName').textContent = document.getElementById('firstName').value;
    document.getElementById('reviewEmail').textContent = document.getElementById('email').value;
    document.getElementById('reviewAddress').textContent = document.getElementById('address').value;
    document.getElementById('reviewCity').textContent = document.getElementById('city').value;
  }
});
