/*
    JavaScript Variable Scopes: var, let, and const

    Definitions:
    - var: A function-scoped or globally scoped variable. Can be redeclared and re-initialized.
    - let: A block-scoped variable. Cannot be redeclared in the same scope but can be re-initialized.
    - const: A block-scoped variable that must be initialized at declaration. Cannot be redeclared or re-initialized.

    Differences:
    | Feature          | var                | let                 | const                |
    |------------------|--------------------|----------------------|----------------------|
    | Scope            | Function/global     | Block                | Block                |
    | Redeclaration     | Allowed            | Not allowed          | Not allowed          |
    | Re-initialization | Allowed            | Allowed              | Not allowed          |
    | Hoisting         | Hoisted to top (undefined) | Hoisted (TDZ) | Hoisted (TDZ) |

    Additional Concepts:
    - Hoisting: JavaScript's behavior of moving variable declarations to the top of their scope during compilation.
    - Shadowing: A situation where a variable declared in an inner scope has the same name as a variable in an outer scope.
*/

// Variable Declaration Examples
// var
var x = 10;
console.log("Initial var x:", x); // 10

var x = 20; // Redeclaring var
console.log("Redeclared var x:", x); // 20

x = 30; // Re-initializing var
console.log("Re-initialized var x:", x); // 30

// let
let y = 10;
console.log("Initial let y:", y); // 10

// let y = 20; // Error: Identifier 'y' has already been declared
y = 30; // Re-initializing let
console.log("Re-initialized let y:", y); // 30

// const
const z = 10;
console.log("Initial const z:", z); // 10

// const z = 20; // Error: Identifier 'z' has already been declared
// z = 30; // Error: Assignment to constant variable.

// Scope Examples
{
    var a = 5; // Function/global scope
    console.log("Var a inside block:", a); // 5

    let b = 10; // Block scope
    console.log("Let b inside block:", b); // 10

    const c = 20; // Block scope
    console.log("Const c inside block:", c); // 20
}

// console.log(b); // Error: b is not defined
// console.log(c); // Error: c is not defined

// Shadowing Example
function shadow() {
    let a = "Hello"; // Outer a

    if (true) {
        let a = "Hi"; // Inner a (shadows outer a)
        console.log("Shadowed a inside if:", a); // Hi
    }
    console.log("Outer a:", a); // Hello
}
shadow();

// Hoisting Example
console.log("Hoisted var count:", count); // undefined (due to hoisting)
var count = 100;

try {
    console.log("Hoisted let mySchool:", mySchool); // ReferenceError
} catch (e) {
    console.log(e.message);
}
let mySchool = 100; // mySchool is in TDZ until initialized

// Inside function demonstrating hoisting and TDZ
function abc() {
    console.log(a, b, c); // undefined, ReferenceError, ReferenceError
    var a = 10; 
    let b = 20; 
    const c = 23;
}

abc(); // Will throw errors for b and c

// Final Note
console.log("Final count after function:", count); // 100
