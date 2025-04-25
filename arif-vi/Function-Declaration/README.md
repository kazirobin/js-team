Let’s continue! 🚀

---

### 6️⃣ **Function Declaration in JavaScript**

A **function declaration** is a way to define a reusable block of code using the `function` keyword. This type of function is **hoisted**, which means it’s available before the line it’s defined on.

---

### 📌 Syntax:
```javascript
function functionName(parameters) {
  // code to execute
}
```

---

### ✅ Example:
```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!
```

---

### ✅ Hoisting Example:
Function declarations are hoisted **with their definitions**:

```javascript
sayHello(); // ✅ Works because it's hoisted

function sayHello() {
  console.log("Hi there!");
}
```

---

### ❌ Comparison: Function Expression
Function expressions are **not hoisted** the same way.

```javascript
sayHi(); // ❌ TypeError: sayHi is not a function

var sayHi = function() {
  console.log("Hi!");
};
```

---

### ✅ Named vs Anonymous Functions
```javascript
// Named function declaration
function add(x, y) {
  return x + y;
}

// Anonymous function expression
const multiply = function(x, y) {
  return x * y;
};
```

---

### 🔁 Summary Table:

| Type                   | Hoisted | Name Required | Can Be Used Before Declaration |
|------------------------|---------|---------------|-------------------------------|
| Function Declaration   | ✅ Yes  | ✅ Yes         | ✅ Yes                        |
| Function Expression    | ❌ No   | ❌ Optional    | ❌ No                         |
| Arrow Function         | ❌ No   | ❌ Optional    | ❌ No                         |

---

### 🔥 Pro Tip:
Use **function declarations** when you want your functions available throughout the code file, and **function expressions** for more controlled or conditional usage.

---

Next up:
[> ✅ **7️⃣ Function Invocation**](../Function-Invocation/README.md)

Want to keep the flow going?