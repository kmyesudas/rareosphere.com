document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    
    // Fetch form values
    var name = document.getElementById('nameInput').value;
    var number = document.getElementById('numberInput').value;
    var email = document.getElementById('emailInput').value;
    var message = document.getElementById('messageInput').value;
    
    // Validate form inputs
    var nameWarning = document.getElementById('nameWarning');
    var numberWarning = document.getElementById('numberWarning');
    var emailWarning = document.getElementById('emailWarning');
    var messageWarning = document.getElementById('messageWarning');
    var isValid = true;
  
    if (!name) {
      nameWarning.textContent = 'Name is required';
      isValid = false;
    } else {
      nameWarning.textContent = ''; // Clear the warning message
    }
  
    if (!number) {
      numberWarning.textContent = 'Phone number is required';
      isValid = false;
    } else {
      numberWarning.textContent = ''; // Clear the warning message
    }
  
    if (!email) {
      emailWarning.textContent = 'Email is required';
      isValid = false;
    } else {
      emailWarning.textContent = ''; // Clear the warning message
    }
  
    if (!message) {
      messageWarning.textContent = 'Message is required';
      isValid = false;
    } else {
      messageWarning.textContent = ''; // Clear the warning message
    }
  
    if (!isValid) {
      return;
    }
  
    // Construct the email message
    var fullMessage = "Name: " + name + "\n";
    fullMessage += "Phone Number: " + number + "\n";
    fullMessage += "Email: " + email + "\n\n";
    fullMessage += "Message: \n" + message;
  
    // Send email using SMTPJS
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "rareosphere@gmail.com",
      Password : "D433A7C5161D3BD69A4A269BBEF2003FB445",
      To: 'rareosphere@gmail.com', // Change this to your recipient email address
      From: "rareosphere@gmail.com",
      Subject: 'New Contact Form Submission at Rareosphere',
      Body: fullMessage
    }).then(
      function () {
        // Send automatic reply message to the user
        sendAutoReply(email);
        // Redirect to thank-you page
        window.location.href = 'thank-you.html';
      },
      function (error) {
        // Show error popup
        showPopup('Message failed to send. Error: ' + error, 'error');
      }
    );
  });
  
      // Function to send automatic reply message to the user
function sendAutoReply(email) {
    // Construct the auto-reply email content
    var autoReplyMessage = `
      <html>
      <head>
        <style>
          /* Add your styles here */
          .container {
            text-align: center;
          }
          .logo {
            width: 70%;
          }
          .button {
            display: inline-block;
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <img src="https://rareosphere.com/assets/rareosphere-logo.png" alt="Rareosphere Logo" class="logo">
          <h1>Thank you for contacting us!</h1>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <a href="https://rareosphere.com/?utm_source=mail-cta" class="button">Visit Our Website</a>
        </div>
      </body>
      </html>
    `;
  
    // Send the auto-reply email
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "rareosphere@gmail.com",
      Password: "D433A7C5161D3BD69A4A269BBEF2003FB445",
      To: email,
      From: 'Rareosphere <rareosphere@gmail.com>', // Change this to your email address
      Subject: 'Thank You For Contacting Rareosphere - Smart Daily Essentials',
      Body: autoReplyMessage,
      ContentType: "text/html"
    });
  }
  
  // Function to show popup message above the submit button
  function showPopup(message, type) {
    var popup = document.createElement('div');
    popup.classList.add('popup', 'popup-' + type);
    popup.textContent = message;
    document.body.appendChild(popup);
    // Hide popup after 5 seconds
    setTimeout(function () {
      popup.style.opacity = '0';
      setTimeout(function () {
        document.body.removeChild(popup);
      }, 1000);
    }, 5000);
  }
  
  // Function to hide warning messages when input is detected
  function hideWarningMessage(inputElement, warningElement) {
    inputElement.addEventListener('input', function () {
      warningElement.textContent = ''; // Clear the warning message when input is detected
    });
  }
  
  // Hide warning messages for all input fields
  hideWarningMessage(document.getElementById('nameInput'), document.getElementById('nameWarning'));
  hideWarningMessage(document.getElementById('numberInput'), document.getElementById('numberWarning'));
  hideWarningMessage(document.getElementById('emailInput'), document.getElementById('emailWarning'));
  hideWarningMessage(document.getElementById('messageInput'), document.getElementById('messageWarning'));