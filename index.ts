import products from "./products";

const productName: String = 'beanie';

const product = products.filter((product) => 
    product.name === productName)[0];