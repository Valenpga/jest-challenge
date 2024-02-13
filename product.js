let products = []; 
let id = 0; 


function resetProducts() {
    products = [];
    id = 0;
}

function addProduct(name, price) {
    if (!name || !price) {
        throw new Error('Name and price must be defined.');
    }

    const existingProduct = products.find(product => product.name === name);
    if (existingProduct) {
        throw new Error('Product already exists.');
    }

    id++;
    const product = { id, name, price };
    products.push(product);
}

function removeProduct(id) {
    const index = products.findIndex(product => product.id === id);
    if (index === -1) {
        throw new Error('Product not found.');
    }

    products.splice(index, 1);
}

function getProducts() {
    return products;
}

function getProduct(id) {
    const product = products.find(product => product.id === id);
    if (!product) {
        throw new Error('Product not found.');
    }

    return product;
}

function updateProduct(id, name, price) {
    const product = getProduct(id);

    if (name) {
        product.name = name;
    }

    if (price) {
        product.price = price;
    }
}

module.exports = { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct };
