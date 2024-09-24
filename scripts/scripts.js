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

    // Update progress bar to highlight all passed steps, including the current one
    progressSteps.forEach((step, index) => {
      if (index <= stepIndex) {
        step.classList.add('active'); // Highlight passed and current steps
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

  // Function to generate the QR code
  function generateQRCode() {
    console.log('QR Code generation initiated'); // Debugging message

    // Get user input to include in the QR code
    const firstName = document.getElementById('firstName').value || 'First Name';
    const lastName = document.getElementById('lastName').value || 'Last Name';
    const email = document.getElementById('email').value || 'Email';

    // Combine the data to be encoded in the QR code
    const qrData = `Name: ${firstName} ${lastName}\nEmail: ${email}`;
    console.log('QR Code data:', qrData); // Debugging message

    // Clear the previous QR code if there is one
    document.getElementById('qrCodeContainer').innerHTML = '';

    // Generate the new QR code
    const qrcode = new QRCode(document.getElementById('qrCodeContainer'), {
      text: qrData,
      width: 128, // Width of the QR code
      height: 128, // Height of the QR code
    });

    console.log('QR Code generated'); // Debugging message

    // Show the QR Code section
    document.getElementById('qrCodeSection').style.display = 'block';
    console.log('QR Code section is now visible'); // Debugging message
  }

  // Handle form "submission" on the Submit button click
  const submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent actual form submission
    console.log('Submit button clicked'); // Debugging message
    generateQRCode(); // Generate the QR code on Submit
  });
});
