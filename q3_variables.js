// String: Text data type used for storing text values
var name = "Isra khan";
console.log(name);
console.log("Type of name:", typeof name);

// Number: Numeric data type for integers and decimals
const profession = "Software Engineer";
console.log(profession);
console.log("Type of profession:", typeof profession);

// Number: Integer and decimal values
let age = 25;
console.log(age);
console.log("Type of age:", typeof age);

// Boolean: True or false value
const isActive = true;
console.log(isActive);
console.log("Type of isActive:", typeof isActive);

// Undefined: Variable declared but not assigned a value
let unassignedValue;
console.log(unassignedValue);
console.log("Type of unassignedValue:", typeof unassignedValue);

// Null: Intentional absence of value
const noValue = null;
console.log(noValue);
console.log("Type of noValue:", typeof noValue);

// Object: Collection of key-value pairs
const person = {
    fullName: "Isra Khan",
    experience: 3,
    field: "Flutter Development"
};
console.log(person);
console.log("Type of person:", typeof person);

// Array: Ordered collection of elements
const skills = ["JavaScript", "Flutter", "Backend Development"];
console.log(skills);
console.log("Type of skills:", typeof skills);

// Symbol: Unique and immutable identifier
const uniqueId = Symbol("id");
console.log(uniqueId);
console.log("Type of uniqueId:", typeof uniqueId);

// BigInt: Large integers beyond Number's safe range
const largeNumber = BigInt(9007199254740991);
console.log(largeNumber);
console.log("Type of largeNumber:", typeof largeNumber);
