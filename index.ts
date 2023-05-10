import products from "./products";

const productName: String = 'beanie';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

const product = products.filter((product) => 
    product.name === productName)[0];

// console.log(typeof Boolean(product.preOrder))

if (Boolean(product.preOrder) === true){
    console.log("We will send you a message when your product is on its way.")
};