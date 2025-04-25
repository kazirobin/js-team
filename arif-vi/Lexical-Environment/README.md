Perfect — let’s explore one of the most important building blocks of JavaScript's inner workings:

---

### 9️⃣ **Lexical Environment**

A **Lexical Environment** is the internal structure JavaScript uses to manage **scope**, **variable resolution**, and **closures**. It’s created **every time a function (or block) is executed**.

---

### 📌 What Is It?

At its core, a Lexical Environment is a **pair of two things**:

1. **Environment Record**  
   → This stores all the local variables/functions inside the current scope.

2. **Outer (Parent) Lexical Environment Reference**  
   → A reference to the surrounding (parent) environment, allowing scope chaining.

---

### 🧠 Why "Lexical"?

Because it’s based on the **physical placement of your code (lexical structure)** — where the function is written, **not where it’s called from**.

---

### ✅ Example:

```javascript
function outer() {
  let a = 10;

  function inner() {
    let b = 20;
    console.log(a + b);
  }

  inner();
}

outer();
```

#### Lexical Environment Chain:
- `inner()` has access to:
  - Its **own environment** → `b = 20`
  - Its **outer (lexical) environment** → `a = 10`
- So `inner()` can access `a`, because it was **defined inside `outer()`**.

---

### 🧠 Behind the Scenes

When `inner()` is created, JavaScript **remembers** its surrounding environment (i.e., `outer()`'s variables). This is the **lexical environment**.

```text
inner() {
  Lexical Env = {
    b: 20,
    Outer: outer {
      a: 10,
      Outer: global
    }
  }
}
```

---

### 🔁 Lexical vs Dynamic Scope (for comparison):

| Concept             | Lexical Scope (JavaScript)        | Dynamic Scope (Not JS) |
|---------------------|------------------------------------|-------------------------|
| Based on            | Where function is **defined**       | Where function is **called** |
| Variable Resolution | Determined **at compile time**      | Determined **at run time** |
| Language Examples   | JS, Python, C++                     | Bash, Perl              |

---

### ✅ Real World Closure Example:

```javascript
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const inc = counter();
inc(); // 1
inc(); // 2
```

Here, the inner function retains access to `count` even after `counter()` is done — thanks to its **lexical environment**!

---

### Summary:

| Term                  | Meaning                                                             |
|------------------------|----------------------------------------------------------------------|
| Lexical Environment    | Where variables are stored when a function/block is defined         |
| Environment Record     | Current memory (variables/functions declared in that scope)         |
| Outer Reference        | Link to the parent lexical environment                              |
| Lexical Scope          | Determined by physical placement of code                            |

---

Next:
[✅ **🔟 Scope vs Scope Chain vs Lexical Environment vs Hoisting**  ](../Scope-vs-Scope-Chain-vs-Lexical-Environment-vs-Hoisting/README.md)
This one brings everything together. Want to continue?