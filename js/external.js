document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        const url = new URL(link.href, window.location.href);
        if (url.hostname !== window.location.hostname) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});