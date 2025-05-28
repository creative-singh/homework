# Solutions:

## 1. 
```js
function mergeObjects(obj1, obj2) {
  let resultObj = {};
  for(let key in obj1) {
    resultObj[key] = obj1[key]
  }
  for(let key in obj2) {
    resultObj[key] = obj2[key]
  }
  
  return resultObj
}

console.log(mergeObjects({ a: 1 }, { b: 2 }));        // { a: 1, b: 2 }
console.log(mergeObjects({ x: 5 }, { y: 10 }));       // { x: 5, y: 10 }

```
## 2. 
```js
function keyToArr(obj) {
  return Object.keys(obj)
}

console.log(keyToArr({ name: "John", age: 25 }));   // ["name", "age"]
console.log(keyToArr({ a: 1, b: 2, c: 3 }));        // ["a", "b", "c"]
```
## 3. 
```js
function valueToArr(obj) {
  return Object.values(obj)
}

console.log(valueToArr({ name: "John", age: 25 }));      // ["John", 25]
console.log(valueToArr({ x: 10, y: 20, z: 30 }));        // [10, 20, 30]
```
## 4. 
```js
function printObject(obj) {
  const result = Object.entries(obj)
    .map(([key, value]) => `${key}: ${value}`)
    .join(', ');
}

printObject({ name: "Alice", city: "Delhi" }); // name: Alice, city: Delhi
printObject({ x: 1, y: 2 });                   // x: 1, y: 2

```
## 5.
```js
const output1 = { student: { name: "John", grade: "A" } };
const output2 = { school: { location: { city: "Mumbai" } } };

console.log(output1.student.grade);         // A
console.log(output2.school.location.city);  // Mumbai
```


---
### More solutions are coming soon.
