# JavaScript Objects Practice (25 Questions)

## 1️⃣ Merge two objects.
```sh
Input: { a: 1 }, { b: 2 }
Output: { a: 1, b: 2 }

Input: { x: 5 }, { y: 10 }
Output: { x: 5, y: 10 }
```

## 2️⃣ Convert object keys into an array.
```sh
Input: { name: "John", age: 25 }
Output: ["name", "age"]

Input: { a: 1, b: 2, c: 3 }
Output: ["a", "b", "c"]
```

## 3️⃣ Convert object values into an array.
```sh
Input: { name: "John", age: 25 }
Output: ["John", 25 ]

Input: { x: 10, y: 20, z: 30 }
Output: [10, 20, 30]
```

## 4️⃣ Create a function that takes an object and prints each key with its value.
```sh
Input: { name: "Alice", city: "Delhi" }
Output: name: Alice, city: Delhi

Input: { x: 1, y: 2 }
Output: x: 1, y: 2
```

## 5️⃣ Create a nested object and access a nested value.
```sh
Input: { student: { name: "John", grade: "A" } }
Output: A

Input: { school: { location: { city: "Mumbai" } } }
Output: Mumbai
```

## 6️⃣ Write a function to count the number of keys with string values in an object.
```sh
Input: { a: "apple", b: 1, c: "banana" }
Output: 2

Input: { x: "yes", y: "no", z: true }
Output: 2
```

## 7️⃣ Check if all values in an object are numbers.
```sh
Input: { a: 10, b: 20, c: 30 }
Output: true

Input: { a: 10, b: "ten" }
Output: false
```

## 8️⃣ Swap keys and values of an object.
```sh
Input: { a: 1, b: 2 }
Output: { 1: "a", 2: "b" }

Input: { x: 10, y: 20 }
Output: { 10: "x", 20: "y" }
```

## 9️⃣ Create an object from two arrays: one of keys and one of values.
```sh
Input: keys = ["a", "b"], values = [1, 2]
Output: { a: 1, b: 2 }

Input: keys = ["x", "y"], values = [5, 10]
Output: { x: 5, y: 10 }
```

## 🔟 Create a function to find the key with the highest numeric value.
```sh
Input: { a: 10, b: 50, c: 30 }
Output: b

Input: { x: 100, y: 200, z: 150 }
Output: y
```

## 1️⃣1️⃣ Check if an object is empty.
```sh
Input: {}
Output: true

Input: { name: "John" }
Output: false
```

## 1️⃣2️⃣ Find the number of properties in an object.
```sh
Input: { name: "John", age: 25, grade: "A" }
Output: 3

Input: { x: 1, y: 2, z: 3, w: 4 }
Output: 4
```

## 1️⃣3️⃣ Create a copy of an object.
```sh
Input: { x: 10, y: 20 }
Output: { x: 10, y: 20 }

Input: { a: 1, b: 2 }
Output: { a: 1, b: 2 }
```

## 1️⃣4️⃣ Convert an object to a JSON string.
```sh
Input: { name: "Alice", age: 22 }
Output: '{"name":"Alice","age":22}'

Input: { x: 1, y: true }
Output: '{"x":1,"y":true}'
```

## 1️⃣5️⃣ Convert a JSON string back to an object.
```sh
Input: '{"name":"Alice","age":22}'
Output: { name: "Alice", age: 22 }

Input: '{"x":1,"y":true}'
Output: { x: 1, y: true }
```

## 1️⃣6️⃣ Count how many values are of type string in an object.
```sh
Input: { a: "hi", b: 2, c: "bye" }
Output: 2

Input: { x: "hello", y: "world", z: 3 }
Output: 2
```

## 1️⃣7️⃣ Find all keys whose values are greater than 50.
```sh
Input: { a: 30, b: 60, c: 90 }
Output: ["b", "c"]

Input: { x: 51, y: 49 }
Output: ["x"]
```

## 1️⃣8️⃣ Write a function that checks if two objects have the same keys and values.
```sh
Input: { a: 1, b: 2 }, { a: 1, b: 2 }
Output: true

Input: { a: 1 }, { a: 2 }
Output: false
```

## 1️⃣9️⃣ Create an object to store details of a student (name, age, grade) and print it.
```sh
Input: { name: "John", age: 20, grade: "A" }
Output: John 20 A

Input: { name: "Priya", age: 18, grade: "B" }
Output: Priya 18 B
```

## 2️⃣0️⃣ Add a new key-value pair to an existing object.
```sh
Input: { name: "John" }, new key: age, value: 25
Output: { name: "John", age: 25 }

Input: { x: 5 }, new key: y, value: 10
Output: { x: 5, y: 10 }
```

## 2️⃣1️⃣ Delete a key from an object.
```sh
Input: { name: "John", age: 25 }, delete: age
Output: { name: "John" }

Input: { x: 1, y: 2 }, delete: y
Output: { x: 1 }
```

## 2️⃣2️⃣ Check if a key exists in an object.
```sh
Input: { name: "John" }, check: age
Output: false

Input: { age: 25 }, check: age
Output: true
```

## 2️⃣3️⃣ Loop through all keys in an object and print them.
```sh
Input: { name: "John", age: 25 }
Output: name age

Input: { x: 1, y: 2 }
Output: x y
```

## 2️⃣4️⃣ Loop through all values in an object and print them.
```sh
Input: { name: "John", age: 25 }
Output: John 25

Input: { x: 10, y: 20 }
Output: 10 20
```

## 2️⃣5️⃣ Sort an object by its values (assuming all values are numbers).
```sh
Input: { a: 3, b: 1, c: 2 }
Output: { b: 1, c: 2, a: 3 }

Input: { x: 9, y: 2, z: 5 }
Output: { y: 2, z: 5, x: 9 }
```
