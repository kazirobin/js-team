Great! Let’s jump into **how parameters are stored in JavaScript memory**.

---

### 1️⃣1️⃣ **How Parameters Are Stored in JS Memory**

In JavaScript, when a function is called, the **parameters** passed to the function are stored in the **execution context’s memory**. Each function gets its own execution context, and **parameters** are part of the environment record, which holds all local variables and functions.

---

### 📌 How It Works:

1. **During Function Call:**
   - JavaScript creates an **execution context** for the function.
   - The **parameters** passed to the function are placed into the **local memory** (execution context).

2. **In the Execution Context:**
   - Each parameter is added to the **environment record**, and their values are stored there.

3. **Memory Management:**
   - When the function is invoked, a new memory space is allocated for the parameters.
   - When the function completes, the memory is **freed** if there are no closures holding references to the parameters.

---

### ✅ Example:

```javascript
function greet(name) {
  console.log("Hello " + name);
}

greet("Alice");
```

#### Behind the Scenes:
- **Global Memory:** 
  - `greet` function is stored in global execution context.
- **Function Memory (Execution Context of `greet`):**
  - `name` is a parameter, and it’s stored as part of this function’s environment record with the value `"Alice"`.

---

### 📌 What Happens to Parameters After Function Execution?

- **If there are no closures or references** holding onto parameters, they are **removed** from memory after the function execution finishes.
- **Closures** (if the function is returned or used elsewhere) can keep the parameters alive in memory.

---

### 🧠 Example with Closure (Parameters in Memory after Function Execution):

```javascript
function outer(name) {
  return function inner() {
    console.log(name);
  };
}

const closure = outer("Bob");
closure(); // Bob
```

#### What's Happening?
- When `outer("Bob")` is called, the `name` parameter is stored in the execution context of `outer`.
- `inner()` forms a **closure**, which allows it to access the `name` parameter even after `outer()` has finished executing.
- The `name` variable remains in memory as long as the closure (`closure` function) exists.

---

### ❓ What If Parameters Aren’t Passed?

If no value is passed for a parameter, JavaScript uses `undefined` as the default value.

```javascript
function sayHello(name) {
  console.log(name); // undefined if no argument is passed
}

sayHello(); // Output: undefined
```

---

### Summary:

| Concept        | Description                                           |
|----------------|-------------------------------------------------------|
| Parameter      | A variable that receives values when the function is called |
| Execution Context | Stores parameters and local variables of functions |
| Memory Cleanup | Parameters are removed unless they are captured in a closure |

---

Next:
[✅ **1️⃣2️⃣ Temporal Dead Zone (TDZ)**](../Temporal-Dead-Zone/README.md)

Would you like to move on to **Temporal Dead Zone** now?