function getRandomIndices(array, count) {
    const indices = [];
    while (indices.length < count) {
        const index = Math.floor(Math.random() * array.length);
        if (!indices.includes(index)) {
            indices.push(index);
        }
    }
    return indices;
}

function displayRandomCards() {
    // Retrieve product data from local storage
    const productData = JSON.parse(localStorage.getItem('productData'));

    if (!productData) {
        console.log('No product data found in local storage.');
        return;
    }

    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    const randomIndices = getRandomIndices(productData, 4);
    randomIndices.forEach(index => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = productData[index];
        productContainer.appendChild(card);
    });
}

// Initial display
displayRandomCards();

// Refresh every 5 minutes
setInterval(() => {
    displayRandomCards();
}, 5 * 60 * 1000);