// // Example 1: Declaring variables
// let name = "Robin";
// const age = 25;
// var isStudent = true;

// console.log(name); // Output: Robin
// console.log(age); // Output: 25
// console.log(isStudent); // Output: true

// // Example 2: Reassigning variables
// let city = "New York";
// console.log(city); // Output: New York
// city = "Los Angeles";
// console.log(city); // Output: Los Angeles

// // Example 3: Using variables in expressions
// let a = 10;
// let b = 20;
// let sum = a + b;
// console.log(sum); // Output: 30

// // Example 4: Variable scope
// function greet() {
//     let greeting = "Hello!";
//     console.log(greeting);
// }
// greet(); // Output: Hello!
// console.log(greeting); // Uncommenting this will cause an error (greeting is not defined outside the function)

// Questions for practice:
// 1. Declare a variable to store your favorite color and log it to the console.
// 2. Create two variables to store numbers and calculate their product.
const num1 = 10; // Example of const variable
const num2 = 5;
const result = num1 * num2;
console.log(result)
// 3. What happens if you try to reassign a `const` variable? Test it.
result = 50;
// 4. Write a function that declares a variable inside it and logs it. Try accessing the variable outside the function.
// 5. Declare a variable without assigning a value. Log its value to see what it contains.