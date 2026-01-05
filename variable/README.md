var, let, ও const এর মধ্যে পার্থক্য

১. স্কোপ (Scope)

· var: ফাংশন-স্কোপ (Function-scoped)
  ```javascript
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 (কারণ var ব্লক-স্কোপ মানে না)
  ```
· let & const: ব্লক-স্কোপ (Block-scoped)
  ```javascript
  if (true) {
    let y = 20;
    const z = 30;
  }
  console.log(y); // ReferenceError
  console.log(z); // ReferenceError
  ```

২. রিডিক্লেয়ার (Redeclare)

· var: একই স্কোপে রিডিক্লেয়ার করা যায়
  ```javascript
  var a = 5;
  var a = 10; // No error
  ```
· let & const: একই স্কোপে রিডিক্লেয়ার করা যায় না
  ```javascript
  let b = 5;
  let b = 10; // SyntaxError
  ```

৩. হোইস্টিং (Hoisting)

· var: হোইস্টিং হয়, undefined হিসেবে ইনিশিয়ালাইজড
  ```javascript
  console.log(c); // undefined
  var c = 5;
  ```
· let & const: হোইস্টিং হয় কিন্তু "টেম্পরাল ডেড জোন" থাকে
  ```javascript
  console.log(d); // ReferenceError
  let d = 5;
  ```

৪. আপডেট (Update)

· var & let: মান আপডেট করা যায়
  ```javascript
  let e = 5;
  e = 10; // Valid
  ```
· const: মান আপডেট করা যায় না (প্রিমিটিভ টাইপের জন্য)
  ```javascript
  const f = 5;
  f = 10; // TypeError
  ```

৫. ইনিশিয়ালাইজেশন (Initialization)

· var & let: বিনা মানে ডিক্লেয়ার করা যায়
  ```javascript
  let g; // Valid
  ```
· const: ডিক্লেয়ারেশনের সময় মান দিতে হয়
  ```javascript
  const h; // SyntaxError
  ```

কখন কোনটা ব্যবহার করবো?

const (সবচেয়ে বেশি ব্যবহৃত)

· যখন ভ্যালু পরিবর্তন করার দরকার নেই
· অ্যারে, অবজেক্ট (রেফারেন্স ঠিক রাখতে)
· মডার্ন জাভাস্ক্রিপ্টে ডিফল্ট চয়েস

```javascript
const PI = 3.1416;
const colors = ['red', 'green'];
const user = { name: 'John' };
```

let (দ্বিতীয় সর্বাধিক ব্যবহৃত)

· লুপ ভেরিয়েবলে
· কন্ডিশনাল ব্লকে
· মান পরিবর্তন করতে হবে এমন ক্ষেত্রে

```javascript
for (let i = 0; i < 5; i++) {
  // i শুধু এই ব্লকে এক্সেস করা যাবে
}
```

var (এখন কম ব্যবহৃত)

· লেগেসি কোডে
· গ্লোবাল স্কোপ দরকার হলে (কিন্তু সাধারণত এড়িয়ে চলা ভালো)
· ES6 এর পর থেকে let/const ব্যবহারের সুপারিশ করা হয়

মেমোরি পার্থক্য:

const রেফারেন্স কনস্ট্যান্ট - অ্যারে/অবজেক্টের ক্ষেত্রে ভেরিয়েবল অন্য অবজেক্টকে রেফার করতে পারবে না, কিন্তু অবজেক্টের প্রোপার্টি পরিবর্তন করা যায়।

```javascript
const arr = [1, 2];
arr.push(3); // ✅ Valid
arr = [4, 5]; // ❌ Error
```

বেস্ট প্র্যাকটিস:

1. ডিফল্ট হিসেবে const ব্যবহার করুন
2. যখন মান বদলাবেই, শুধু তখন let ব্যবহার করুন
3. var এড়িয়ে চলুন (বিশেষ ক্ষেত্র ছাড়া)

এটি কোডকে বেশি প্রেডিক্টেবল এবং বাগ-ফ্রি রাখতে সাহায্য করে।
