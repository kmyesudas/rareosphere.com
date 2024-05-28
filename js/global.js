$(function(){
    $("#header-placeholder").load("header.html"); // Load header content
    $("#footer-placeholder").load("footer.html"); // Load footer content
    $("#header-tags").load("header-tags.html"); // Load header tags content
});

document.addEventListener("DOMContentLoaded", function () {
    const productsPerPage = 16;
    let currentPage = 1;

    const productCards = document.querySelectorAll(".product-card-main");
    const loadMoreButton = document.getElementById("load-more-button");

    function showProducts() {
        const totalProducts = productCards.length;
        const totalToShow = currentPage * productsPerPage;

        for (let i = 0; i < totalToShow && i < totalProducts; i++) {
            productCards[i].style.display = "block";
        }

        if (totalToShow >= totalProducts) {
            loadMoreButton.style.display = "none";
        }
    }

    loadMoreButton.addEventListener("click", function () {
        currentPage++;
        showProducts();
    });

    // Initial load
    showProducts();
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        const url = new URL(link.href, window.location.href);
        if (url.hostname !== window.location.hostname) {
            link.setAttribute('rel', 'noopener noreferrer,nofollow');
        }
    });
});