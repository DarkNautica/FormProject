document.addEventListener('DOMContentLoaded', () => {
      console.log('JavaScript is loaded'); // Debugging message

      const formSteps = document.querySelectorAll('.form-step');
      const nextButtons = document.querySelectorAll('.next-step');
      const progressSteps = document.querySelectorAll('.progress-step');
      let currentStep = 0;

      function showStep(stepIndex) {
        formSteps.forEach((step, index) => {
          if (index === stepIndex) {
            step.classList.add('active');
          } else {
            step.classList.remove('active');
          }
        });

        progressSteps.forEach((step, index) => {
          if (index <= stepIndex) {
            step.classList.add('active');
          } else {
            step.classList.remove('active');
          }
        });
      }

      showStep(currentStep);

      nextButtons.forEach(button => {
        button.addEventListener('click', () => {
          currentStep++;
          if (currentStep >= formSteps.length) {
            currentStep = formSteps.length - 1;
          }
          showStep(currentStep);
        });
      });

      function generateQRCode() {
        console.log('QR Code generation initiated');

        const firstName = document.getElementById('firstName').value || 'First Name';
        const lastName = document.getElementById('lastName').value || 'Last Name';
        const email = document.getElementById('email').value || 'Email';

        const qrData = `Name: ${firstName} ${lastName}\nEmail: ${email}`;
        console.log('QR Code data:', qrData);

        document.getElementById('qrCodeContainer').innerHTML = '';

        const qrcode = new QRCode(document.getElementById('qrCodeContainer'), {
          text: qrData,
          width: 128,
          height: 128,
        });

        document.getElementById('qrCodeSection').style.display = 'block';
        console.log('QR Code section is now visible');
      }

      const submitButton = document.getElementById('submitButton');
      submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Submit button clicked');
        generateQRCode();
      });

      // Redirect to signup.html on Create Account click
      document.querySelector('.create-account').addEventListener('click', function() {
        window.location.href = 'https://DarkNautica.github.io/FormProject/signup.html';
      });
    });
