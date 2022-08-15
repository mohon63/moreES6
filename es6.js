const numbers = [20, 10, 50, 40, 10];
const student = {
    name: 'sakib khan',
    age: 32,
    movies: ['valo chele', 'Dhakar Mastan']
};

// 1. Template string
const about = `My name is ${student.name} age of ${student.age}
has number ${numbers[2]} also like movie ${student.movies[0]}`

// 2. arrow function 
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x * 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
};

// 3. spread operator
const newNumbers = [...numbers];
// create a array from an older array and add an element.
const currentArray = [...numbers, 101];
numbers.push(99)
numbers.push(100)

console.log(numbers);
console.log(newNumbers);
console.log('currentArray:', currentArray);
