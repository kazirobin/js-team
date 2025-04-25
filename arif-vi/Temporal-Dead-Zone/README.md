Let’s dive into **Temporal Dead Zone (TDZ)** — this is a quirky part of JavaScript that can be a bit tricky to grasp, but understanding it is key to mastering the behavior of `let` and `const`.

---

### 1️⃣2️⃣ **Temporal Dead Zone (TDZ)**

The **Temporal Dead Zone (TDZ)** refers to the time period between the **start of a block** (or function) and when a variable is **initialized** with `let` or `const`. During this period, the variable **exists in the environment** but cannot be accessed yet.

This is especially important with `let` and `const` because they are **hoisted** but are **not initialized** until their definition is reached in the code.

---

### 📌 What Happens in TDZ?

1. **Hoisting** occurs for variables declared with `let` and `const` — but they **don't have a value** until their declaration is executed.
2. If you **try to access them before their declaration** (in the TDZ), JavaScript throws a **ReferenceError**.
3. Once the declaration is reached, the variable **can be accessed** and behaves as expected.

---

### ✅ Example:

```javascript
console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization
let x = 10;
```

In this case:
- `x` is hoisted, but the reference is not available until it’s initialized on the line `let x = 10;`.
- The **TDZ** lasts from the start of the script until the variable is initialized.

---

### 🧠 Why Does TDZ Happen?

- With `var`, there’s **no TDZ** because the variable is hoisted **with its value** set to `undefined`. 
- With `let` and `const`, the variable is hoisted, but JavaScript keeps it in an **uninitialized state** to prevent you from accidentally accessing it before it’s set.

---

### ✅ Another Example with `const`:

```javascript
function example() {
  console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
  const a = 5;
}

example();
```

Here, trying to access `a` before its declaration causes a **ReferenceError**.

---

### 🧑‍🔬 Example of Correct Usage:

```javascript
function correctExample() {
  let b = 20;
  console.log(b); // ✅ 20
}

correctExample();
```

This works because the `let` variable `b` is initialized and accessible once the declaration line is executed.

---

### 📌 Important Notes:

- **TDZ applies to `let` and `const`, not `var`.**
- **Accessing variables in TDZ is a common source of errors** — it's easy to forget that `let` and `const` behave differently than `var`.

---

### 🧠 Summary of TDZ:

| Concept            | Description                                            |
|--------------------|--------------------------------------------------------|
| Temporal Dead Zone | Time between declaration and initialization           |
| Affected By        | Variables declared with `let` and `const`              |
| Behavior           | Accessing variables before initialization throws a `ReferenceError` |
| Not Affected By    | Variables declared with `var` (they are hoisted with `undefined`) |

---

### Next:
[> ✅ **1️⃣3️⃣ Putting It All Together (Scope, TDZ, Hoisting, Lexical Environment)**](../Putting-All(Scope,TDZ,Hoisting,LE/README.md))

Would you like to wrap up with a summary that ties everything together, or would you like to dive into more topics?