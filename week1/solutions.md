# Solutions:

## 1. 
```js
function loopLearning(str){
    for(let i = 0; i < str.length; i++){
        console.log(str[i]);
    }
}
console.log(loopLearning("krishna"));
console.log(loopLearning("kajal"));
```

## 2.
```js
function loopLearning(str){
    for(let i = str.length-1; i >= 0; i--){
        console.log(str[i]);
    }
}
console.log(loopLearning("krishna"));
console.log(loopLearning("kajal"));
```

## 3.
```js
function loopLearning(str){
    for(let i = 0; i < str.length; i++){
        let num = i+1;
        console.log(str[i] + "-" + num + "-" + str[i] + num);
    }
}
console.log(loopLearning("krishna"));
console.log(loopLearning("kajal"));
```

## 4. 
```js
function loopLearning(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
console.log(loopLearning([1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010]));
```

## 5. 
```js
function loopLearning(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log("10 - - - - " + arr[i]);
    }
}

loopLearning(["00", "01", "10", "11", "010", "011", "100", "101", "110", "111"]);
```

## 6.
```js
function multipleOfNum(num) {
    for(let i = 0; i <= 11; i++) {
        console.log(i * num)
    }
}
--
multipleOfNum(3);
console.log('-')
multipleOfNum(12);

```

## 7.
```js
function addElems(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;


    // 1 Liner Code (Advanced)
    // return arr.reduce((a,b) => a + b, 0)
}

console.log(addElems([1, 2, 3, 4]));        // 10
console.log(addElems([1, 2, 3, 4, 5, 6, 7]));       // 28
```

## 8.
```js
function totalLengthOfWords(arr) {
    let result = []
    for(let i = 0; i < arr.length; i++) {
        result.push(arr[i].length)
    }
    return result
}

console.log(totalLengthOfWords(["krishna", "kajal", "javascript", "lovely"]));
// [7, 5, 10, 6]
console.log(totalLengthOfWords(["sun", "moon", "stars", "planet"]));
// [3, 4, 5, 6]

```

## 9.
```js
function countOccurences(str, char) {
    let cnt = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === char) cnt++
    }
    return cnt
}

console.log(countOccurences("kajal", "a"))      // 2
console.log(countOccurences("krishna", "i"))      // 1
console.log(countOccurences("a javascript", "a"))      // 3

```

## 10.
```js
function countVowels(str) {
    const vowels = "aeiou";
    let cnt = 0;
    for(let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])) cnt++
    }
    return cnt
}

console.log(countVowels("krishna"))     // 2
console.log(countVowels("kajal"))       // 2
console.log(countVowels("javascript"))  // 3

```
--
