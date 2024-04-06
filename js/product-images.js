document.addEventListener("DOMContentLoaded", function() {
    const smallImages = document.querySelectorAll('.small-image');
    const mainImage = document.getElementById('mainImage');
  
    smallImages.forEach(function(smallImage) {
      smallImage.addEventListener('mouseenter', function() {
        const src = smallImage.getAttribute('src');
        mainImage.setAttribute('src', src);
      });
    });
  });
  