import products from "./products";

const productName: String = 'beanie';

const product = products.filter((product) => 
    product.name === productName)[0];

// console.log(product)

if (Boolean(product.preOrder) === true){
    console.log("We will send you a message when your product is on its way.")
};