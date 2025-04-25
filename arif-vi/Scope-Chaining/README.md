Awesome! Let’s dive into **scope chaining** — one of the core concepts that makes JavaScript magic (and sometimes confusing) 🧙‍♂️

---

### 8️⃣ **Scope Chaining – Own Memory || Parent Memory**

In JavaScript, **scope** determines where variables and functions are accessible. When a variable is referenced, JavaScript **first looks in the current (own) scope**, and if it doesn’t find it, it **“chains up” to the parent scope**, continuing this process until it hits the global scope.

This is called the **Scope Chain**.

---

### 🧠 Breakdown:

#### ➤ Each function has its own **execution context**
- Which has:
  - A **variable environment** (its own memory)
  - A **reference to its parent’s environment**

---

### 📌 Example:

```javascript
let name = "Global";

function outer() {
  let name = "Outer";

  function inner() {
    console.log(name); // What will this print?
  }

  inner();
}

outer();
```

**Output:**
```
Outer
```

### 🔍 What Happened?

1. `inner()` tried to find `name` in **its own memory** → ❌ Not found
2. It looked up to `outer()`'s memory → ✅ Found: `"Outer"`
3. It didn’t need to go to the global scope

---

### 🧱 Scope Chain in Action

```javascript
function a() {
  let x = 10;

  function b() {
    let y = 20;

    function c() {
      console.log(x, y); // Scope chain to b and a
    }

    c();
  }

  b();
}
a();
```

**Output:**
```
10 20
```

- `c()` looks for `x` → Not found in `c`, goes to `b` → Not found, goes to `a` → ✅ Found!
- Same for `y`, found in `b`.

---

### ⚠️ Important:
> JavaScript **does not look downward** — a parent can’t access variables from a child scope.

---

### 🧠 Visualize It Like a Chain:

```
c()
 ↑
b()
 ↑
a()
 ↑
Global
```

Each function **closes over** its outer environment.

---

### ✅ Summary Table:

| Term               | Description                                        |
|--------------------|----------------------------------------------------|
| Scope              | Where variables/functions are accessible           |
| Local Scope        | Variables inside a function                        |
| Global Scope       | Variables outside any function                     |
| Scope Chain        | JS looks up the parent scopes if it can't resolve |
| Own Memory         | Current function’s variables                       |
| Parent Memory      | Outer scope’s variables                            |

---

> Next up:  
[✅ **9️⃣ Lexical Environment** — the powerhouse behind closures, scope chains, and more.](../Lexical-Environment/README.md)

Shall we roll into it?