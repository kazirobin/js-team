# Advanced Array Methods: `map()`, `filter()`, `reduce()`, and `sort()`

These methods are powerful tools for working with arrays in JavaScript, allowing you to modify, search, and analyze array data efficiently. Let's explore each one in detail with examples, interview questions, and tasks.

## 1. `map()`

The `map()` method creates a new array by applying a function to each element of the original array.

### Syntax:
```javascript
array.map(function(currentValue, index, arr), thisValue)
```

### Example:
```javascript
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16]
```

### Interview Questions:
1. How does `map()` differ from `forEach()`?
2. Can you chain `map()` with other array methods? Show an example.
3. How would you use `map()` to convert an array of objects to an array of specific properties?

### Task:
Given an array of temperatures in Celsius, use `map()` to convert them to Fahrenheit (F = C × 9/5 + 32).

```javascript
const celsiusTemps = [0, 10, 20, 30];
// Your solution here
```

## 2. `filter()`

The `filter()` method creates a new array with all elements that pass a test implemented by the provided function.

### Syntax:
```javascript
array.filter(function(currentValue, index, arr), thisValue)
```

### Example:
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6]
```

### Interview Questions:
1. How would you use `filter()` to remove falsy values from an array?
2. Can you combine `filter()` and `map()`? Show an example.
3. How would you filter an array of objects based on multiple conditions?

### Task:
Given an array of products, filter out products that are out of stock (quantity: 0) or priced above $100.

```javascript
const products = [
  { name: 'Laptop', price: 999, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 49, inStock: true },
  { name: 'Monitor', price: 150, inStock: true }
];
// Your solution here
```

## 3. `reduce()`

The `reduce()` method executes a reducer function on each element of the array, resulting in a single output value.

### Syntax:
```javascript
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

### Example:
```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
```

### Interview Questions:
1. How would you use `reduce()` to flatten a nested array?
2. Can you implement `map()` or `filter()` using `reduce()`?
3. How would you find the maximum value in an array using `reduce()`?

### Task:
Given an array of transactions, calculate the total balance (sum of deposits minus sum of withdrawals).

```javascript
const transactions = [
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 50 },
  { type: 'deposit', amount: 200 },
  { type: 'withdrawal', amount: 30 }
];
// Your solution here
```

## 4. `sort()`

The `sort()` method sorts the elements of an array in place and returns the sorted array.

### Syntax:
```javascript
array.sort(compareFunction)
```

### Example:
```javascript
const numbers = [3, 1, 4, 2];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4]
```

### Interview Questions:
1. Why does `sort()` without a compare function produce unexpected results for numbers?
2. How would you sort an array of objects by a specific property?
3. How would you implement a case-insensitive sort for strings?

### Task:
Sort an array of people objects by age in descending order. If ages are equal, sort alphabetically by name.

```javascript
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 22 }
];
// Your solution here
```

## Combined Example

Let's see how these methods can work together:

```javascript
const employees = [
  { name: 'John', department: 'Sales', salary: 45000 },
  { name: 'Jane', department: 'IT', salary: 75000 },
  { name: 'Mike', department: 'Sales', salary: 50000 },
  { name: 'Emily', department: 'HR', salary: 40000 },
  { name: 'Dave', department: 'IT', salary: 80000 }
];

// Get names of IT employees with salary > 70000, sorted alphabetically
const result = employees
  .filter(emp => emp.department === 'IT' && emp.salary > 70000)
  .map(emp => emp.name)
  .sort();

console.log(result); // ['Dave', 'Jane']
```

## Practical Task

**Problem:** Analyze a dataset of books to:
1. Filter books published after 2000
2. Extract titles and authors in the format "Title by Author"
3. Sort them alphabetically by title
4. Calculate the average rating of these books

```javascript
const books = [
  { title: 'Book A', author: 'Author 1', year: 1998, rating: 4.2 },
  { title: 'Book B', author: 'Author 2', year: 2005, rating: 4.5 },
  { title: 'Book C', author: 'Author 3', year: 2001, rating: 3.9 },
  { title: 'Book D', author: 'Author 4', year: 2010, rating: 4.8 },
  { title: 'Book E', author: 'Author 5', year: 1995, rating: 3.5 }
];

// Your solution here
```

## Solutions

### map() Task Solution:
```javascript
const fahrenheitTemps = celsiusTemps.map(c => c * 9/5 + 32);
console.log(fahrenheitTemps); // [32, 50, 68, 86]
```

### filter() Task Solution:
```javascript
const availableProducts = products.filter(
  product => product.inStock && product.price <= 100
);
console.log(availableProducts);
// [{ name: 'Keyboard', price: 49, inStock: true }]
```

### reduce() Task Solution:
```javascript
const balance = transactions.reduce((acc, transaction) => {
  return transaction.type === 'deposit' 
    ? acc + transaction.amount 
    : acc - transaction.amount;
}, 0);
console.log(balance); // 220
```

### sort() Task Solution:
```javascript
people.sort((a, b) => {
  if (a.age === b.age) {
    return a.name.localeCompare(b.name);
  }
  return b.age - a.age;
});
console.log(people);
/*
[
  { name: 'Alice', age: 30 },
  { name: 'Charlie', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'David', age: 22 }
]
*/
```

### Practical Task Solution:
```javascript
// Filter books published after 2000
const recentBooks = books.filter(book => book.year > 2000);

// Extract titles and authors
const bookInfo = recentBooks.map(book => `${book.title} by ${book.author}`);

// Sort alphabetically by title
bookInfo.sort();

// Calculate average rating
const averageRating = recentBooks.reduce((sum, book) => sum + book.rating, 0) / recentBooks.length;

console.log('Book list:', bookInfo);
console.log('Average rating:', averageRating.toFixed(2));
/*
Book list: [
  "Book B by Author 2",
  "Book C by Author 3",
  "Book D by Author 4"
]
Average rating: 4.40
*/
```

These array methods are fundamental to modern JavaScript development, and mastering them will significantly improve your ability to work with data efficiently.