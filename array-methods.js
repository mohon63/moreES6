const products = [
    { name: 'Laptop', price: 3200, brand: 'Lenovo', colour: 'Silver' },
    { name: 'Phone', price: 7000, brand: 'iPhone', colour: 'Black' },
    { name: 'Watch', price: 3000, brand: 'Casio', colour: 'Gray' },
    { name: 'Camera', price: 10000, brand: 'Canon', colour: 'Yellow' }
];

// 1. map
const brands = products.map(product => product.brand);
// console.log(brands);

// 2. forEach
products.forEach(product => console.log(product.colour));

// 3. filter
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap)
const specificName = products.filter(product => product.name.includes('n'))
console.log(specificName)
