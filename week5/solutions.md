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

---
### Mode solutions are coming soon.
