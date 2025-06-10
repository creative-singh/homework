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

// function sortObj(obj) {
    
  
// }

// console.log(sortObj({ a: 3, b: 1, c: 2 }));      // { b: 1, c: 2, a: 3 }
// console.log(sortObj({ x: 9, y: 2, z: 5 }));      // { y: 2, z: 5, x: 9 }
