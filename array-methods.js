const products = [
    { name: 'Laptop', price: 3200, brand: 'Lenovo', colour: 'Silver' },
    { name: 'Phone', price: 7000, brand: 'iPhone', colour: 'Black' },
    { name: 'Watch', price: 3000, brand: 'Casio', colour: 'Gray' },
    { name: 'Camera', price: 10000, brand: 'Canon', colour: 'Yellow' }
];

const brands = products.map(product => product.brand);
// console.log(brands);

products.forEach(product => console.log(product.colour));