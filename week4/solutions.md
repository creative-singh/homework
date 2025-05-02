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


---
### Solutions are coming soon.
