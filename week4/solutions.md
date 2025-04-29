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

---
### Solutions are coming soon.
