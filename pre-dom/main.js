// MDN console for documentation
console.error("It's a error");
console.log("Hello World!");
console.warn("It's a warning");

/* Variables: 
    var: globally scoped, can be used anywhere in the code(do not use)
        
    ECMASCRIPT
        let: code block scoped, can be used in the code block that have been defined
        const: same as let but cannot be re-asigned

    Always use 'const' unless you know you gonna reasgined that value
*/

let oldAge = 30;
console.log(oldAge);

oldAge = 35;
console.log(oldAge);

const anotherAge = 21;
console.log(anotherAge);

// Uncaught TypeError: Assignment to constant variable.
// anotherAge = 23;
// console.log(anotherAge);

/* Data Types:
    strings:
    numbers:
    boolean:
    null:
    undefined:
*/

// string data type
const name = "Gabriel";
console.log(typeof name);
// number data type
const age = 23;
console.log(typeof age);
const rating = 4.5;
console.log(typeof rating);
// boolean data type
const isCool = true;
console.log(typeof isCool);
// null data type, nothing in it
const x = null;
console.log(typeof x); //Object ?! Its wrong
// undefined data type
const y = undefined;
console.log(typeof y);
let z;
console.log(typeof z);

// Concatenation
console.log("My name is", name, "and my age is", age); // Old way

// Template strings
console.log(`My name is ${name} and im ${age}`);

// string methods
const s = "Hello World";
console.log(s.length);
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(""));

// Arrays - variables that hold multiple value

// new = constructor
const numbers = new Array (1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ["Apple", "Orange", "Pears", 10, true, null];
console.log(fruits);
console.log(fruits[0]);

// add to the end of the array
fruits.push("Mango");
console.log(fruits);

// add to the start of the array
fruits.unshift("Another Apple");
console.log(fruits);

// remove the last element of the array
fruits.pop();
console.log(fruits);

// check if something is a array
console.log(Array.isArray(fruits));

// get index of value
console.log(fruits.indexOf("Orange"));
console.log("\n\n\n");
/* Object Literals */

console.log("Object Literals ");
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ["music", "movies", "sports"],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
};

console.log(person.firstName);
console.log(person.hobbies[1]);

const { firstName, lastName } = person;

const todos = [
    {
        id: 1,
        text: 'Take out the trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos);

const todoJson = JSON.stringify(todos);
console.log(todoJson);

// For loop
for(let i = 0; i <= 10; i++){
    console.log(`For Loop: ${i}`);
}

// While loop
let counter = 0;
while(counter < 10){
    console.log(`While Loop: ${counter}`);
    counter++;
}

// Loop trough arrays
for(let t of todos){
    console.log(t.text);
}

console.log("\n\n");
// High order array methods forEach, map, filter

// forEach
console.log("High order array methods");
todos.forEach(function (y){
    console.log(`For Each: ${y.text}`);
});

// map
console.log("Map:");
const todoText = todos.map(function (u){
    return u.text;
});

console.log(todoText);

// filter
const todoText2 = todos.filter(function(i) {
    return i.isCompleted === true;
});

console.log(todoText2);

// filter + map
const todoText3 = todos.filter(function(i) {
    return i.isCompleted === true;
}).map(function(o){
    return o.text;
});

console.log(todoText3);

// Conditionals == equals, === data type equals
const c = 10;
const v = 4;

if(c === 10 || v === 4) {
    console.log("c is 10 and v is 4");
} else if (c === 11) {
    console.log("c is 11");
} else {
    console.log("Not 10 or 11");
}

// tenary
const xx = 11;
// if xx > 10 then(?) color = "red" else(:) color = "blue"
const color = xx > 10 ? "red" : "blue";
console.log(color);

// switch
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
}

// function
function addNums(num1 = 1, num2 = 1){
    return num1 + num2;
}

console.log(addNums(1, 3));

// arrow function
const subNums = (num1 = 1, num2 = 1) => {
    return num1 - num2;
};

console.log(subNums(3, 1));

// simplified arrow function
const multiplyNums = (num1 = 1, num2 = 1) => num1 * num2;
console.log(multiplyNums(2, 3));