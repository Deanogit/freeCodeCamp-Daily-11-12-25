// Roman Numeral Builder
// Given an integer, return its equivalent value in Roman numerals.

// Roman numerals use these symbols:

// Symbol	Value
// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000
// Roman numerals are written from largest to smallest, left to right using the following rules:

// Addition is used when a symbol is followed by one of equal or smaller value. For example, 18 is written as XVIII (10 + 5 + 1 + 1 + 1 = 18).
// Subtraction is used when a smaller symbol appears before a larger one, to represent 4 or 9 in any place value. For example, 19 is written as XIX (10 + (10 - 1)).
// No symbol may be repeated more than three times in a row. Subtraction is used when you would otherwise need to write a symbol more than three times in a row. So the largest number you can write is 3999.
// Here's one more example: given 1464, return "MCDLXIV" (1000 + (500 - 100) + 50 + 10 + (5 - 1)).

function toRoman(num) {
  console.log(num);

  // Map of values
  const arr = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  let string = '';
  // the greedy loop
  // start with largest value
  for (let i = 0; i < arr.length; i++) {
    while (num >= arr[i][0]) {
      string += arr[i][1];
      num -= arr[i][0];
    }
  }
  console.log(string);

  return string;

  // add a counter & subtract modular
  // let counter = num
  // take number
  // const arr = [];
  // if (counter > 1) {
  // if modular 1000 === 0
  //    if (num % 1000 ) {
  // push M
  //        arr.push('M');
  //        counter - 1000;
  // if modular 500 === 0
  //      } else if (num % 500 === 0) {
  // push D
  //          arr.push('D');
  //          counter - 500;
  // if modular 100 === 0
  //      } else if (num % 100 === 0) {
  // push C
  //           arr.push('C');
  //           counter - 100;
  // if modular 50 === 0
  //       } else if (num % 50 === 0) {
  // push L
  //           arr.push('L');
  //           counter - 50;
  // if modular 10 === 0
  //       } else if (num % 10 === 0) {
  // push X
  //           arr.push('X');
  //           counter - 10;
  // if modular 5 === 0
  //       } else if (num % 5 === 0) {
  // push V
  //           arr.push('V');
  //           counter - 5;
  // if modular 1 === 0
  //       } else if (num % 1 === 0)
  // push I
  //           arr.push('I');
  //           counter - 1
  //       }
  //       console.log(counter)

  // console.log(arr);
  // return num;
}

toRoman(10001);
