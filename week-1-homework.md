# Homework

## 1. Print a string using Loop.
str = "krishna"

### Output - 

k

r

i

s

h

n

a

### Solution:
```js
function loopLearning(str){
    for(let i = 0; i < str.length; i++){
        console.log(str[i]);
    }
}
console.log(loopLearning("krishna"));
console.log(loopLearning("kajal"));
```


## 2. Reverse a string and print with loop.
str = "krishna"

### Output -

a

n

h

s

i

r

k

### Solution:
```js
function loopLearning(str){
    for(let i = str.length-1; i >= 0; i--){
        console.log(str[i]);
    }
}
console.log(loopLearning("krishna"));
console.log(loopLearning("kajal"));
```

## 3. Use LOOPS to get the desired output.
str = 'krishna'

### Output

k - 1 - k1

r - 2 - r2

i - 3 - i3

s - 4 - s4

h - 5 - h5

n - 6 - n6

a - 7 - a7

### Solution

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
--
## 4. Use LOOPS to get the desired output. 

### Output

1001
   
1002

1003

1004

1005

1006

1007

1008

1009

1010

### Solution:
```js
function loopLearning(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
console.log(loopLearning([1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010]));
```

--
## 5. Use LOOPS to get the desired output.

### Output:

10 - - - - 00
   
10 - - - - 01

10 - - - - 10

10 - - - - 11

10 - - - - 010

10 - - - - 011

10 - - - - 100

10 - - - - 101

10 - - - - 110

10 - - - - 111

### Solution:
```js
function loopLearning(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log("10 - - - - " + arr[i]);
    }
}

loopLearning(["00", "01", "10", "11", "010", "011", "100", "101", "110", "111"]);
```

# New Homework 16th Feb 2025

## 6. Print multiples of given number
num = 3
### Output: 
0 

3

6

9

12

15

18

21

24

27

30

33

num = 12
### Output: 
0

12

24

36

48

60

72

84

96

108

120

132

## 7. Add all elements of an array

arr = [1, 2, 3, 4];
### Output - 10

arr = [1, 2, 3, 4, 5, 6, 7];
### Output - 28

## 8. Find the Total Length of All Words in an Array
arr = ["krishna", "kajal", "javascript", "lovely"];
### Output - [7, 5, 10, 6]

arr = ["sun", "moon", "stars", "planet"];
### Output - [3, 4, 5, 6]

## 9. Count Occurrences of a Character in a String

- str = "krishna"
- char = "i"
### Output - 1

- str = "kajal"
- char = "a"
### Output - 2

- str = "a javascript"
- char = 'a'
### Output - 3

## 10. Count the Number of Vowels in a String

str = "krishna"
### Output - 2

str = "kajal"
### Output - 2

str = "javascript"
### Output - 3
