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

## 11.

```js
function secondLargest(arr) {
    let largest = -Infinity;
    let sLargest = -Infinity
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            sLargest = largest
            largest = arr[i]
        } else if (arr[i] > sLargest){
            sLargest = arr[i]
        }
        
    }
    return sLargest
}

console.log(secondLargest([3, 7, 1, 9, 4]));        // 7
console.log(secondLargest([5, 2, 8, 6]));          // 6
```

## 12.

```js
function cntVowels(str) {
    let cnt = 0;
    let vowels = "aeiou";
    for(let i of str) {
        if(vowels.includes(i)) cnt++
    }
    return cnt
}

console.log(cntVowels("hello"));        // 2
console.log(cntVowels("world"));        // 1
```

## 13.

```js
function checkPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while(left <= right) {
        if(str[left] !== str[right]) {
            return "Not Palindrome";
        }
        left++;
        right--;
    }
    return "Palindrome";
}

console.log(checkPalindrome("racecar"));      // Palindrome
console.log(checkPalindrome("hello"));       // Not Palindrome

```

## 14.

```js
function powerOfNum(num1, num2) {
    return Math.pow(num1, num2);
}

console.log(powerOfNum(2, 3));      // 8
console.log(powerOfNum(5, 2));       // 25
```
## 15.

```js
function minInArr(arr) {
    let min = Infinity;
    for(let i of arr) {
        if(min > i) min = i
    }
    return min;
}

console.log(minInArr([3, 7, 1, 9, 4]));    // 1
console.log(minInArr([5, 2, 8, 6]));       // 2

```
## 16.

```js
function perfectNum(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum === n ? "Perfect" : "Not Perfect";
}

console.log(perfectNum(6));            // Perfect
console.log(perfectNum(10));           // Not Perfect
console.log(perfectNum(28));           // Perfect

```
## 17.

```js
function fibonacci(n) {
    let res = [0, 1]
    if(n === 0) return res[0]
    if(n === 1) return res
    for(let i = 2; i < n; i++) {
        res.push(res[i-1] + res[i-2])
    }
    return res
}

console.log(fibonacci(5));              // 0 1 1 2 3
console.log(fibonacci(7));              // 0 1 1 2 3 5 8
console.log(fibonacci(1));              // 0 1

```
## 18.

```js
function countNum(n) {
    let cnt = 0;
    while(n > 0) {
        n = Math.floor(n / 10);
        cnt++;
    }
    return cnt;
}

console.log(countNum(1234));           // 4
console.log(countNum(99));             // 2
console.log(countNum(131256));         // 6
```
## 19.

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
## 20.

```js
function divisorCheck(num) {
    if(num % 5 == 0 && num % 3 == 0){
        return "Yes"
    }
    return "No";
}

console.log(divisorCheck(15));    // Yes
console.log(divisorCheck(9));     // No
```
## 21.

```js
function sumEvenNum(arr) {
    let sum = 0
    for(let val of arr) {
        if(val % 2 === 0) {
            sum += val
        }
    }
    return sum
}

console.log(sumEvenNum([1, 2, 3, 4, 5, 6]));    // 12
console.log(sumEvenNum([7, 8, 9, 10]));         // 18

```
## 22.

```js
function counting(arr) {
    let pos = 0; let neg = 0;
    let zero = 0;
    for(let val of arr) {
        if(val > 0) {
            pos++
        } else if(val < 0) {
            neg++
        } else {
            zero++
        }
    }
    return `Positive = ${pos}, Negative = ${neg}`
}

console.log(counting([1, -2, 3, -4, 5]));    // Positive = 3, Negative = 2
console.log(counting([-1, -3, 4, 6]));      // Positive = 2, Negative = 2
```
---
### More solutions are coming soon.
