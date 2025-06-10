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
  