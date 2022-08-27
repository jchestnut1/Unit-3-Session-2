let productName = prompt("Enter product Name:");
let productPrice = Number(prompt("Enter product proce"));
let itemQuantity =Number(prompt("Enter item quantity"));
let productSubtotal = (productPrice*productQuantity);
let productTaxes = (productSubtotal)*0.6;
let finalPrice = (productSubtotal+productTaxes);


console.log("productName");
console.log("productPrice");
console.log("itemQuantity");
console.log("productSubtotal");
console.log("finalPrice");


document.write = `
    <h2>Product Receipt</h2>
    <p class=product> ${productName} <span>${productPrice}</span></p>
    <p class=product> ${productName} <span>${productPrice}</span></p>
    <p class=product> ${productName} <span>${productPrice}</span></p>
    <p class=subtotal>Subtotal: ${productSubtotal}</p>
    <p class=tax>Taxes: ${productTaxes}</p>
    <p class=final>Total Cost: ${finalPrice}</p> 
`