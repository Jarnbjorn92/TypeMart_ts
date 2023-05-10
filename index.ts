import products from "./products";

const productName: String = 'beanie';
const shippingAddress: String = "Glasgow, Scotland";
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

if (Number(product.price) > 25){
    shipping = 0;
    console.log("Shipping is free for this item");
}else{
    shipping = 5;
    console.log("Shipping is £5")
};

if (shippingAddress.match('Glasgow')) {
    taxPercent = 0.1;
}{
    taxPercent = 0;
};

taxTotal = Number(product.price) * taxPercent;

total = Number(product.price) + taxTotal + shipping;

console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    £${product.price}
Tax:      £${taxTotal.toFixed(2)}
Shipping: £${shipping.toFixed(2)}
Total:    £${total.toFixed(2)}
`);