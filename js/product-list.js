(function() {
    const productsJson = `
      [
          {
              "id": "1",
              "name": "Baby Yoda",
              "description": "Some description",
              "price": 10.99,
              "imgUrl": "img/baby-yoda.svg"
          },
          {
              "id": "2",
              "name": "Banana",
              "description": "Some description",
              "price": 9.99,
              "imgUrl": "img/banana.svg"
          },
          {
              "id": "3",
              "name": "Girl",
              "description": "Some description",
              "price": 12.99,
              "imgUrl": "img/girl.svg"
          },
          {
              "id": "4",
              "name": "Viking",
              "description": "Some description",
              "price": 11.99,
              "imgUrl": "img/viking.svg"
          }
      ]
    `;

    function renderProducts(products) {
        const productsContainer = document.querySelector('.main-products__list');
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
                    Buy - ${product.price}
                </button>
                </div>
            </article>
            `;
        }
    }

    const products = JSON.parse(productsJson);
    renderProducts(products);

})();