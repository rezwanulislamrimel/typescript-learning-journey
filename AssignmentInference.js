"use strict";
// =====================================
// Type Assignment & Type Inference
// =====================================
Object.defineProperty(exports, "__esModule", { value: true });
// -----------------------------
// 1. Explicit Type Assignment
// -----------------------------
// Type is explicitly declared by the developer
let firstName = "Rimel";
let age = 25;
let isActive = true;
console.log(firstName);
console.log(age);
console.log(isActive);
// -----------------------------
// 2. Type Inference
// -----------------------------
// TypeScript automatically infers the type from the assigned value
let city = "Dhaka"; // string
let salary = 50000; // number
let available = true; // boolean
console.log(city);
console.log(salary);
console.log(available);
// -----------------------------
// 3. Array Type Inference
// -----------------------------
// TypeScript infers the array element type
let fruits = ["Apple", "Banana", "Mango"]; // string[]
let marks = [80, 90, 95]; // number[]
console.log(fruits);
console.log(marks);
// -----------------------------
// 4. Object Type Inference
// -----------------------------
// TypeScript infers the structure of the object
let user = {
    name: "Rimel",
    age: 25,
};
console.log(user);
// -----------------------------
// 5. Function Return Type Inference
// -----------------------------
// TypeScript infers the return type automatically
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
// -----------------------------
// 6. Explicit Return Type
// -----------------------------
// Return type is explicitly specified
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 6));
// -----------------------------
// Difference Example
// -----------------------------
// Explicit type assignment
let country = "Bangladesh";
// Type inference
let district = "Natore";
// Type safety examples
// country = 100;   // Error: Type 'number' is not assignable to type 'string'
// district = 100;  // Error: Type 'number' is not assignable to type 'string'
console.log(country);
console.log(district);
//# sourceMappingURL=AssignmentInference.js.map