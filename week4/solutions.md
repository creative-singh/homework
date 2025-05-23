# Solutions:

## 1. 
```js
function reverseStr(str) {
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}

console.log(reverseStr("hello"));        // olleh
console.log(reverseStr("world"));        // dlrow

```

## 2. 
```js
function cntChar(str, char) {
    let cnt = 0
    for(let i = 0; i < str.length; i++) {
        if(str[i] === char) cnt++
    }
    return cnt
}

console.log(cntChar("hello", "l"));        // 2
console.log(cntChar("banana", "a"));       // 3

```
## 3. 
```js
function strUpper(str) {
    return str.toUpperCase();
}

console.log(strUpper("hello"));     // HELLO
console.log(strUpper("abc"));       // ABC

```
## 4. 
```js
function maxWord(str) {
    let res = "";
    let temp = "" 
    for(let i of str) {
        if(i === " ") {
            if(res.length < temp.length) {
                res = temp
            }
            temp = ""
        } else {
            temp += i
        }
    }
    if(res.length < temp.length) return temp
    return res;
}

console.log(maxWord("The quick brown fox"));    // "quick" 
console.log(maxWord("I love programming"));     // "programming"

```
## 5. 
```js
function anagramCheck(str1, str2) {
    if(str1.length !== str2.length) return "No"

    let objStr1 = {}
    for(let i of str1) {
        if(objStr1[i]){
            objStr1[i] = objStr1[i] + 1
        } else {
            objStr1[i] = 1
        }
    }
    let objStr2 = {}
    for(let j of str2) {
        if(objStr2[j]){
            objStr2[j] = objStr2[j] + 1
        } else {
            objStr2[j] = 1
        }
    }

    for(let key in objStr1){
        if(objStr2[key] === 1) {
            delete objStr2[key]
        } else {
            objStr2[key] = objStr2[key] - 1
        }
    }
    
    if(Object.values(objStr2).length) {
        return "No"
    } 
    return "Yes"

}

console.log(anagramCheck("listen", "silent"));    // Yes
console.log(anagramCheck("hello", "world"));     // No

```
## 6. 
```js
function joinWord(arr) {
    let output = "";
    for(let i = 0; i < arr.length; i++) {
        output += arr[i]
        if(arr.length !== i - 1) output += " "
    }
    
    return output;
}

console.log(joinWord(["I", "am", "learning"]));      // "I am learning"
console.log(joinWord(["JavaScript", "is", "fun"]));  // "JavaScript is fun"

```
## 7. 
```js
function sum(arr) {
    let sum = 0
    for(let i of arr) {
        sum += i
    }
    return sum
}

console.log(sum([1, 2, 3, 4]));    // 10
console.log(sum([5, 10, 15]));     // 30

```

## 8. 
```js
function countNum(arr) {
    let dict = {};
    for(let i = 0; i < arr.length; i++) {
        if(dict[arr[i]]) {
            dict[arr[i]] = dict[arr[i]] + 1
        } else {
            dict[arr[i]] = 1
        }
    }
    
    let result = ""
    for(let i in dict) {
        result += `${i}:${dict[i]} `
    }
    return result
}

console.log(countNum([1, 2, 2, 3, 3, 3]));      // 1:1 2:2 3:3
console.log(countNum([4, 4, 4, 5]));            // 4:3 5:1
```

## 9. 
```js
function removeDuplicates(arr) {
    let res = [];
    for(let i of arr) {
        if(!res.includes(i)) res.push(i)
    }
    return res 
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));      // [1, 2, 3, 4]
console.log(removeDuplicates([5, 5, 6, 7, 7]));         // [5, 6, 7]
```

## 10. 
```js
function searchElem(arr, element) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === element) return i
    }
    return "Not Found"
}

console.log(searchElem([1, 2, 3, 4, 5], 3));      // 2
console.log(searchElem([10, 20, 30], 20));        // 1
console.log(searchElem([10, 20, 30], 55));        // Not Found

```
## 11. 
```js
function nonRepeating(str) {
    let obj = {};
    for(let i of str) {
        if(obj[i]) {
            obj[i] = obj[i]+1
        } else {
            obj[i] = 1
        }
    }
    for(let key in obj) {
        if(obj[key] === 1) return key
    }
    return "No Duplicates"
}

console.log(nonRepeating("aabbcde" ));      // "c"
console.log(nonRepeating("xxyz"));         // "y"
```
## 12. 
```js
function countWords(str) {
    let cnt = 0
    for(let i of str) {
        if(i === " ") cnt++
    }
    return cnt + 1
}

console.log(countWords("I am learning JS"));            // 4
console.log(countWords("Practice makes perfect"));      // 3

```
## 13.
```js
function capitalize(str) {
  let arr = str.split(" ")
  for(let i = 0; i < arr.length; i++) {
    arr[i] = `${arr[i][0].toUpperCase()}${arr[i].slice(1)}`
  }
  return arr.join(" ")
}

console.log(capitalize("hello world"));    // "Hello World" 
console.log(capitalize("i love coding"));  // "I Love Coding"
```
## 14.
```js
function MaxMin(arr) {
  let max = -Infinity
  let min = Infinity
  for(let i of arr) {
    if(max < i) {
      max = i
    }
    if(min > i) {
      min = i
    }
  }
  return `Max = ${max}, Min = ${min}`
}

console.log(MaxMin([2, 5, 1, 8, 3]));    // Max = 8, Min = 1
console.log(MaxMin([10, -2, 0, 9]));     // Max = 10, Min = -2
```
## 15.
```js
function reverseArr(arr) {
    let reverse = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        reverse.push(arr[i])

    }
    return reverse;
}

console.log(reverseArr([1, 2, 3, 4]));    // [ 4, 3, 2, 1 ]
console.log(reverseArr([7, 8, 9]));       // [9, 8, 7]
```
---

