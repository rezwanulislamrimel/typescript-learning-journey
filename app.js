"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ====================
// 1. String
// ====================
let name = "Rimel";
// ====================
// 2. Number
// ====================
let age = 25;
let price = 99.99;
// ====================
// 3. Boolean
// ====================
let isActive = true;
let isLoggedIn = false;
// ====================
// 4. Array
// ====================
let numbers = [1, 2, 3, 4];
let names = ["Rimel", "Bayjit"];
// ====================
// 5. Tuple
// ====================
let userTuple = ["Rimel", 25];
// ====================
// 6. Enum
// ====================
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let myRole = Role.Admin;
// String Enum
var Status;
(function (Status) {
    Status["Success"] = "SUCCESS";
    Status["Failed"] = "FAILED";
})(Status || (Status = {}));
let currentStatus = Status.Success;
// ====================
// 7. Any
// ====================
let anything = "Hello";
anything = 100;
anything = true;
// ====================
// 8. Unknown
// ====================
let unknownValue = "TypeScript";
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}
// ====================
// 9. Void
// ====================
function greet() {
    console.log("Hello TypeScript");
}
// ====================
// 10. Null
// ====================
let emptyValue = null;
// ====================
// 11. Undefined
// ====================
let notAssigned = undefined;
// ====================
// 12. Object
// ====================
let person = {
    name: "Rimel",
    age: 25,
};
// ====================
// 13. Union Type
// ====================
let employeeId;
employeeId = 101;
employeeId = "EMP101";
// ====================
// 14. Literal Type
// ====================
let result;
result = "success";
let user1 = {
    name: "Rimel",
    age: 25,
};
const student = {
    name: "Rimel",
    age: 25,
};
// ====================
// 17. Never
// ====================
function throwError(message) {
    throw new Error(message);
}
// ====================
// Output Examples
// ====================
console.log(name);
console.log(age);
console.log(price);
console.log(isActive);
console.log(numbers);
console.log(userTuple);
console.log(myRole);
console.log(currentStatus);
console.log(person);
console.log(employeeId);
console.log(result);
console.log(user1);
console.log(student);
greet();
//# sourceMappingURL=app.js.map