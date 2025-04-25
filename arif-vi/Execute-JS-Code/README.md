Great! Let’s continue.

---

### 2️⃣ How to Execute JavaScript Code

JavaScript can be executed in multiple environments, the most common being:

#### ✅ **1. Browser Console**
Every browser comes with DevTools. Open DevTools and go to the "Console" tab.

```javascript
console.log("Hello from the browser!");
```

#### ✅ **2. In HTML File**
You can include JavaScript inside a `<script>` tag in an HTML file:

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      console.log("Hello from HTML!");
    </script>
  </body>
</html>
```

#### ✅ **3. Using Node.js (Backend Execution)**
Install Node.js from [nodejs.org](https://nodejs.org/), then create a `.js` file:

```javascript
// file: app.js
console.log("Hello from Node.js");
```

Run it in terminal:

```bash
node app.js
```

#### ✅ **4. Online Editors**
Web-based tools like:
- [JSFiddle](https://jsfiddle.net)
- [CodePen](https://codepen.io)
- [JSBin](https://jsbin.com)
- [PlayCode](https://playcode.io)

These are great for trying code quickly.

---

### Behind the Scenes

When you run JavaScript, here's what happens:

1. JS Engine (e.g., V8 in Chrome) parses the code.
2. It compiles and creates memory structures (execution contexts).
3. Then it executes the code line-by-line (synchronously unless async is involved).

---

### 3️⃣ How JavaScript Code Works (Behind the Scenes)

When JS code runs, it passes through 3 stages:

#### 📌 Phase 1: Compilation
- Variables and functions are **scanned and stored** in memory.
- This is where **hoisting** happens.

#### 📌 Phase 2: Execution
- Code runs line-by-line.
- Functions get their own execution contexts.
- Values are stored, updated, and returned.

#### Internals: Key Components
| Component        | Role                                                       |
|------------------|------------------------------------------------------------|
| Call Stack        | Manages function calls (LIFO)                             |
| Memory Heap       | Stores objects and data                                   |
| Execution Context | Created when a function runs; holds variables/functions   |
| Lexical Environment | Where a function is physically defined                   |
| Scope Chain       | Chain of environments JS uses to resolve variables        |

#### Example:
```javascript
function greet() {
  let name = "Alice";
  console.log("Hello", name);
}
greet();
```

- Global Execution Context is created.
- `greet()` is stored in memory.
- When `greet()` is called, a new **Function Execution Context** is pushed onto the stack.

---

Let me know if I should continue to:

[> ✅ 4️⃣ Memory Leaking Problem](../Memory-Leaking-Problem/README.md)

Or if you'd like the above turned into a structured visual/notes format (PDF, doc, code comments, etc).