"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("./products");
var productName = 'beanie';
var product = products_1.default.filter(function (product) {
    return product.name === productName;
})[0];
// console.log(product)
if (Boolean(product.preOrder) === true) {
    console.log("We will send you a message when your product is on its way.");
}
;