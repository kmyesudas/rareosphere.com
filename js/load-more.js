document.addEventListener("DOMContentLoaded", function () {
    const productsPerPage = 12;
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
