# 🚀 Day 1: Introduction to JavaScript Basics

## 📚 Let’s Understand JavaScript

### 🔸 What is JavaScript?
- JavaScript is the **language of the web** 🌐
- It runs in the **browser** (Chrome, Firefox, etc.)
- It makes websites **interactive**
- Works with **HTML & CSS**
- It's **lightweight**, **fast**, and **interpreted**



### 🔸 Where Does It Run?
- On **browsers** (Client-side)
- On **servers** with Node.js (we’ll learn later)


## 🧰 Getting Set Up (Super Easy!)

### ✅ You Need:
- [ ] **Google Chrome**
- [ ] **VS Code** (code editor)
- [ ] (Optional) **Node.js** (for later)
- [ ] Enable DevTools: Right-click → Inspect → **Console tab**
  - Shortcut: `Ctrl + Shift + I` or `F12`

## 🎯 What You’ll Learn Today:
- Why JavaScript is essential in web development
- How JS works inside a webpage
- Difference between `console.log()` and `alert()`
- How to interact with users using simple input/output


## ❓ Questions & Answers

### Q1: What is JavaScript used for?
**A:** JavaScript is used to add behavior and interactivity to websites, like popups, forms, animations, and real-time updates.

### Q2: What’s the difference between `console.log()` and `alert()`?
**A:** - `console.log()` displays messages in the browser's console (for developers).
- `alert()` shows a popup box to users.

### Q3: What does `prompt()` do?
**A:** It opens a dialog box where the user can type input. It returns the user’s input as a string.

### Q4: What does `confirm()` do?
**A:** It opens a dialog box with OK/Cancel and returns `true` if OK is pressed, `false` otherwise.

### Q5: Can we write JS inside an HTML file?
**A:** Yes. You can include JS code inside `<script>` tags directly within your HTML file.



## 👨‍💻 Live Coding Demo  
>  Playground: [js-team.tiiny.site](https://js-team.tiiny.site)


### 🔹 1. Console Log: Output to console
```javascript
console.log("Hello, JavaScript!");

```

#### 🔹 2. Alert: Show popup message
```javascript
alert("Welcome to Day 1!");
```

#### 🔹 3. Prompt: Ask user input
```javascript
let name = prompt("What is your name?");
console.log("User name is:", name);
```

#### 🔹 4. Confirm: Confirm action
```javascript
let confirmLeave = confirm("Do you want to leave this page?");
console.log("User decision:", confirmLeave);
```


### 📋 **Hands-on Task **

> 👨‍💻 Task: Create a simple script that:
1. Open your browser and press `F12` to open the console.
2. Asks name using `prompt`,Asks age
3. Shows welcome message using `alert`
4. Logs everything in `console`

```javascript
console.log("Hi", userName);
console.log("User Name: " + name);
console.log("User Age: " + age);
alert("Welcome to Day 1!");
alert("Welcome, " + name + "!");
let userName = prompt("What's your name?");
let name = prompt("What is your name?");
let age = prompt("How old are you?");
let proceed = confirm("Shall we start learning JavaScript?");
console.log("User said:", proceed);
```


## 📝 Extra Tips
- Typing `console.log` wrong
- Always use `console.log()` to debug your code.
- JS is case-sensitive: `let`, `Let`, and `LET` are different.
- Start learning by writing small scripts and testing in the console.
- Not opening DevTools → Emphasize keyboard shortcut: `Ctrl + Shift + I`

## 🔗 Useful Resources
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [W3Schools JS Tutorial](https://www.w3schools.com/js/)

Happy coding! 🚀