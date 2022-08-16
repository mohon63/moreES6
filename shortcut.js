// 'almas', 7, {}, [], true
// '' , false , null , undefined

// 1. check truthy 
let myVar = 5;
// check any truthy 
if (myVar) {
    myVar = myVar * 50;
} else {
    myVar = 0;
}

// 2. check fasly
let myMoney = 600;
// you check negative or falsy anithing
if (!myMoney) {

}

const money = 80;
let food;
if (money > 100) {
    food = 'bryani';
} else {
    food = 'cha biscut';
}

// 3. ternary
let food1 = money > 100 ? 'bryani' : 'cha biscut';
// console.log(food1)

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink)

// 4. number to string conversion
const num = 52;
// console.log(num);
const numStr = num + '';
// console.log(numStr);

// 5. string to number
const input = '520';
const inputNum = +input;
// console.log(inputNum);

// 6. 
let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('user hide');

// isActive ? showUser() : hideUser();
// use && if the left side is true then right side will be executed.
isActive && showUser();

// use || if the left side is false then right side will be executed.
isActive || hideUser();

// toggle boolean 
isActive = !isActive;