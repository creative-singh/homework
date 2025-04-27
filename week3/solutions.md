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
## 4. 
```js
function isPrime(n) {
    if (n <= 1) return "Not Prime";
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return "Not Prime";
    }
    return "Prime";
}

console.log(isPrime(7));
console.log(isPrime(8));

```
--
## 5. 
```js
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));
console.log(factorial(4));

```
--

## 6. 
```js
function printEvenUpToN(n) {
    let result = "";
    for (let i = 2; i <= n; i += 2) {
        result += i + " ";
    }
    return result.trim();
}

console.log(printEvenUpToN(10));
console.log(printEvenUpToN(5));
```
--

##7

```js
function reverseNum(num) {
    let revNum = 0 
    while(num > 0) {
        lastPointer = num % 10;
        revNum = revNum * 10 + lastPointer 
        num = Math.floor(num / 10);
    }
    return revNum
}

console.log(reverseNum(1234))
console.log(reverseNum(500))

```
--


### More solutions are coming soon.
