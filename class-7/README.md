# JavaScript LocalStorage - Full Guide

---

## 1. What is Local Storage?

- **Local Storage** is a built-in web storage object that allows you to store data **in the browser**.
- Data stored in `localStorage` is **saved even after the browser is closed** (persistent storage).
- Only **strings** can be stored (not objects or arrays directly — you must serialize/deserialize with `JSON`).

---

## 2. Basic Methods

| Method | Purpose |
| :--- | :--- |
| `localStorage.setItem(key, value)` | Save data |
| `localStorage.getItem(key)` | Read data |
| `localStorage.removeItem(key)` | Delete one item |
| `localStorage.clear()` | Delete all items |
| `localStorage.key(index)` | Get the key name at a specific index |
| `localStorage.length` | Find how many items are stored |

---

## 3. How to Use LocalStorage

### 3.1 Set an item

```javascript
localStorage.setItem('username', 'JohnDoe');
```
- Stores a key (`username`) with the value (`JohnDoe`).

---

### 3.2 Get an item

```javascript
const username = localStorage.getItem('username');
console.log(username); // Output: JohnDoe
```

---

### 3.3 Remove an item

```javascript
localStorage.removeItem('username');
```
- Deletes the `username` item from storage.

---

### 3.4 Clear all items

```javascript
localStorage.clear();
```
- Deletes **everything** from localStorage!

---

### 3.5 Update/Edit an item

```javascript
localStorage.setItem('username', 'JaneDoe');
```
- Setting an item with the same `key` updates the old value.

---

## 4. Important: Storing Objects and Arrays

- localStorage **only saves strings**.
- To save objects or arrays, you need to **convert them into strings** using `JSON.stringify()`.

### Storing an object

```javascript
const user = {
  name: 'John',
  age: 25
};

localStorage.setItem('user', JSON.stringify(user));
```

### Reading an object

```javascript
const userData = JSON.parse(localStorage.getItem('user'));
console.log(userData.name); // Output: John
console.log(userData.age);  // Output: 25
```

---

## 5. Check if a Key Exists

```javascript
if (localStorage.getItem('username') !== null) {
  console.log('Username exists in localStorage.');
} else {
  console.log('No username found.');
}
```

---

## 6. List All Keys and Values in LocalStorage

```javascript
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  console.log(`${key}: ${value}`);
}
```

---

## 7. Practical Examples

### 7.1 Save Theme Preference (Light / Dark Mode)

```javascript
// Save theme
localStorage.setItem('theme', 'dark');

// Later retrieve it
const theme = localStorage.getItem('theme');
document.body.className = theme;
```

---

### 7.2 Save a List of Items (like a Shopping Cart)

```javascript
const cart = ['apple', 'banana', 'cherry'];

// Save to localStorage
localStorage.setItem('cart', JSON.stringify(cart));

// Get from localStorage
const savedCart = JSON.parse(localStorage.getItem('cart'));
console.log(savedCart); // ['apple', 'banana', 'cherry']
```

---

## 8. Best Practices

- Always **check if data exists** before using it (`getItem` might return `null`).
- Always **parse** with `JSON.parse()` when expecting an object or array.
- Try to **namespace your keys** (e.g., `app_user`, `app_theme`) to avoid conflicts.
- Avoid saving **sensitive information** like passwords in localStorage (security risk).
- If saving large or complex data, consider **IndexedDB** instead (localStorage is simple and small).

---

## 9. Full Example Project: Save a User Profile

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Save User Profile</title>
</head>
<body>
  <h1>Profile Saver</h1>

  <input type="text" id="name" placeholder="Enter Name">
  <input type="number" id="age" placeholder="Enter Age">
  <button id="save">Save Profile</button>

  <script>
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const saveButton = document.getElementById('save');

    saveButton.addEventListener('click', () => {
      const profile = {
        name: nameInput.value,
        age: ageInput.value
      };

      localStorage.setItem('profile', JSON.stringify(profile));
      alert('Profile Saved!');
    });

    // Load existing profile
    window.addEventListener('load', () => {
      const savedProfile = JSON.parse(localStorage.getItem('profile'));
      if (savedProfile) {
        nameInput.value = savedProfile.name;
        ageInput.value = savedProfile.age;
      }
    });
  </script>
</body>
</html>
```

---

# 10. Quick Cheatsheet

```javascript
// Save
localStorage.setItem('key', 'value');

// Read
localStorage.getItem('key');

// Delete one
localStorage.removeItem('key');

// Delete all
localStorage.clear();

// Save object
localStorage.setItem('obj', JSON.stringify({name: 'John'}));

// Read object
JSON.parse(localStorage.getItem('obj'));
```

---

# Done!  
You are now a master of localStorage!

---