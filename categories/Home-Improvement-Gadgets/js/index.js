// Function to open a new window for sharing on Facebook
function shareOnFacebook() {
    var url = encodeURIComponent(window.location.href);
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, 'Share on Facebook');
}

// Function to share on Twitter
function shareOnTwitter() {
    var url = encodeURIComponent(window.location.href);
    var text = encodeURIComponent('Check out this awesome website!');
    window.open('https://twitter.com/intent/tweet?url=' + url + '&text=' + text, 'Share on Twitter');
}

// Function to share on LinkedIn
function shareOnLinkedIn() {
    var url = encodeURIComponent(window.location.href);
    var title = encodeURIComponent('Your Website Title');
    var summary = encodeURIComponent('Description of your website');
    window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + url + '&title=' + title + '&summary=' + summary, 'Share on LinkedIn');
}

// Function to share on WhatsApp
function shareOnWhatsApp() {
    var url = encodeURIComponent(window.location.href);
    window.open('https://api.whatsapp.com/send?text=' + url, 'Share on WhatsApp');
}

// Function to share on Telegram
function shareOnTelegram() {
    var url = encodeURIComponent(window.location.href);
    window.open('https://t.me/share/url?url=' + url, 'Share on Telegram');
}

// Function to share on Pinterest
function shareOnPinterest() {
    var url = encodeURIComponent(window.location.href);
    var image = encodeURIComponent('URL_TO_YOUR_IMAGE');
    var description = encodeURIComponent('Description of your image');
    window.open('https://www.pinterest.com/pin/create/button/?url=' + url + '&media=' + image + '&description=' + description, 'Share on Pinterest');
}

// Function to share on Reddit
// function shareOnReddit() {
//     var url = encodeURIComponent(window.location.href);
//     var title = encodeURIComponent('Your Reddit Title');
//     window.open('https://www.reddit.com/submit?url=' + url + '&title=' + title, 'Share on Reddit', 'width=600, height=400');
// }

// Function to copy the current page URL to the clipboard
function copyToClipboard() {
    var url = document.location.href;
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = url;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert("URL Copied Share It Now");
}

// Attach click event handlers to the share buttons and copy button
document.getElementById('facebook-share').addEventListener('click', shareOnFacebook);
document.getElementById('twitter-share').addEventListener('click', shareOnTwitter);
document.getElementById('linkedin-share').addEventListener('click', shareOnLinkedIn);
document.getElementById('whatsapp-share').addEventListener('click', shareOnWhatsApp);
document.getElementById('telegram-share').addEventListener('click', shareOnTelegram);
document.getElementById('pinterest-share').addEventListener('click', shareOnPinterest);
// document.getElementById('reddit-share').addEventListener('click', shareOnReddit);
document.getElementById('copy-to-clipboard').addEventListener('click', copyToClipboard);



const searchInput = document.getElementById('search-input');
    // const searchButton = document.getElementById('search-button');
    const productCards = document.querySelectorAll('.product-card-search');
    const noResultsMessage = document.getElementById('no-results-message');
    const emptySearchWarning = document.getElementById('empty-search-warning');

    function performSearch() {
            const searchTerm = searchInput.value.toLowerCase();
            let noResults = true;

            if (!searchTerm) {
                emptySearchWarning.style.display = 'block';
                noResultsMessage.style.display = 'none';

                // Hide all product cards when the search input is empty
                productCards.forEach((card) => {
                    card.style.display = 'none';
                });
            } else {
                emptySearchWarning.style.display = 'none';

                productCards.forEach((card) => {
                    const productName = card.textContent.toLowerCase();
                    if (productName.includes(searchTerm)) {
                        card.style.display = 'block';
                        noResults = false;
                    } else {
                        card.style.display = 'none';
                    }
                });

                if (noResults) {
                    noResultsMessage.style.display = 'block';
                } else {
                    noResultsMessage.style.display = 'none';
                }
            }
        }

        // searchButton.addEventListener('click', performSearch);

        searchInput.addEventListener('input', performSearch);

        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                performSearch();
            }
        });