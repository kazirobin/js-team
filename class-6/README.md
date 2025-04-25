Here’s your **Day 6** and **Day 7** JavaScript learning breakdown with summaries, explanations, and mini-practice ideas to make your study effective and fun!

---

## ✅ **Day 6: Arrays & Iteration** 📚

### 🔍 What You’ll Learn:

#### 1. **Create and Manage Arrays**
```js
const fruits = ["apple", "banana", "orange"];
```

#### 2. **Common Array Methods**
| Method   | Description                        |
|----------|------------------------------------|
| `push()` | Add to end                         |
| `pop()`  | Remove from end                    |
| `shift()`| Remove from start                  |
| `unshift()` | Add to start                   |

```js
fruits.push("mango");     // ["apple", "banana", "orange", "mango"]
fruits.pop();             // removes "mango"
```

#### 3. **Loops**
- **for loop**
```js
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```
- **for...of**
```js
for (let fruit of fruits) {
  console.log(fruit);
}
```
- **forEach**
```js
fruits.forEach(fruit => console.log(fruit));
```

---

### 💻 **Practice: To-Do List (Array Style)**
```js
let todoList = [];

function addTask(task) {
  todoList.push(task);
}

function completeTask() {
  todoList.shift(); // or pop()
}

addTask("Study JS");
addTask("Read book");
completeTask();

console.log(todoList);
```

---

## ✅ **Day 7: Advanced Array Methods** 💡

### 🔍 What You’ll Learn:

#### 1. **map()**
Transforms array items
```js
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // [2, 4, 6]
```

#### 2. **filter()**
Returns items that match condition
```js
const even = numbers.filter(num => num % 2 === 0); // [2]
```

#### 3. **reduce()**
Reduce array to a single value
```js
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 6
```

#### 4. **sort()**
Sorts alphabetically by default
```js
const unsorted = [3, 1, 2];
unsorted.sort((a, b) => a - b); // [1, 2, 3]
```

---

### 💻 **Practice: Expense Tracker**
```js
const expenses = [
  { item: "coffee", amount: 3 },
  { item: "books", amount: 10 },
  { item: "snacks", amount: 5 }
];

// Filter small expenses
const smallExpenses = expenses.filter(e => e.amount <= 5);

// Total spent
const total = expenses.reduce((sum, e) => sum + e.amount, 0);

console.log("Small:", smallExpenses);
console.log("Total Spent: $", total);
```

---

Would you like me to give you small challenges or quizzes based on these days? Or maybe a visual explanation of how map/filter/reduce work?