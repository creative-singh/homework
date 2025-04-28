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

## 4. 
```js
function isPrime(n) {
    if (n <= 1) return "Not Prime";
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return "Not Prime";
    }
    return "Prime";
}

console.log(isPrime(7));    // Prime
console.log(isPrime(8));    // Not Prime

```

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

console.log(factorial(5));    // 120
console.log(factorial(4));    // 24

```


## 6. 
```js
function printEvenUpToN(n) {
    let result = "";
    for (let i = 2; i <= n; i += 2) {
        result += i + " ";
    }
    return result.trim();
}

console.log(printEvenUpToN(10));    // 2 4 6 8 10
console.log(printEvenUpToN(5));    // 2 4 
```


## 7.

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

console.log(reverseNum(1234));    // 4321
console.log(reverseNum(500));    // 5 

```

## 8.

```js
function sumNum(n) {
    let result = 0
    while(n > 0) {
        result = result + (n % 10)
        n = Math.floor(n / 10)
    }
    return result;
}

console.log(sumNum(123))        // 6
console.log(sumNum(4321))       // 10

```

## 9.

```js
function armstrong(n) {
    let result = 0
    let len = String(n).length
    let tempN = n

    while(tempN > 0) {
        result = result + ((tempN % 10) ** len)
        tempN = Math.floor(tempN / 10)
    }
    return n === result ? "Armstrong" : "Not Armstrong"
}

console.log(armstrong(153))        // Armstrong
console.log(armstrong(123))       // Not Armstrong

```

## 10.

```js
function largestNum(arr) {
    let largest = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}

console.log(largestNum([3, 7, 1, 9, 4]));        // 9
console.log(largestNum([5, 2, 8, 6]));          // 8
```
---
### More solutions are coming soon.
