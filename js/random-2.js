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

function displayRandomCards(productData) {
    const productContainer = document.getElementById('product-container-2');
    productContainer.innerHTML = '';

    const randomIndices = getRandomIndices(productData, 4);
    randomIndices.forEach(index => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = productData[index];
        productContainer.appendChild(card);
    });
}

// Fetch data from the remote server
fetch('https://rareosphere.com/database-2.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        // Assuming the response is in HTML format; adjust as needed
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const productCards = Array.from(doc.querySelectorAll('.product-card'));

        if (productCards.length === 0) {
            console.log('No product data found on the remote page.');
            return;
        }

        const productData = productCards.map(card => card.innerHTML);
        displayRandomCards(productData);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Refresh every 5 minutes
setInterval(() => {
    fetch('https://rareosphere.com/database-2.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // Assuming the response is in HTML format; adjust as needed
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const productCards = Array.from(doc.querySelectorAll('.product-card'));

            if (productCards.length === 0) {
                console.log('No product data found on the remote page.');
                return;
            }

            const productData = productCards.map(card => card.innerHTML);
            displayRandomCards(productData);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}, 3 * 60 * 1000);