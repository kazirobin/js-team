Alright, let’s move on to the **Call Stack and LIFO behavior** in JavaScript.

---

### 5️⃣ **Last In First Out (LIFO) – The Call Stack**

JavaScript uses a **Call Stack** to manage the execution of function calls. It works based on the **LIFO (Last In, First Out)** principle.

Think of it like a stack of plates:
- You can only remove (or execute) the top plate (function).
- When a new plate (function) is added, it goes on top.

---

### 🧠 What is the Call Stack?

- A **data structure** that keeps track of **where** the engine is in the code.
- Every time a **function is invoked**, it's pushed onto the stack.
- Once that function finishes executing, it is **popped off** the stack.

---

### 📌 Example:

```javascript
function a() {
  console.log("Inside A");
  b();
}

function b() {
  console.log("Inside B");
  c();
}

function c() {
  console.log("Inside C");
}

a();
```

#### 🔍 Call Stack Process:

1. `a()` is called → pushed to stack  
2. Inside `a()`, `b()` is called → pushed to stack  
3. Inside `b()`, `c()` is called → pushed to stack  
4. `c()` executes and is removed  
5. `b()` completes and is removed  
6. `a()` completes and is removed  

**Output:**
```
Inside A
Inside B
Inside C
```

---

### 🛑 What if the stack overflows?

When too many function calls are pushed without returning, it causes a **Stack Overflow**.

#### Example:
```javascript
function recurse() {
  recurse(); // infinite recursion
}
recurse();
```

You’ll get:
```
Uncaught RangeError: Maximum call stack size exceeded
```

---

### ✅ Summary

| Term        | Meaning                                  |
|-------------|-------------------------------------------|
| Call Stack  | Stores function execution context         |
| LIFO        | Last In → First Out                      |
| Overflow    | Happens when the stack grows too large    |

---

Next up:
[> ✅ **6️⃣ Function Declaration**](../Function-Declaration/README.md)

Ready for the next one?