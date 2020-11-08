const Array = require('./array')

// 2. Explore the push() method
// Using the Array class you just created above, add an item to the array.
// Use the following function:

function main(){

  Array.SIZE_RATIO = 3;


  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);

  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  arr.pop();
  arr.pop();
  arr.pop();


  // Empty the array and add one item to the list
  arr.pop();
  arr.pop();
  arr.pop();
  arr.push("tauhida");

  console.log(arr);
}

main();

// What is the length, capacity and memory address of your array?
  // Array { length: 1, _capacity: 3, ptr: 0 }

// Add the following in the main function and then print the array:

// ...
// arr.push(5);
// arr.push(15);
// arr.push(19);
// arr.push(45);
// arr.push(10);

// What is the length, capacity and memory address of your array?
  // Array { length: 6, _capacity: 12, ptr: 3 }

// Explain the result of your program after adding the new lines of code.
  // We added 5 more elements into the array.

// 3. Exploring the pop() method
// Add the following in the main function and then print the array:

// ...
// arr.pop();
// arr.pop();
// arr.pop();

// What is the length, capacity, and address of your array?
  // Array { length: 3, _capacity: 12, ptr: 3 }

// Explain the result of your program after adding the new lines of code.
  // Removed the last 3 items in the array.

// 4. Understanding more about how arrays work
// Print the 1st item in the array arr.
  // arr.get(0);

// Empty the array and add just 1 item:
  // arr.pop();
  // arr.pop();
  // arr.pop();
  // arr.push("tauhida");

// Print this 1 item that you just added. What is the result? Can you explain your result?
  // console.log(arr.get(0));
  // NaN
  // The only item in the array is "tauhida" however 'get' returns NaN. I think this has to do with memory.js

// What is the purpose of the _resize() function in your Array class?
  // Used to increase the capacity if more items are needed or to decrease capacity if we need to free up space.

// 5. URLify a string
// A common mistake users make when they type in an URL is to put spaces between words or letters.
// A solution that developers can use to solve this problem is to replace any spaces with a %20.
// Write a method that takes in a string and replaces all its empty spaces with a %20.
// Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

// Input: tauhida parveen
// Output: tauhida%20parveen
// Input: www.thinkful.com /tauh ida parv een
// Output: www.thinkful.com%20/tauh%20ida%20parv%20een

function urlify(input) {
  return input.split(' ').join('%20');
};

let input = 'www.thinkful.com /tauh ida parv een';
console.log(urlify(input));

// 6. Filtering an array
// Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array.
// DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

function filterArr(arrNums) {
  let filteredArr = [];

  arrNums.forEach(item => {
    if (item >= 5) filteredArr.push(item);
  });

  return filteredArr;
};

let arrNums = [1, 2, 6, 8, 10];
console.log(filterArr(arrNums));

// 7. Max sum in the array
// You are given an array containing positive and negative integers.
// Write an algorithm which will find the largest sum in a continuous sequence.

// Input: [4, 6, -3, 5, -2, 1]
// Output: 12

function getMaxSum(arr) {
  let maxSum = 0; // if we take no elements, zero will be returned

  for (let i = 0; i < arr.length; i++) {
    let sumStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumStart += arr[j];
      maxSum = Math.max(maxSum, sumStart);
    }
  };

  return maxSum;
};

let arr = [4, 6, -3, 5, -2, 1];
console.log(getMaxSum(arr));


// 8. Merge arrays
// Imagine you have 2 arrays which have already been sorted.
// Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

// Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
// Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

function mergeTwo(arr1, arr2) {
  let result = [...arr1, ...arr2];
  return result.sort((a,b) => a-b);
};

let arr1 = [1, 3, 6, 8, 11];
let arr2 = [2, 3, 5, 8, 9, 10];

console.log(mergeTwo(arr1, arr2));

// 9. Remove characters
// Write an algorithm that deletes given characters from a string.
// For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed
// are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny".
// Do not use Javascript's filter, split, or join methods.

// Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output: 'Bttl f th Vwls: Hw vs. Grzny'

function removeVowels(string) {
  const vowels = /[aeiou]+/g;
  return string.replace(vowels, '');
};

let string = 'Battle of the Vowels: Hawaii vs. Grozny'
console.log(removeVowels(string));

// 10. Products
// Given an array of numbers, write an algorithm that outputs an array where each index is the product
// of all the numbers in the input array except for the number at each current index.
// See the following example input and output.

// Input:[1, 3, 9, 4]
// Output:[108, 36, 12, 27]

function products(array) {
  let product = 1;

  const productArr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        product = product * array[j];
      }
    }
    productArr.push(product)
    product = 1;
  }
  return productArr
}

let array = [1, 3, 9, 4];
console.log(products(array));

// 11. 2D array
// Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row
// and column to 0.

// Input:
// [
//   [1,0,1,1,0],
//   [0,1,1,1,0],
//   [1,1,1,1,1],
//   [1,0,1,1,1],
//   [1,1,1,1,1]
// ];

// Output:
// [
//   [0,0,0,0,0],
//   [0,0,0,0,0],
//   [0,0,1,1,0],
//   [0,0,0,0,0],
//   [0,0,1,1,0]
// ];

function twoDArray(inputArr) {
  const newArr = inputArr;
  const rows = [];
  const columns = [];
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = 0; j < inputArr[i].length; j++) {
      if (inputArr[i][j] === 0) {
        // console.log(`row: ${i}`)
        rows.push(i)
        // console.log(`column: ${j}`)
        columns.push(j)
      }
     }
  }
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = 0; j < inputArr[i].length; j++) {
      if (rows.includes(i) || columns.includes(j)) {
        newArr[i][j] = 0
      }
    }
  }
  return newArr;
}

let inputArr = [
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]
];
console.log(twoDArray(inputArr));

// 12. String rotation
// Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

// Input: amazon, azonma
// Output: False
// Input: amazon, azonam
// Output: true

function strRotation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const checkString = str1 + str1;
  if (checkString.includes(str2)) {
    return true
  }
  else {
    return false
  }
}

let str1 = 'amazon';
let str2 = 'azonma';
// let str2 = 'azonam';
console.log(strRotation(str1, str2));