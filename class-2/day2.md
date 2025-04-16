Absolutely! Let’s dive deep into Day 2: Conditions & Logic 🧠 — one of the core pillars of JavaScript programming. This is where your code starts making decisions, just like a real-world app does.


---

Day 2: Conditions & Logic 🧠

1. Comparison Operators

These are used to compare two values and return a boolean (true or false).

> Tip: Always use === for equality to avoid type coercion surprises.




---

2. Logical Operators

Logical operators combine or reverse conditions.

Example:

const age = 25;
if (age > 18 && age < 60) {
  console.log("You're an adult");
}


---

3. Conditional Statements

if...else if...else

let score = 85;
if (score >= 90) {
  console.log("A Grade");
} else if (score >= 70) {
  console.log("B Grade");
} else {
  console.log("Try Again");
}

switch Statement

Cleaner alternative to if...else if when comparing one value.

let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("You chose Apple");
    break;
  case "banana":
    console.log("You chose Banana");
    break;
  default:
    console.log("Unknown fruit");
}


---

4. Nullish Coalescing (??)

Returns the right-hand value if the left-hand value is null or undefined.

let username;
console.log(username ?? "Guest"); // Output: Guest

Compare with OR (||):

let count = 0;
console.log(count || 10); // 10 (because 0 is falsy)
console.log(count ?? 10); // 0 (nullish only cares about null/undefined)


---

Interview Questions (with Explanations)

1. What is the difference between == and ===?

== compares values after type coercion.

=== compares value and type.



2. What will be the output?

0 == false   // true
0 === false  // false


3. When would you use switch over if?

When comparing the same variable against multiple constant values.



4. What is short-circuit evaluation?

JS stops evaluating expressions as soon as the result is determined.

false && anything → skips anything.

true || anything → skips anything.



5. How is ?? different from ||?

|| returns the first truthy value.

?? returns the first value that is not null or undefined.





---

Mini Task: Login Validator

const username = prompt("Enter username:");
const password = prompt("Enter password:");

if (username === "admin" && password === "1234") {
  alert("Login Successful!");
} else {
  alert("Invalid Credentials.");
}


---

Practice Task: Age Category Checker

const age = prompt("Enter your age:");

if (age < 18) {
  console.log("Minor");
} else if (age <= 60) {
  console.log("Adult");
} else {
  console.log("Senior");
}


---

Challenge Question

const value = 0;
console.log(value ?? "Default");  // Output: 0
console.log(value || "Default");  // Output: "Default"

> Why? Because || treats 0 as falsy, while ?? treats only null/undefined as nullish.




---

Want me to convert this into a PDF or a blog-style post next?

