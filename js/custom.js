// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// header show and hide
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll down
    header.style.top = `-${header.offsetHeight}px`;
  } else {
    // Scroll up
    header.style.top = '0';
  }

  lastScrollTop = scrollTop;
});

 // Function to translate the page using Google Translate API
 function translatePage() {
  var languageSelect = document.getElementById('language-select');
  var selectedLanguage = languageSelect.value;

  // Invoke Google Translate API to translate the content
  googleTranslateElementInit(selectedLanguage);
}

// Callback function for Google Translate API
function googleTranslateElementInit(selectedLanguage) {
  new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: selectedLanguage}, 'google_translate_element');
}

//function to hide video controls

const video = document.getElementById('myVideo');

// Prevent the context menu from showing on right-click
video.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

// Prevent unmuted audio when the video is clicked
video.addEventListener('click', function(event) {
  if (!video.muted) {
    event.preventDefault(); // Prevent the default behavior
    video.muted = true; // Ensure the video stays muted
  }
});

// product description shortern 

document.addEventListener("DOMContentLoaded", function() {
  var blogTitles = document.querySelectorAll('.blog-description');
  var maxLetters = 150; // Adjust the maximum number of letters as needed

  blogTitles.forEach(function(titleElement) {
    var titleText = titleElement.textContent;

    if (titleText.length > maxLetters) {
      titleElement.textContent = titleText.substring(0, maxLetters) + '[...]';
    }
  });
});


