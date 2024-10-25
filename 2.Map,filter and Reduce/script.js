// Definition and Examples of Array Methods: Map, Filter, and Reduce

// 1. Map
// The map() method creates a new array populated with the results of calling a provided function 
// on every element in the calling array.

const nums = [1, 2, 3, 4, 5];
const multiplyByThree = nums.map((num) => num * 3);
console.log(multiplyByThree);

// 2. Filter
// The filter() method creates a new array with all elements that pass the test 
// implemented by the provided function.

const moreThanNine = multiplyByThree.filter((num) => num > 9);
console.log(moreThanNine);

// 3. Reduce
// The reduce() method executes a reducer function on each element of the array, 
// resulting in a single output value.

const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// Polyfill for Map
Array.prototype.myMap = function(cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
}

const prototypeMap = nums.myMap((num) => num * 2);
console.log(prototypeMap);

// Polyfill for Filter
Array.prototype.myFilter = function(cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this))
            temp.push(this[i]);
    }
    return temp;
}

const prototypeFilter = nums.myFilter((num) => num > 4);
console.log(prototypeFilter);

// Polyfill for Reduce
Array.prototype.myReduce = function(cb, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator !== undefined ? cb(accumulator, this[i], i, this) : this[i];
    }
    return accumulator;
}

const prototypeReduce = nums.myReduce((acc, curr) => acc + curr, 0);
console.log(prototypeReduce);

// Question 1: Student Data Manipulation
let students = [
    { name: "Prab", rollNumber: 2, marks: 89 },
    { name: "krish", rollNumber: 24, marks: 34 },
    { name: "hetvi", rollNumber: 25, marks: 99 },
    { name: "Sakshi", rollNumber: 26, marks: 45 }
];

// Returns names with capital letters
const CapitalNames = students.map((stud) => stud.name.toUpperCase());
console.log(CapitalNames);

// Returns details for students who scored more than 60
const DetailOfMoreThanSixty = students.filter(stud => stud.marks > 60);
console.log(DetailOfMoreThanSixty);

// Returns details for students who scored more than 60 and roll number greater than 15
const DetailOfMoreThanSixtyAndGreaterThanfifteen = students.filter(stud => stud.marks > 60 && stud.rollNumber > 15);
console.log(DetailOfMoreThanSixtyAndGreaterThanfifteen);

// Returns the sum of all students' marks
const sumOfAllStudents = students.reduce((acc, curr) => acc + curr.marks, 0);
console.log(sumOfAllStudents);

// Returns names of students who scored more than 60
const nameStudMoreThanSixty = students.filter(stud => stud.marks > 60).map(stud => stud.name);
console.log(nameStudMoreThanSixty);

// Returns total marks for students with marks greater than 60 
// after adding 20 marks to those who scored less than 60
const graceMarksElimination = students.map((stud) => {
    if (stud.marks < 60) stud.marks += 20;
    return stud;
}).filter((stud) => stud.marks > 60).reduce((acc, curr) => acc + curr.marks, 0);

console.log(graceMarksElimination);
