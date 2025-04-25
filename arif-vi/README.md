Here’s a comprehensive table summarizing the JavaScript topics you mentioned, plus a few additional ones to provide a clearer and deeper understanding of how JavaScript works internally:

---

### 🔍 JavaScript Concepts Summary Table

| #  | Topic                                | Description                                                                 |
|----|--------------------------------------|-----------------------------------------------------------------------------|
| 1  | JavaScript is not multi-threaded     | JS is single-threaded, uses an event loop for concurrency                   |
| 2  | How to execute JS code               | Running JS via browser, Node.js, online editors                            |
| 3  | How JS code works                    | Compilation + Execution (JS Engine - Call Stack, Heap, Event Loop)         |
| 4  | Memory leaking problem               | Unused memory not garbage collected due to lingering references            |
| 5  | Last In First Out (LIFO)             | Call stack uses LIFO structure                                              |
| 6  | Function declaration                 | Creating a function using `function` keyword                               |
| 7  | Function invocation                  | Calling a function to execute its code                                     |
| 8  | Scope chaining (own & parent memory) | Resolving variables via local scope → outer scope → global scope           |
| 9  | Lexical environment                  | Environment where a function is defined (not called)                       |
| 10 | Scope, Scope Chain, Lexical Env, Hoisting | Fundamental concepts of how JS variables/functions are resolved         |
| 11 | How parameters are stored            | Stored in function’s execution context (local memory)                      |
| 12 | Temporal Dead Zone (TDZ)             | Time between block creation & `let`/`const` initialization                 |
| 13 | Call Stack                           | Tracks function calls in LIFO order                                        |
| 14 | Event Loop & Callback Queue          | Enables async operations like setTimeout, fetch, etc.                      |
| 15 | Closures                             | Functions "remember" variables from outer scope even after execution       |
| 16 | Garbage Collection                   | JS engine automatically frees memory that's no longer used                 |

---

Now, let's dive deep into each topic with examples and clear breakdowns. I’ll start with the first one and explain them in order. Let me know if you'd like the explanations all at once or step-by-step. Here’s the first:

---

### 1️⃣ Why JavaScript is Not Multi-Threaded

JavaScript is **single-threaded**, meaning it executes one operation at a time on a **single call stack**. It was originally designed to run in the browser to provide interactive web pages, where **concurrency was not a primary concern**.

However, JS handles asynchronous operations (like API calls, timers, etc.) using the **Event Loop**, **Web APIs**, and **Callback Queue**—allowing it to be **non-blocking** while still being single-threaded.

#### Example:
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Callback after 2 sec");
}, 2000);

console.log("End");
```

**Output:**
```
Start
End
Callback after 2 sec
```

Although `setTimeout` seems to run in parallel, the **timer is handled outside the main thread** (via browser’s Web API), and the callback is pushed back to the call stack **after 2 seconds**, enabling the illusion of multi-threading.

#### So what is “multi-threading”?
It means running multiple pieces of code at the same time, literally. JavaScript doesn’t do this natively, but modern environments (like browsers) provide **Web Workers** and **Service Workers** that offer real multi-threading capabilities.

---

 
[**2️⃣ How to Execute JS Code**](./Execute-JS-Code/README.md)
