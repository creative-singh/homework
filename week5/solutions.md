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
## 6.
```js
function countStrValues(obj) {
  let count = 0;
  for(let key in obj) {
    if(typeof obj[key] === "string"){
      count++;
    }
  }
  return count
}

console.log(countStrValues({ a: "apple", b: 1, c: "banana" }));           // 2
console.log(countStrValues({ x: "yes", y: "no", z: true }));              // 2
console.log(countStrValues({ x: "yes", y: "no", z: "might be" }));        // 3
```

## 7.
```js
function checkNumericValues(obj) {
  let objLength = 0;
  let count = 0
  for(let key in obj) {
    if(typeof obj[key] === "number"){
      count++;
    }
    objLength++
  }
  return count === objLength
}

console.log(checkNumericValues({ a: 10, b: 20, c: 30 }));          // true
console.log(checkNumericValues({ a: 10, b: "ten" }));              // false
```

## 8.
```js
function swapKeyValue(obj) {
  let newObj = {}

  for(let key in obj) {
    newObj[obj[key]] = key
  }

  return newObj
}

console.log(swapKeyValue({ a: 1, b: 2 }));          // { 1: "a", 2: "b" }
console.log(swapKeyValue({ x: 10, y: 20 }));       // { 10: "x", 20: "y" }
```
## 9.
```js
function createNewObj(key, val) {
  let newObj = {}

  for(let i = 0; i < key.length; i++) {
    newObj[key[i]] = val[i]
  }

  return newObj
}

console.log(createNewObj(["a", "b"], [1, 2]));        // { a: 1, b: 2 }
console.log(createNewObj(["x", "y"], [5, 10]));       // { x: 5, y: 10 }
```



---
### More solutions are coming soon.
