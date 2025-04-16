Here's a complete Markdown file with detailed explanations, interview questions, and practice tasks with solutions:
markdown
# JavaScript Conditions & Logic Guide

## Table of Contents
1. [Comparison Operators](#comparison-operators)
2. [Logical Operators](#logical-operators)
3. [Conditional Statements](#conditional-statements)
4. [Nullish Coalescing](#nullish-coalescing)
5. [Interview Questions](#interview-questions)
6. [Practice Tasks](#practice-tasks)
7. [Solutions](#solutions)

## Comparison Operators <a name="comparison-operators"></a>

### Equality Operators
```javascript
5 == '5'   // true (type coercion)
5 === '5'  // false (strict equality)
```

### Relational Operators
```javascript
10 > 5    // true
10 <= 10  // true
```

### Special Cases
```javascript
NaN === NaN  // false (use isNaN())
-0 === +0    // true (use Object.is())
```

## Logical Operators <a name="logical-operators"></a>

### Basic Operators
```javascript
true && false  // false (AND)
true || false  // true (OR)
!true          // false (NOT)
```

### Short-Circuit Evaluation
```javascript
const value = name || "Default"  // Returns name if truthy, else "Default"
const result = isValid && proceed()  // Calls proceed() only if isValid is true
```

## Conditional Statements <a name="conditional-statements"></a>

### if-else
```javascript
if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teen");
} else {
  console.log("Child");
}
```

### Ternary Operator
```javascript
const status = score >= 50 ? "Pass" : "Fail";
```

### switch
```javascript
switch(day) {
  case 'Monday':
    console.log("Start week");
    break;
  case 'Friday':
    console.log("Weekend!");
    break;
  default:
    console.log("Midweek");
}
```

## Nullish Coalescing <a name="nullish-coalescing"></a>
```javascript
const username = inputName ?? "Anonymous";  // Only for null/undefined
const count = userCount || 10;  // Catches all falsy values
```

## Interview Questions <a name="interview-questions"></a>

### Core Concepts
1. **What's the difference between `==` and `===`?**
   - `==` performs type coercion, `===` checks type and value

2. **When would you use `??` vs `||`?**
   - `??` for null/undefined, `||` for any falsy value

3. **Explain truthy and falsy values in JavaScript**
   - Falsy: false, 0, "", null, undefined, NaN
   - Truthy: All other values

### Advanced Questions
4. **How does short-circuit evaluation work with `&&` and `||`?**
   ```javascript
   true || console.log("Never runs")  // Stops at true
   false && console.log("Never runs") // Stops at false
   ```

5. **What's the output of `3 < 2 < 1` and why?**
   - Evaluates as `(3 < 2) < 1` → `false < 1` → `0 < 1` → true

6. **How would you safely compare objects in JavaScript?**
   ```javascript
   JSON.stringify(obj1) === JSON.stringify(obj2)  // Simple way
   // Or use deep equality libraries like Lodash
   ```

## Practice Tasks <a name="practice-tasks"></a>

### Task 1: Grade Calculator
Write a function that takes a score (0-100) and returns:
- "A" for 90+
- "B" for 80-89
- "C" for 70-79
- "D" for 60-69
- "F" below 60

### Task 2: Login Validator
Create a function that:
- Accepts username and password
- Returns true if:
  - Username is at least 6 chars
  - Password is at least 8 chars
  - Password contains at least one number
- Returns false otherwise

### Task 3: FizzBuzz Enhanced
Write a function that:
- Prints "Fizz" for multiples of 3
- Prints "Buzz" for multiples of 5
- Prints "FizzBuzz" for multiples of both
- Otherwise prints the number
- Bonus: Make it work for any range (start, end)

## Solutions <a name="solutions"></a>

### Solution 1: Grade Calculator
```javascript
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}
```

### Solution 2: Login Validator
```javascript
function validateLogin(username, password) {
  const hasNumber = /[0-9]/.test(password);
  return (
    username.length >= 6 &&
    password.length >= 8 &&
    hasNumber
  );
}
```

### Solution 3: FizzBuzz Enhanced
```javascript
function fizzBuzz(start, end) {
  for (let i = start; i <= end; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    console.log(output || i);
  }
}
```

## Additional Resources
- [MDN Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
- [JavaScript Comparison Table](https://dorey.github.io/JavaScript-Equality-Table/)
```

This Markdown file includes:
1. Comprehensive explanations with code examples
2. 6 interview questions with answers
3. 3 practical tasks with solutions
4. Proper section linking
5. Additional resources

You can save this as `javascript-conditions-guide.md` and use it for teaching or reference. Would you like me to add any specific sections or modify the existing content?
