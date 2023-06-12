function getAllProducts() {
  return fetch("http://localhost:8081/api/products").then((response) =>
    response.json()
  );
}

getAllProducts().then((productList) => console.log(productList));

productTable.innerHTML = "";

const headerRow = document.createElement("div");
headerRow.classList.add("row");
headerRow.innerHTML = `
    <div class="cell">Product Name</div>
    <div class="cell">Category</div>
    <div class="cell">Price</div>
  `;
productTable.appendChild(headerRow);

// Iterate over the productList and create table rows
productList.forEach((product) => {
  const row = document.createElement("div");
  row.classList.add("row");
  row.innerHTML = `
      <div class="cell">${product.name}</div>
      <div class="cell">${product.category}</div>
      <div class="cell">${product.price}</div>
    `;
  productTable.appendChild(row);
});
