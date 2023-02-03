// How to declare variable in javascript?

// Variables in JavaScript can be declared using the "var", "let", or "const" keywords:

// "var" : Declares a variable with function scope (can be accessed within the function it was declared).
// "let" : Declares a variable with block scope (can be accessed within the block it was declared and in nested blocks).
// "const" : Declares a constant variable with block scope (cannot be reassigned after initial value is set).

// Syntax:

// var variableName = value;

// var name = "John Doe";
// var age = 30;
// var isMarried = true;

// let variableName = value;

// let country = "United States";
// let city = "New York";
// let zipCode = 10001;

// const variableName = value;

// const PI = 3.14;
// const NUMBER_OF_STATES = 50;
// const COMPANY_NAME = "Acme Inc.";


// 21-3 Check even and odd number using function////////////////////////////////////


// function isEven(number){
//     const remainder = number % 2;
//     console.log(remainder);
// }

// isEven(48);

// terminal-
// 0
// so remainder 0 means even number


// function isEven(number){
//     const remainder = number % 2;
//     console.log(remainder);
// }

// isEven(303);
// terminal-
// 1
// so remainder 1 means odd number



// function isEven(number){
//     const remainder = number % 2;
//     if(remainder === 0){
//         console.log('number is even')
//     }
//     else{
//         console.log('number is odd');
//     }
// }

// isEven(48);

// terminal-
// number is even


// function isEven(number){
//     const remainder = number % 2;
//     if(remainder === 0){
//         console.log('number is even')
//     }
//     else{
//         console.log('number is odd');
//     }
// }

// isEven(303);

// terminal-
// number is odd



// function isEven(number){
//     const remainder = number % 2;
//     if(remainder === 0){
//         console.log('number is even')
//     }
//     else{
//         console.log('number is odd');
//     }
// }

// isEven(303);
// isEven(1280);

// terminal-
// number is odd
// number is even


// function isEven(number){
//     const remainder = number % 2;
//     if(remainder === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const myNumberIsEven = isEven(303);
// console.log(myNumberIsEven);
// const herNumberIsEven = isEven(202);
// console.log(herNumberIsEven);

// terminal-
// false
// true


// function isEven(number){
//     const remainder = number % 2;
//     if(remainder === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const myNumberIsEven = isEven(303);
// const herNumberIsEven = isEven(202);
// console.log(myNumberIsEven);
// console.log(herNumberIsEven);

// terminal-
// false
// true



// 21-4 Check whether a year is a Leap Year or not (simplified way)/////////////////////

// function isLeapYear (year){
//     const remainder = year % 4;
//     if(remainder === 0){
//         console.log('year is leap year', year);
//     }
//     else{
//         console.log('year is not a leap year', year); 
//     }
// }

// isLeapYear(1933);

// terminal-
// year is not a leap year 1933




// function isLeapYear (year){
//     const remainder = year % 4;
//     if(remainder === 0){
//         console.log('year is leap year', year);
//     }
//     else{
//         console.log('year is not a leap year', year); 
//     }
// }

// isLeapYear(1933);
// isLeapYear(1960);

// terminal-
// year is not a leap year 1933
// year is leap year 1960 


// function isLeapYear (year){
//     const remainder = year % 4;
//     if(remainder === 0){
//         return true;
//     }
//     else{
//         return false; 
//     }
// }

// const isFirstYearLeapYear = isLeapYear(1933);
// console.log('first year', isFirstYearLeapYear);
// const isSecondYearLeapYear = isLeapYear(1960);
// console.log('second year', isSecondYearLeapYear);

// terminal-
// first year false
// second year true  



// function isLeapYear (year){
//     const remainder = year % 4;
//     if(remainder === 0){
//         return true;
//     }
//     {
//         return false; 
//     }
// }

// const isFirstYearLeapYear = isLeapYear(1933);
// console.log('first year', isFirstYearLeapYear);
// const isSecondYearLeapYear = isLeapYear(1960);
// console.log('second year', isSecondYearLeapYear);

// terminal-
// first year false
// second year true  




// 21-5 Calculate Sum of all numbers of an array////////////////////////////////////



// function getSumOfAnArray(numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i ++){
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//         console.log(index, element, sum);
//     }
//     return sum;
// }

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// getSumOfAnArray(myNumbers);


// terminal-
// 0 12 12
// 1 65 77
// 2 45 122
// 3 78 200
// 4 32 232
// 5 45 277
// 6 91 368


// 21-6 Get Odd Numbers of an array and get odd Sum of an array/////////////////////////////




// function getSumOfAnArray(numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i ++){
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//     }
//     return sum;
// }

// function getSumOddNumbersOfAnArray(numbers){
//     for(let i = 0; i < numbers.length; i++)
//     console.log(i);
// }

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// getSumOddNumbersOfAnArray(myNumbers);
// getSumOfAnArray(myNumbers);


// terminal-
// 1
// 2
// 3
// 4
// 5
// 6



// function getSumOfAnArray(numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i ++){
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//     }
//     return sum;
// }

