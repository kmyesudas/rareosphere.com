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
    }
  
    if (!number) {
      numberWarning.textContent = 'Phone number is required';
      isValid = false;
    }
  
    if (!email) {
      emailWarning.textContent = 'Email is required';
      isValid = false;
    }
  
    if (!message) {
      messageWarning.textContent = 'Message is required';
      isValid = false;
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
      Subject: 'Contact Form Submission',
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
    var autoReplyMessage = "Thank you for contacting Rareosphere - Smart Daily Essentials! We have received your message and will get back to you as soon as possible.";
    
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "rareosphere@gmail.com",
      Password : "D433A7C5161D3BD69A4A269BBEF2003FB445",
      To: email,
      From: 'rareosphere@gmail.com', // Change this to your email address
      Subject: 'Automatic Reply: Contact Form Submission',
      Body: autoReplyMessage
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