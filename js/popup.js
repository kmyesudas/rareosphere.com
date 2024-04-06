window.addEventListener('scroll', function() {
    var scrollHeight = window.scrollY;
    var viewportHeight = window.innerHeight;
    var threshold = viewportHeight; // Adjust threshold as needed

    if (scrollHeight > threshold) {
        document.getElementById('popupFooter').classList.add('show');
    } else {
        document.getElementById('popupFooter').classList.remove('show');
    }
});

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function() {
    var smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

    for (var i = 0; i < smoothScrollLinks.length; i++) {
        smoothScrollLinks[i].addEventListener('click', function(e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                smoothScrollTo(targetElement, 500); // Adjust the duration here
            }
        });
    }
});



