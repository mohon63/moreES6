// 1. JSON
const student = {
    name: 'mohon hossen',
    age: 32,
    hobby: ['softwere enginear', 'business man']
};
const studentJSON = JSON.stringify(student);

console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log('studentObj:', studentObj);

// fetch 
fetch(url)
    .then(res => res.json())
    .then(data => console.log())

// keys/ values
const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [23, 40, 52, 11, 25, 80];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on an array like object
// loop on an object using for in object

// add or remove from an array
// like array of object
const products = [
    { name: 'laptop', price: 3200, brand: 'Lenovo', colour: 'Silver' },
    { name: 'Phone', price: 7000, brand: 'iPhone', colour: 'Black' },
    { name: 'Watch', price: 3000, brand: 'Casio', colour: 'Gray' },
    { name: 'Camera', price: 10000, brand: 'Canon', colour: 'Yellow' }
];

const newProduct = { name: 'webcam', price: 35000, brand: 'kuddos', colour: 'kocu' }

// copy product array and then add newProduct 
const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(p => p.name !== 'phone');