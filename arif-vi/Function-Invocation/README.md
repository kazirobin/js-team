Let's roll on! 🌀

---

### 7️⃣ **Function Invocation in JavaScript**

**Function invocation** means **calling or executing** a function to run the code inside it.

---

### 📌 Basic Syntax:
```javascript
functionName(arguments);
```

You can invoke:
- Declared functions
- Function expressions
- Arrow functions
- Anonymous functions (immediately)

---

### ✅ Example:

```javascript
function greet(name) {
  console.log("Hello, " + name);
}

greet("Alice"); // Function invocation
```

---

### 🧠 What Happens When a Function Is Invoked?

When you invoke a function, JavaScript:
1. Creates a new **Execution Context**
2. Allocates **memory** for parameters and local variables
3. Adds the context to the **Call Stack**
4. Executes the function code line-by-line
5. Pops it off the call stack after execution

---

### ✅ Types of Invocations

| Invocation Type         | Example                                 | Notes |
|--------------------------|------------------------------------------|-------|
| Regular function         | `greet()`                                | Global or local context |
| Method invocation        | `obj.sayHi()`                            | `this` refers to the object |
| Constructor invocation   | `new Person()`                           | Used to create new object |
| IIFE (Immediately Invoked Function Expression) | `(function(){})()`             | Runs immediately |
| Arrow function           | `(() => console.log("hi"))();`          | Shorter syntax, no own `this` |

---

### 🧪 Example: Different Invocations

```javascript
function showName() {
  console.log("I was called!");
}
showName(); // Regular function invocation

const obj = {
  speak: function() {
    console.log("Object speaking");
  }
};
obj.speak(); // Method invocation

(function () {
  console.log("I'm an IIFE!");
})(); // IIFE
```

---

### 🧠 Behind the Scenes: Execution Context Created

When `greet("Alice")` is called:

- JS creates a new **Execution Context** for `greet`
- `name = "Alice"` is placed into memory
- It prints and exits → context removed from call stack

---

Next up:
[> ✅ **8️⃣ Scope Chaining (Own Memory || Parent Memory)**](../Scope-Chaining/README.md)

Want to keep going into **scope resolution**? This is where it starts to get real fun and real powerful 🔥