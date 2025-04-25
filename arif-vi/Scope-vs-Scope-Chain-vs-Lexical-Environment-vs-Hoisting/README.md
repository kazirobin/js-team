Awesome — let’s now connect the dots between all the core concepts you’ve been learning. This will **solidify** your understanding and help you visualize how JS operates under the hood.

---

## 🔟 **Scope vs Scope Chain vs Lexical Environment vs Hoisting**

These four concepts **work together** in JavaScript's execution model. Let’s break them down and compare them side by side.

---

### 🔹 1. **Scope**

**Definition:**  
Scope determines **where** in your code you can access a variable.

#### Types of Scope:
| Type         | Example                            |
|--------------|------------------------------------|
| Global Scope | Accessible everywhere              |
| Function Scope | Defined inside a function         |
| Block Scope   | Variables in `{}` like `let`, `const` |

```javascript
let x = 10; // global

function test() {
  let y = 20; // function scope
  if (true) {
    let z = 30; // block scope
    console.log(x, y, z); // ✅ All accessible here
  }
}
```

---

### 🔹 2. **Scope Chain**

**Definition:**  
If a variable isn't found in the current scope, JavaScript looks **up the chain** (parent scopes) until it finds it — or reaches the global scope.

```javascript
function outer() {
  let a = 1;

  function inner() {
    let b = 2;
    console.log(a); // Looks up to outer scope
  }

  inner();
}
outer();
```

🧠 This chain is created by **lexical environments**!

---

### 🔹 3. **Lexical Environment**

**Definition:**  
An internal JS structure that holds:
- Local variables/functions (**environment record**)
- A reference to the **outer lexical environment**

✅ Created for:
- Every function
- Every block (with `let`, `const`)
- Global scope

```javascript
function foo() {
  let x = 100;

  function bar() {
    console.log(x); // Lexical lookup to foo's environment
  }

  bar();
}
foo();
```

---

### 🔹 4. **Hoisting**

**Definition:**  
During the compilation phase, JavaScript **moves (hoists)**:
- Function declarations ✅ (with their body)
- `var` declarations ✅ (but not their value)
- `let` and `const` ❌ (they stay uninitialized until the code runs)

```javascript
console.log(a); // undefined
var a = 10;

console.log(b); // ❌ ReferenceError
let b = 20;
```

---

### 🧠 How They Work Together (Visual Overview):

```
┌──────────────────────────────┐
│ Global Lexical Environment   │ ← created first
│ └── Contains global vars     │
└─────┬────────────────────────┘
      ↓
┌──────────────────────────────┐
│ Function Lexical Environment │ ← created when function runs
│ └── Has its own memory       │
│ └── Points to parent (scope chain) ─┐
└─────────────────────────────────────┘
```

---

### ✅ Comparison Table

| Concept            | Purpose                              | Lifespan            | Notes                                 |
|--------------------|---------------------------------------|----------------------|----------------------------------------|
| Scope              | Controls variable accessibility       | Runtime              | Lexical scope in JS                    |
| Scope Chain        | Chain of parent scopes for lookup     | Runtime              | Formed via lexical environment         |
| Lexical Environment| Internal structure to manage scopes   | Per execution        | Created for every function/block       |
| Hoisting           | Moves declarations to top             | Compile phase        | `let`/`const` not initialized early    |

---

Coming up next:


[✅ **1️⃣1️⃣ How Parameters Are Stored in JS Memory**](../Parameters-Are-Stored/README.md)

Ready to break into memory storage for function parameters?