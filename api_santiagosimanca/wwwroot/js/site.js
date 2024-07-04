// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function searchProduct() {
    var term = document.getElementById("searchTerm").value;
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${term}`)
        .then(response => response.json())
        .then(data => {
            var results = document.getElementById("results");
            results.innerHTML = "";
            data.results.forEach(product => {
                results.innerHTML += `
          <div>
            <h3>${product.title}</h3>
            <img src="${product.thumbnail}" alt="${product.title}">
            <p>Precio: ${product.price}</p>
          </div>
        `;
            });
        });
}

