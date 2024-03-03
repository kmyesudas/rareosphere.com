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

