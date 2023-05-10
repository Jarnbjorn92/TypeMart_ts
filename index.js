"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("./products");
var productName = 'beanie';
var shippingAddress = "Glasgow, Scotland";
var shipping;
var taxPercent;
var taxTotal;
var total;
var product = products_1.default.filter(function (product) {
    return product.name === productName;
})[0];
// console.log(typeof Boolean(product.preOrder))
if (Boolean(product.preOrder) === true) {
    console.log("We will send you a message when your product is on its way.");
}
;
if (Number(product.price) > 25) {
    shipping = 0;
    console.log("Shipping is free for this item");
}
else {
    shipping = 5;
    console.log("Shipping is £5");
}
;
if (shippingAddress.match('Glasgow')) {
    taxPercent = 0.1;
}
{
    taxPercent = 0;
}
;
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
console.log("\nProduct:  ".concat(product.name, "\nAddress:  ").concat(shippingAddress, "\nPrice:    \u00A3").concat(product.price, "\nTax:      \u00A3").concat(taxTotal.toFixed(2), "\nShipping: \u00A3").concat(shipping.toFixed(2), "\nTotal:    \u00A3").concat(total.toFixed(2), "\n"));
