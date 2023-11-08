
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