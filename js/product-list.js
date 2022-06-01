(function() {
    
    let products;
    let currencies;
    let rate = 1;


    function renderProducts() {
        const productsContainer = document.querySelector('.main-products__list');
        productsContainer.innerHTML = '';
        for (const product of products) {
            productsContainer.innerHTML += `
            <article class="product-card">
                <img class="product-card__image"
                src="${product.imgUrl}"
                alt="${product.name}"
                />
                <h3 class="product-card__h3">${product.name}</h3>
                <p class="product-card__description">
                ${product.description}
                </p>
                <div class="product-card__buttons">
                <button class="product-card__buttons-info button button-card">
                    Info
                </button>
                <button class="product-card__buttons-buy button button-card">
                    Buy - ${(product.price * rate).toFixed(2)}
                </button>
                </div>
            </article>
            `;
        }
    }

    async function loadProducts() {
        const response = await fetch('products.json');
        products = await response.json();
        renderProducts();
    }

    loadProducts();

    // function loadProductsXHR() {
    //     const xhr = new XMLHttpRequest();
    //     xhr.onreadystatechange = function() {
    //         if (xhr.readyState === 4 && xhr.status === 200) {
    //             const products = JSON.parse(xhr.responseText);
    //             renderProducts(products);
    //         }
    //     }
    //     xhr.open('GET', 'products.json', true);
    //     xhr.send();
    // }

    // loadProductsXHR();


    // fetch('products.json')
    //  .then( response => response.json() )
    //  .then( products => renderProducts(products) );

    async function convert() {
        if (!currencies) {
            const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
            currencies = await response.json();
        }
        const convertTo = document.querySelector('.currency').value;
        rate = currencies.rates[convertTo];
        renderProducts();
    }
    
    document.querySelector('.convert').addEventListener('click', convert);

})();