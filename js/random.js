function getRandomIndices(array, count) {
    const indices = [];
    while (indices.length < count) {
        const database = Math.floor(Math.random() * array.length);
        if (!indices.includes(database)) {
            indices.push(database);
        }
    }
    return indices;
}

function displayRandomCards() {
    const productData = JSON.parse(localStorage.getItem('productData'));
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    const randomIndices = getRandomIndices(productData, 4);
    randomIndices.forEach(database => {
        const card = document.createElement('div');
        card.className = 'product-card-random';
        card.innerHTML = productData[database];
        productContainer.appendChild(card);
    });
}

// Initial display
displayRandomCards();

// Refresh every 5 minutes
setInterval(() => {
    displayRandomCards();
}, 2 * 60 * 1000);