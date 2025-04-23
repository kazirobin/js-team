# 📦 Day 5: Objects & Methods – Full Lecture

## 🚀 Overview
Welcome to Day 5! In this lesson, we will explore JavaScript **Objects & Methods**, how to create, manipulate, clone, and work with `this`, including real-world practices and key interview questions.

---

## 📚 Table of Contents
1. [Introduction to Objects](#1-introduction-to-objects)
2. [Creating Objects & Properties](#2-creating-objects--properties)
3. [Adding Methods to Objects](#3-adding-methods-to-objects)
4. [The `this` Keyword](#4-the-this-keyword)
5. [Cloning Objects Properly](#5-cloning-objects-properly)
6. [Garbage Collection in JavaScript](#6-garbage-collection-in-javascript)
7. [Object Methods & `this`](#7-object-methods--this)
8. [Practice: Mini Shopping Cart Object](#8-practice-mini-shopping-cart-object)
9. [Interview Questions](#9-interview-questions)
10. [Useful Links & Resources](#10-useful-links--resources)

---

## ✅ 1. Introduction to Objects

### 🧠 What is an Object?
An **object** is a non-primitive data type in JavaScript that allows you to store multiple values as **key-value pairs**. It can include **properties (data)** and **methods (functions)**.

### 📦 Real-world Analogy:
Imagine an object as a **car**:
```js
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};
```
- `brand`, `model`, `year` are property keys.
- The assigned values (`"Toyota"`, etc.) are the values.

Objects are dynamic, extensible, and versatile for modeling data.

---

## ✅ 2. Creating Objects & Properties

### 🛠️ Ways to Create Objects

#### a) Object Literal (Recommended)
```js
let user = {
  name: "Alice",
  age: 25
};
```

#### b) Constructor Function
```js
function User(name, age) {
  this.name = name;
  this.age = age;
}
let user1 = new User("Bob", 30);
```

#### c) `new Object()`
```js
let user = new Object();
user.name = "Alice";
```

#### d) `Object.create()`
```js
let person = {
  greet() {
    console.log("Hello!");
  }
};
let john = Object.create(person);
john.name = "John";
```

### 🎯 Dynamic Property Addition
```js
user.email = "alice@example.com";
```

---

## ✅ 3. Adding Methods to Objects

### 🔄 Method = Function as Property
```js
let person = {
  name: "John",
  greet: function () {
    console.log("Hi, I'm " + this.name);
  }
};
person.greet(); // "Hi, I'm John"
```

### ✅ Modern Syntax (ES6)
```js
let person = {
  name: "Jane",
  greet() {
    console.log("Hi, I'm " + this.name);
  }
};
```

Methods can also return values or perform calculations.

---

## ✅ 4. The `this` Keyword

### 📌 `this` refers to the calling object
```js
let user = {
  name: "Emma",
  greet() {
    console.log(this.name);
  }
};
user.greet(); // "Emma"
```

### ⚠️ Arrow Functions & `this`
Arrow functions inherit `this` from the surrounding scope. They do not bind their own `this`.

```js
let user = {
  name: "Jake",
  greet: () => {
    console.log(this.name); // undefined
  }
};
```

Use normal functions for methods if you need `this` to refer to the object.

---

## ✅ 5. Cloning Objects Properly

### ❌ Shallow Copy (Reference Copy)
```js
let obj1 = { name: "Leo" };
let obj2 = obj1;
obj2.name = "Max";
console.log(obj1.name); // "Max"
```

### ✅ Deep Copy (Independent Copy)

#### Using `Object.assign()`
```js
let user = { name: "Lily" };
let clone = Object.assign({}, user);
```

#### Using Spread Operator
```js
let clone = { ...user };
```

#### Deep Clone with `structuredClone()` (for nested objects)
```js
let deepClone = structuredClone(user);
```

> 📝 Note: JSON methods (`JSON.parse(JSON.stringify(obj))`) are also used but don’t support functions, `undefined`, or circular references.

---

## ✅ 6. Garbage Collection in JavaScript

### 🧹 What is it?
Garbage collection is JavaScript’s automatic memory management. When an object is no longer referenced, it's removed from memory.

```js
let user = { name: "David" };
user = null; // now eligible for garbage collection
```

### 🔍 Key Points
- JavaScript uses **mark-and-sweep** algorithm.
- You can't manually force GC.
- Always avoid memory leaks (e.g. unreferenced DOM nodes).

---

## ✅ 7. Object Methods & `this`

### 🧠 Method Recap
```js
let dog = {
  name: "Rocky",
  bark() {
    console.log(`${this.name} says Woof!`);
  }
};
dog.bark(); // "Rocky says Woof!"
```

You can also pass methods between objects or extract them, but `this` might change depending on the caller context.

---

## ✅ 8. Practice: Mini Shopping Cart Object

### 🧪 Task:
Create an object that acts like a shopping cart.

### 💡 Requirements:
- An array `items` to store added products
- Method `addItem(product)` to push into items
- Method `removeItem(name)` to filter by name
- Method `total()` to return the total cost

### ✅ Example:
```js
let cart = {
  items: [],
  addItem(product) {
    this.items.push(product);
  },
  removeItem(productName) {
    this.items = this.items.filter(p => p.name !== productName);
  },
  total() {
    return this.items.reduce((sum, p) => sum + p.price, 0);
  }
};

cart.addItem({ name: "Shirt", price: 20 });
cart.addItem({ name: "Pants", price: 30 });
cart.removeItem("Shirt");
console.log(cart.total()); // 30
```

---

## ✅ 9. Interview Questions

1. What is the difference between an object and an array?
2. How does `this` behave in different contexts?
3. What is the difference between shallow and deep copy?
4. Can functions be properties in JavaScript?
5. What are the ways to clone an object?
6. What are the use cases for `Object.create()`?
7. How does garbage collection work?
8. Explain constructor functions and how they differ from object literals.
9. How do arrow functions affect `this`?
10. Can you give an example of a method that uses `this` correctly?

---

## ✅ 10. Useful Links & Resources

- [MDN: Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [MDN: Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [MDN: Garbage Collection](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
- [JavaScript.info: Object Methods, `this`](https://javascript.info/object-methods)
- [NodeJS Docs: structuredClone](https://nodejs.org/api/globals.html#structuredclonevalue)

---

Would you like to turn this into a **PDF**, **Google Slides**, or include **class assignments** next?