// function getSumOddNumbersOfAnArray(numbers){
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         console.log(index, element);
//     }
// }

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// getSumOddNumbersOfAnArray(myNumbers);
// getSumOfAnArray(myNumbers);

// terminal-
// 0 12
// 1 65
// 2 45
// 3 78
// 4 32
// 5 45
// 6 91



// function getSumOfAnArray(numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i ++){
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//     }
//     return sum;
// }

// function getSumOddNumbersOfAnArray(numbers){
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         if(element % 2 === 0)
//         console.log(index, element);
//     }
// }

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// getSumOddNumbersOfAnArray(myNumbers);
// getSumOfAnArray(myNumbers);


// terminal-
// 0 12
// 3 78
// 4 32



// function getSumOfAnArray(numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i ++){
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//     }
//     return sum;
// }

// function getSumOddNumbersOfAnArray(numbers){
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         if(element % 2 !== 0)
//         console.log(index, element);
//     }
// }

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// getSumOddNumbersOfAnArray(myNumbers);
// getSumOfAnArray(myNumbers);


// terminal-
// 1 65
// 2 45
// 5 45
// 6 91




// function getSumOfAnArray(numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i ++){
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;}
//     return sum; 
// }

// function getOddNumbersOfAnArray(numbers){
//     const oddNumbers = [];
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         if(element % 2 !== 0){
//         console.log(index, element);
//         oddNumbers.push(element);
//     }
//     }
//     return oddNumbers;
// }

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// const oddNumbers = getOddNumbersOfAnArray(myNumbers);
// console.log(oddNumbers);
// getSumOfAnArray(myNumbers);



// terminal-
// 1 65
// 2 45
// 5 45
// 6 91
// [ 65, 45, 45, 91 ]




// function getSumOfAnArray(numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i ++){
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;}
//     return sum; }

// function getOddNumbersOfAnArray(numbers){
//     const oddNumbers = [];
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         if(element % 2 !== 0){
//         console.log(index, element);
//         oddNumbers.push(element);}
//     }
//     return oddNumbers;
// }

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// const oddNumbers = getOddNumbersOfAnArray(myNumbers);
// console.log(oddNumbers);
// const oddNumberSum = getSumOfAnArray(oddNumbers);
// console.log('odd number sum', oddNumberSum);




// terminal-
// 1 65
// 2 45
// 5 45
// 6 91
// [ 65, 45, 45, 91 ]
// odd number sum 246



// 21-7 Calculate Factorial of a number using for loop/////////////////////////////////////



// // 1 + 2 + 3 + 4 + 5 + 6 + 7

// for(let i = 1; i < 7; i++){
//     console.log(i);
// }


// terminal-
// 1
// 2
// 3
// 4
// 5
// 6

// 1 + 2 + 3 + 4 + 5 + 6 + 7

// let sum = 0
// for(let i = 1; i < 7; i++){
//     sum = sum + i;
//     console.log(i, sum);
// }


// terminal-
// 1 1
// 2 3
// 3 6
// 4 10
// 5 15
// 6 21

// 1 + 2 + 3 + 4 + 5 + 6 + 7

// function sumOfNumbers(number){
//     let sum = 1;
//     for (let i = 1; i<= number; i++){
//         sum = sum + i;
//         console.log(i, sum);
//     }
//     return sum;
// }
// const result = sumOfNumbers(7);
// console.log(result);


// terminal-
// 2 4
// 3 7
// 4 11
// 5 16
// 6 22
// 7 29
// 29


// 1 * 2 * 3 * 4 * 5 * 6 * 7 

// function multiplicationOfNumbers(number){
//     let result = 1;
//     for(let i = 1; i<=7; i++){
//         result = result * i;
//     }
//     return result;
// }  

// const result = multiplicationOfNumbers(7);
// console.log(result);


// terminal-
// 5040



// 21-8 Factorial using a while loop or a decrementing loop/////////////////////////


// function factorial(number){
//     let result = 1;
//     for(let i = 1; i <= number; i++){
//         result = result * i;
//     }
//     return result;
// }

// const result = factorial(9);
// console.log(result);


// terminal-
// 362880



// function factorial(number){
//     for(let i = number; i >= 1; i--){
//         console.log(i);
//     }
// }

// factorial(7);

// terminal-
// 7
// 6
// 5
// 4
// 3
// 2
// 1



// function factorial(number){
//     let result = 1;
//     for(let i = number; i >= 1; i--){
//         result = result * i;
//         console.log(i);
//     }
// }

// const fact = factorial(9);
// console.log('factorial of 9;', fact)

// terminal-
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1


// function factorial(number){
//     let result = 1;
//     for(let i = number; i >= 1; i--){
//         result = result * i;
//         console.log(i);
//     }
// }

// const number = 5;
// const fact = factorial(number);
// console.log('factorial of number;', fact)



// terminal-
// 5
// 4
// 3
// 2
// 1


// 21-9 Module Summary and Simple JavaScript debug////////////////////////

// function print(a, b, c){
//     return a+2;
//     return a*b;
//     return b*c+a;
//   }
//   console.log(print(1,2,3));