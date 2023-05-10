"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("./products");
var productName = 'beanie';
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
