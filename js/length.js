// product description shortern 

document.addEventListener("DOMContentLoaded", function() {
  var blogTitles = document.querySelectorAll('.blog-description');
  var maxCharacters = 200; // Adjust the maximum number of characters as needed

  blogTitles.forEach(function(titleElement) {
    var titleText = titleElement.textContent;

    if (titleText.length > maxCharacters) {
      titleElement.textContent = titleText.substring(0, maxCharacters) + '[...]';
    }
  });
});