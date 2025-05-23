# Solutions:

## 1. 
```js
function numberChecker(num) {
    if(num > 0) {
        return "Positive"
    } else if (num < 0) {
        return "Negative"
    } else {
        return "Zero"
    }
}

console.log(numberChecker(5));      // Positive
console.log(numberChecker(-3));      // Negative
console.log(numberChecker(0));      // Zero
```

## 2. 
```js
function evenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd"
};

console.log(evenOrOdd(10));     // Even
console.log(evenOrOdd(7));     // Odd
```

## 3. 
```js
function eligibleToVote(age) {
    return age >= 18 ? "Eligible to vote" : "Not eligible";
};

console.log(eligibleToVote(20));     // Eligible to vote
console.log(eligibleToVote(16));     // Not eligible
```

## 4. 
```js
function leapYearOrNot(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) 
        ? "Leap year." 
        : "Not a leap year." ;
}

console.log(leapYearOrNot(2024)) // Leap year.
console.log(leapYearOrNot(2023)) // Not a leap year.
```

## 5. 
```js
function largestNum(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log(largestNum(12, 25, 7)) // 25
console.log(largestNum(5, 9, 11)) // 11
```

## 6. 
```js
function gradeSystem(grade) {
    if (grade >= 90) {
        return 'A';
    } else if (grade >= 80) {
        return 'B';
    } else if (grade >= 70) {
        return 'C';
    } else {
        return 'D';
    }
}

console.log(gradeSystem(85))        // B
console.log(gradeSystem(72))        // C
```

## 7. 
```js
function classifyTemperature(temp) {
    if (temp < 15) {
        return 'Cold';
    } else if (temp <= 30) {
        return 'Moderate';
    } else {
        return 'Hot';
    }
}

console.log(classifyTemperature(10)); // Cold
console.log(classifyTemperature(22)); // Moderate
console.log(classifyTemperature(35)); // Hot
```

## 8. 
```js
function checkCharType(char) {
    const vowels = 'aeiou';
    return vowels.includes(char) ? 'Vowel' : 'Consonant';
}

console.log(checkCharType('a')); // Vowel
console.log(checkCharType('z')); // Consonant
```

## 9. 
```js
function isDivisible(num) {
    return (num % 5 === 0 && num % 11 === 0) ? 'Divisible' : 'Not divisible';
}

console.log(isDivisible(55)); // Divisible
console.log(isDivisible(23)); // Not divisible
```

## 10. 
```js
function checkHeight(height) {
    return height > 170 ? 'Tall' : 'Short';
}

console.log(checkHeight(180)); // Tall
console.log(checkHeight(165)); // Short

```
--
