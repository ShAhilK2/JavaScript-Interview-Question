// Functions in JavaScript

// Q-1 What is Function Declaration?
// A Function Declaration (or Function Statement) defines a named function that can be called later in the code.
function sum(a, b) {
    return a + b;
}

// Q-2 What is Function Expression?
// A Function Expression involves storing a function inside a variable. It can be named or anonymous.
const square = function(num) {
    return num * num;
}; // This is an Anonymous Function.

// Q-3 What are First Class Functions?
// First Class Functions are functions that can be treated like any other variable: passed as arguments, returned from other functions, or assigned to variables.
function cube(num) {
    return num * num * num;
}
function displayCube(fn, num) {
    console.log(`Cube is ${num} : ${fn(num)}`);
}
displayCube(cube, 2);

// Q-4 What is IIFE?
// An Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined.
(function add(a, b) {
    console.log(a + b);
})(10, 20);

// Q-5 IIFE - Output Based Questions
// This IIFE demonstrates how an outer function can invoke an inner function.
(function(x) {
    return (function(y) {
        console.log(x);
    })(2);
})(1);

// Q-6 Function Scope
// Function Scope defines the accessibility of variables within functions. Variables defined in the outer function are accessible inside inner functions.
var num1 = 20, num2 = 30, name = "Shahil";
function multiply() {
    return num1 * num2; // Accessing outer scope variables
}
console.log(multiply());  // 600

function getScore() {
    var num1 = 1, num2 = 2, name = "Sk"; // New scope
    function add() {
        console.log(name + num1 + num2); // Accesses inner scope variables
    }
    add();
}
getScore();

// Q-7 Function Scope - O/P output based question
// Using 'let' allows the loop to capture the correct value of 'i' at each iteration.
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i); // Logs 0, 1, 2, 3, 4
    }, i * 1000);
}

// Using 'var' causes 'i' to be scoped globally, leading to 5 being logged multiple times.
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i); // Logs 5 five times
    }, i * 1000);
}

// Q-8 Function Hoisting
// Function Hoisting allows function declarations to be called before they are defined in the code.
functionName();
function functionName() {
    console.log(x);
    var x = 7; // x is hoisted but initialized only here
    console.log(x); // Logs undefined
    console.log("Sk"); 
}

// Q-9 Function Hoisting Output Based Question
var x = 21;
fn(); // Logs undefined due to hoisting
function fn() {
    console.log(x); // Logs undefined
    var x = 7; // x is hoisted
}

// Q-10 Params vs Arguments
// Parameters are the names listed in the function's definition. Arguments are the actual values passed to the function.
function fn2(...nums) {
    console.log(nums[0] + nums[1]); // Accesses arguments
}
var arr = [5, 6];
fn2(...arr); // Spreads array as arguments

// Q-11 O/P Based Question
const fn3 = (a, x, y, ...numbers) => {
    console.log(x, y); // Logs 6, 3
    console.log(numbers); // Logs [7, 8, 9, 0, 4]
}
fn3(5, 6, 3, 7, 8, 9, 0, 4);

// Q-12 Callback Function
// A Callback Function is a function passed into another function as an argument.
// document.addEventListener("click", () => {
//     // Executes on click event
// });

// Q-13 Arrow Functions
// Arrow Functions provide a more concise syntax for writing function expressions.
const addition = (firstNumber, secondNumber) => {
    console.log(firstNumber + secondNumber);
}
addition("sl", "ls"); // Concatenates strings

// Differences between arrow function and regular function:
// - Arrow functions do not have their own 'this' context.
// - Syntax is more concise and allows for implicit returns.

const fn4 = () => console.log(arguments); // Will throw error because 'arguments' is not defined in arrow functions.
// fn4(1, 2, 3, 4); // This would not work.

// Q-14 "this keyword"
// The value of 'this' depends on how a function is called. In arrow functions, 'this' is lexically inherited.
let user = {
    username: "Sahil",
    fn1: () => {
        console.log("Hello to " + this.username); // 'this' refers to global context
    },
    fn2() {
        console.log("Hello to " + this.username); // 'this' refers to user object
    }
}
user.fn1(); // Logs "Hello to undefined"
user.fn2(); // Logs "Hello to Sahil"
