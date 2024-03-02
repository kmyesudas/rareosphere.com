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

