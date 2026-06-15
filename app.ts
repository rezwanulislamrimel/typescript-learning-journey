// ====================
// 1. String
// ====================
let name: string = "Rimel";

// ====================
// 2. Number
// ====================
let age: number = 25;
let price: number = 99.99;

// ====================
// 3. Boolean
// ====================
let isActive: boolean = true;
let isLoggedIn: boolean = false;

// ====================
// 4. Array
// ====================
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Rimel", "Bayjit"];

// ====================
// 5. Tuple
// ====================
let userTuple: [string, number] = ["Rimel", 25];

// ====================
// 6. Enum
// ====================
enum Role {
  Admin,
  User,
  Guest,
}

let myRole: Role = Role.Admin;

// String Enum
enum Status {
  Success = "SUCCESS",
  Failed = "FAILED",
}

let currentStatus: Status = Status.Success;

// ====================
// 7. Any
// ====================
let anything: any = "Hello";
anything = 100;
anything = true;

// ====================
// 8. Unknown
// ====================
let unknownValue: unknown = "TypeScript";

if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase());
}

// ====================
// 9. Void
// ====================
function greet(): void {
  console.log("Hello TypeScript");
}

// ====================
// 10. Null
// ====================
let emptyValue: null = null;

// ====================
// 11. Undefined
// ====================
let notAssigned: undefined = undefined;

// ====================
// 12. Object
// ====================
let person: {
  name: string;
  age: number;
} = {
  name: "Rimel",
  age: 25,
};

// ====================
// 13. Union Type
// ====================
let employeeId: string | number;

employeeId = 101;
employeeId = "EMP101";

// ====================
// 14. Literal Type
// ====================
let result: "success" | "failed";

result = "success";

// ====================
// 15. Type Alias
// ====================
type User = {
  name: string;
  age: number;
};

let user1: User = {
  name: "Rimel",
  age: 25,
};

// ====================
// 16. Interface
// ====================
interface Student {
  name: string;
  age: number;
}

const student: Student = {
  name: "Rimel",
  age: 25,
};

// ====================
// 17. Never
// ====================
function throwError(message: string): never {
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
