"use strict";
const addProductButton = document.getElementById("addProduct");
addProductButton.addEventListener("click", () => {
    // Prompt for product details
    const productName = prompt("Enter product name:");
    const productQuantity = prompt("Enter quantity:");
    const productPrice = prompt("Enter price:");
    // Validate input
    if (productName && productQuantity && productPrice) {
        // Create a new list item
        const newItem = document.createElement("li");
        newItem.innerHTML = `${productName} - Quantity: ${productQuantity}, Price: ${productPrice}`;
        // Append the new item to the list
        const productList = document.getElementById("productList");
        productList.appendChild(newItem);
    }
    else {
        alert("Please fill all fields.");
    }
});
