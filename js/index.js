// Get all share buttons
const shareButtons = document.querySelectorAll('.share-button');

// Add click event listener to each button
shareButtons.forEach(button => {
   button.addEventListener('click', () => {
      // Get the URL of the current page
      const url = window.location.href;

      // Get the social media platform from the button's class name
      const platform = button.classList[1];

      // Set the URL to share based on the social media platform
      let shareUrl;
      switch (platform) {
         case 'facebook':
         shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
         break;
         case 'whatsapp':
         shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
         break;
         case 'twitter':
         shareUrl = `https://twitter.com/share?url=${encodeURIComponent(url)}`;
         break;
         case 'linkedin':
         shareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}`;
         break;
         case 'pinterest':
         shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}`;
         break;
         case 'reddit':
         shareUrl = `https://reddit.com/submit?url=${encodeURIComponent(url)}`;
         break;
      }

      // Open a new window to share the URL
      window.open(shareUrl, '_blank');
   });
});