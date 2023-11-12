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