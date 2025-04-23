# Solutions:

## 1. 
```js
function printNum(n) {
    for(let i = 1; i <= n; i++) {
        console.log(i);
    };
};

console.log(printNum(5));  // 1 2 3 4 5
console.log(printNum(3));  // 1 2 3

```
--
## 2. 
```js
function sumNum(n) {
    let sum = 0
    for(let i = 1; i <= n; i++) {
        sum += i
    };
    return sum;
};

console.log(sumNum(5));   // 15
console.log(sumNum(10));   // 55

```
--
## 3. 
```js
function multiplyNum(n) {
    let result = "";
    for(let i = 1; i <= 10; i++) {
        result = result + " " + (n * i);
    };
    return result;
};

console.log(multiplyNum(3))    // 3 6 9 12 15 18 21 24 27 30  
console.log(multiplyNum(5))    // 5 10 15 20 25 30 35 40 45 50

```
--

### More solutions are coming soon.
