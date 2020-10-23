// Constructor Function ES5
// function Person (firstName, lastName, dateOfBirth) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dateOfBirth = new Date(dateOfBirth);
    
//     this.getBirthYear = function () {
//         return this.dateOfBirth.getFullYear();
//     }

//     this.getFullName = function () {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// Prototype
// Person.prototype.getFullDob = function () {
//     return `${this.dateOfBirth.getDate()}-${this.dateOfBirth.getMonth()}-${this.getBirthYear()}`;
// }

// Instantiate object
// const person1 = new Person('Gabriel', 'Vieira', '03-11-1997');
// const person2 = new Person('Mary', 'Smith', '14-06-1950');

// console.log(person1.getFullName());
// console.log(person2.getFullName());

// console.log(person1.getFullDob());
// console.log(person1);

// Class ES6
class Person {
    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = new Date(dateOfBirth);
    }

    getBirthYear() {
        return this.dateOfBirth.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person('Gabriel', 'Vieira', '03-11-1997');
const person2 = new Person('Mary', 'Smith', '14-06-1950');

console.log(person1);
console.log(person1.getFullName());
console.log(person1.getBirthYear());