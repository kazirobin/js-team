# **Day 3: Loops & Debugging in JavaScript** 🔁  
*A Comprehensive Guide with Examples, Interview Questions, and Practice Tasks*  

---

## **Table of Contents**  
1. [Introduction to Loops](#introduction-to-loops)  
2. [Types of Loops](#types-of-loops)  
   - [for Loop](#for-loop)  
   - [while Loop](#while-loop)  
   - [do...while Loop](#dowhile-loop)  
3. [Loop Control Statements](#loop-control-statements)  
   - [break](#break-statement)  
   - [continue](#continue-statement)  
4. [Switch Statement](#switch-statement)  
5. [Debugging with Browser Dev Tools](#debugging-with-browser-dev-tools)  
6. [Interview Questions](#interview-questions)  
7. [Practice Tasks](#practice-tasks)  
8. [Solutions](#solutions)  

---

## **1. Introduction to Loops** <a name="introduction-to-loops"></a>  
Loops allow you to **repeat a block of code multiple times** until a condition is met.  
- Used for **iterating over arrays, objects, or executing code repeatedly**.  
- Helps in **reducing repetitive code**.  

---

## **2. Types of Loops** <a name="types-of-loops"></a>  

### **1. `for` Loop** <a name="for-loop"></a>  
**Syntax:**  
```javascript
for (initialization; condition; increment/decrement) {
  // Code to execute
}
```
**Example:**  
```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i); // Prints 1, 2, 3, 4, 5
}
```
**Use Case:**  
- When you know **exactly how many times** the loop should run.  

---

### **2. `while` Loop** <a name="while-loop"></a>  
**Syntax:**  
```javascript
while (condition) {
  // Code to execute
}
```
**Example:**  
```javascript
let i = 1;
while (i <= 5) {
  console.log(i); // Prints 1, 2, 3, 4, 5
  i++;
}
```
**Use Case:**  
- When the **number of iterations is unknown** (e.g., reading data until a condition is met).  

---

### **3. `do...while` Loop** <a name="dowhile-loop"></a>  
**Syntax:**  
```javascript
do {
  // Code to execute
} while (condition);
```
**Example:**  
```javascript
let i = 1;
do {
  console.log(i); // Prints 1 (even if condition is false)
  i++;
} while (i <= 5);
```
**Use Case:**  
- When you want the loop to **run at least once**, regardless of the condition.  

---

## **3. Loop Control Statements** <a name="loop-control-statements"></a>  

### **1. `break` Statement** <a name="break-statement"></a>  
- **Exits the loop immediately**.  
```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i); // Prints 1, 2, 3, 4
}
```

### **2. `continue` Statement** <a name="continue-statement"></a>  
- **Skips the current iteration** and moves to the next.  
```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i); // Prints 1, 2, 4, 5 (skips 3)
}
```

---

## **4. Switch Statement** <a name="switch-statement"></a>  
- Used for **multiple conditions** (alternative to `if-else` chains).  
**Syntax:**  
```javascript
switch (expression) {
  case value1:
    // Code
    break;
  case value2:
    // Code
    break;
  default:
    // Code if no case matches
}
```
**Example:**  
```javascript
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Friday":
    console.log("Weekend!");
    break;
  default:
    console.log("Midweek");
}
```
**Key Points:**  
- `break` prevents "fall-through" (executing multiple cases).  
- `default` runs if no case matches.  

---

## **5. Debugging with Browser Dev Tools** <a name="debugging-with-browser-dev-tools"></a>  

### **Chrome DevTools Debugging Steps:**  
1. **Open DevTools** (`F12` or `Ctrl+Shift+I`).  
2. **Go to Sources Tab** → Find your JS file.  
3. **Set Breakpoints** (click line numbers).  
4. **Step Through Code** (▶️, ⏸️, ⏭️).  
5. **Watch Variables** (in the "Scope" section).  

**Example:**  
```javascript
function buggyFunction() {
  let x = 10;
  x = x + "20"; // Bug: String concatenation instead of addition
  console.log(x); // "1020" instead of 30
}
```
- **Debugging Tip:** Use `console.log()` for quick checks.  

---

## **6. Interview Questions** <a name="interview-questions"></a>  

### **1. What’s the difference between `for` and `while` loops?**  
- `for` is used when **iterations are known**, `while` is for **unknown iterations**.  

### **2. When would you use `do...while` over `while`?**  
- When you **must execute the loop at least once** (e.g., user input validation).  

### **3. How does `break` differ from `continue`?**  
- `break` **exits the loop entirely**, while `continue` **skips to the next iteration**.  

### **4. Why is `switch` preferred over multiple `if-else`?**  
- **More readable** for multiple fixed conditions.  

### **5. How do you debug an infinite loop?**  
- Use **breakpoints** in DevTools to inspect variables and conditions.  

---

## **7. Practice Tasks** <a name="practice-tasks"></a>  

### **Task 1: Multiplication Table**  
Print a **5x5 multiplication table** using nested loops.  
**Expected Output:**  
```
1 2 3 4 5  
2 4 6 8 10  
3 6 9 12 15  
4 8 12 16 20  
5 10 15 20 25  
```

### **Task 2: Sum of Even Numbers**  
Calculate the **sum of even numbers** from 1 to 100 using a loop.  

### **Task 3: FizzBuzz with Loops**  
Print numbers **1 to 100**:  
- "Fizz" if divisible by 3  
- "Buzz" if divisible by 5  
- "FizzBuzz" if divisible by both  

---

## **8. Solutions** <a name="solutions"></a>  

### **Solution 1: Multiplication Table**  
```javascript
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += (i * j) + " ";
  }
  console.log(row);
}
```

### **Solution 2: Sum of Even Numbers**  
```javascript
let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) sum += i;
}
console.log(sum); // 2550
```

### **Solution 3: FizzBuzz**  
```javascript
for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  console.log(output || i);
}
```

---

## **Conclusion**  
- **Loops (`for`, `while`, `do...while`)** help automate repetitive tasks.  
- **`break` and `continue`** control loop execution.  
- **`switch`** simplifies multiple conditions.  
- **Debugging** is essential for fixing errors efficiently.  

🚀 **Try the tasks and experiment with DevTools!**  

Would you like additional examples or real-world use cases? Let me know!
