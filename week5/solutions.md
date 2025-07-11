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
## 10.
```js
function findMaxVal(obj) {
    let max = [-Infinity, "a"]
    for(let key in obj) {
        if(max[0] < obj[key]) {
            max[0] = obj[key]
            max[1] = key
        }
    }
    return max[1]
  
}

console.log(findMaxVal({ a: 10, b: 50, c: 30 }));        // b
console.log(findMaxVal({ x: 100, y: 200, z: 150 }));     // y

```

## 11.
```js
function objIsEmpty(obj) {
    return !Object.keys(obj).length
  
}

console.log(objIsEmpty({}));                    // true
console.log(objIsEmpty({ name: "John" }));      // false
```

## 12.
```js
function countOccurences(obj) {
    let count = 0
    for(let key in obj) {
        count++
    }
    return count
}

console.log(countOccurences({ name: "John", age: 25, grade: "A" }));    // 3
console.log(countOccurences({ x: 1, y: 2, z: 3, w: 4 }));               // 4

```

## 13.
```js
function duplicateObj(obj) {
    let duplicate = {}
    for(let key in obj) {
        duplicate[key] = obj[key]
    }
    return duplicate
}

console.log(duplicateObj({ x: 10, y: 20 }));      // { x: 10, y: 20 }
console.log(duplicateObj({ a: 1, b: 2 }));        // { a: 1, b: 2 }
```
## 14.
```js
function convertToJSON(obj) {
    return JSON.stringify(obj)
}

console.log(convertToJSON({ name: "Alice", age: 22 }));    // '{"name":"Alice","age":22}'
console.log(convertToJSON({ x: 1, y: true }));             // '{"x":1,"y":true}'
```

## 15.
```js
function convertToObj(str) {
    return JSON.parse(str)
}

console.log(convertToObj('{"name":"Alice","age":22}'));    // { name: "Alice", age: 22 }
console.log(convertToObj('{"x":1,"y":true}'));             // { x: 1, y: true }
```

## 16.
```js
function countStrValues(obj) {
    let cnt = 0;
    for(let key in obj) {
        if(typeof obj[key] === "string"){
            cnt++
        }
    }
    return cnt
}

console.log(countStrValues({ a: "hi", b: 2, c: "bye" }));           // 2
console.log(countStrValues({ x: "hello", y: "world", z: 3 }));      // 2
```

## 17.
```js
function greaterThanNum(obj, num) {
    let result = [];
    for(let key in obj) {
        if(obj[key] > 50){
            result.push(key)
        }
    }
    return result
}

console.log(greaterThanNum({ a: 30, b: 60, c: 90 }, 50));   // ["b", "c"]
console.log(greaterThanNum({ x: 51, y: 49 }, 50));          // ["x"]
```

## 18.
```js
function isSimilar(obj1, obj2) {
    let keys1 = Object.keys(obj1)
    let keys2 = Object.keys(obj2)

    if(keys1.length !== keys2.length) return false

    for(let i = 0; i < keys1.length; i++) {
        if(keys1[i] !== keys2[i] || obj1[keys1[i]] !== obj2[keys2[i]]) {
            return false
        }
    }
    
    return true
}

console.log(isSimilar({ a: 1, b: 2 }, { a: 1, b: 2 }));    // true
console.log(isSimilar({ a: 1 }, { a: 2 }));                // false
console.log(isSimilar({}, {}));                            // true
```

## 18. (ADVANCE APPOACH) ** can be skipped
```js
function deeplySimilar(obj1, obj2) {
    if (obj1 === obj2) return true;
  
    if (typeof obj1 !== 'object' || obj1 === null ||
        typeof obj2 !== 'object' || obj2 === null) {
      return false;
    }
  
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) return false;
  
    for (let key of keys1) {
      if (!keys2.includes(key)) return false;
      if (!deeplySimilar(obj1[key], obj2[key])) return false;
    }
  
    return true;
}
  
console.log(deeplySimilar({ a: 1, b: 2 }, { a: 1, b: 2 }));                                     // true
console.log(deeplySimilar({ a: 1 }, { a: 2 }));                                                 // false
console.log(deeplySimilar({ a: 1, b: 2 }, { b: 2, a: 1 }));                                     // true
console.log(deeplySimilar({ a: 1, b: { x: 10, y: 20 } }, { b: { x: 10, y: 20 }, a: 1 }));       // true
console.log(deeplySimilar({ a: 1, b: { x: 10 } }, { a: 1, b: { x: 15 } }));                     // false
console.log(deeplySimilar({ a: 1, b: 2 }, { a: 1 }));                                           // false
console.log(deeplySimilar({ a: 1 }, { a: "1" }));                                               // false
console.log(deeplySimilar({}, { a: 1 }));                                                       // false
console.log(deeplySimilar({}, {}));                                                             // true
console.log(deeplySimilar({ a: [1, 2] }, { a: [1, 2] }));                                       // true
console.log(deeplySimilar({ a: [1, 2] }, { a: [2, 1] }));                                       // false
console.log(deeplySimilar({ a: function() { return 1; } }, { a: function() { return 1; } }));   // false
```

## 19.
```js
function storeStudent(obj) {
    return Object.values(obj).toString()
}

console.log(storeStudent({ name: "John", age: 20, grade: "A" }));    // John 20 A
console.log(storeStudent({ name: "Priya", age: 18, grade: "B" }));   // Priya 18 B
```

## 20.
```js
function updateObject(obj, newObj) {
    obj[newObj.key] = newObj.value
    return obj
}

console.log(updateObject({ name: "John" }, { key: "age", value: 25 }));   // { name: "John", age: 25 }
console.log(updateObject({ x: 5 }, { key: "y", value: 10 }));             // { x: 5, y: 10 }
```

## 21.
```js
function deleteKey(obj, keyToBeDeleted) {
    delete obj[keyToBeDeleted]
    return obj
}

console.log(deleteKey({ name: "John", age: 25 }, "age"));   // { name: "John" }
console.log(deleteKey({ x: 1, y: 2 }, "y"));                // { x: 1 }
```
---
### More solutions are coming soon.
