/* Algorithm challenges for beginners */


/* Print all even numbers from 0 – 10 */
function printEvenNumbers() {
    const arr = [];
    for (let i = 0;
        (i >= 0 && i <= 10); i += 2) {
        arr.push(i);
    };
    return arr;
};
console.log(printEvenNumbers());



/* Print all the even numbers from a given array */
function checkForEvenNumbers(arr) {
    let evenArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenArray.push(arr[i]);

        }
    }
    return evenArray;
}
console.log(checkForEvenNumbers([2, 6, 7, 9, 10, 15, 18, 25, 30]));


/* Print a table containing multiplication tables fro 1 to 10 */
function multiplyTable() {
    let num = '\n';
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            num += (i * j) + ' ';
        }
    }
    return num += '\n';
};
console.log(multiplyTable(9));

/* var result = 'x ';
for (var i = 0; i < 11; i++) {
  
    for (var j = 0; j < 11; j++) {
  
        if(i == 0 && j > 0){
          result += '[' + j + ']';
        } 
        else if(j == 0 && i > 0){
          result += '[' + i + '] ';
        } 
        else if(i> 0 && j>0){
        result += (i*j) + ' ';
        }
    }
    result += '\n'
} 
console.log(result); */


/* Create a length converter function (convert kilometres to miles) */
function lengthConverter(km) {
    let mile = (km / 1.609344); // mile = km * 0.62137119223;
    console.log(` ${km} kilometres is ${mile} miles `);
}
lengthConverter(100);



/* Calculate the sum of numbers within an array */
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total += arr[i];
    }
    return total;
}
console.log(sum([2, -4, 9, -10, 2.5, 11]));

/* Bonus intermediate challenge: Create a function that can return the sum of a particular column or row number in a table */

function advSum() {
    var sumRow = 'y';
    for (var a = 0; a < 11; a++) {

        for (var b = 0; b < 11; b++) {

            if (a == 0 && b > 0) {
                sumRow += '[' + a + ']';
            } else if (b == 0 && a > 0) {
                sumRow += '[' + a + '] ';
            } else if (a > 0 && b > 0) {
                sumRow += (a * b) + ' ';
            }
        }

    }
    sumRow += '\n'
}
console.log(advSum());



/* Create a function that reverses an array */
function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }

    return newArr;
}
console.log(reverseArray(["woman", "man", "girl", "boy"])); // [1,2,3,4,5]

function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;


}
console.log(reverseString("hello"));


/* Sort an array from lowest to highest */

function sortArray(arrSort) {
    let newArrSort = [];
    newArrSort = arrSort.sort((a, b) => a - b);
    return newArrSort;
}
// console.log(sortArray([20,50,10,15,60,40,45]));
// console.log(sortArray([2.3,6.5,4.2, 10.4,9.6,122.07]));
console.log(sortArray([-6, -10, -5, -11, -4, -2, -25]));



/* Create a function that filters out negative numbers */
function removeNegNumbers(testArr) {
    testArr.sort((a, b) => a - b);
    let positiveArray = [];
    for (let i = 0; i < testArr.length; i++) {
        if (testArr[i] >= 0) {
            positiveArray.push(testArr[i]);
        }
    }
    return positiveArray;
};
console.log(removeNegNumbers([-2, -5, 20, 16, 14, 9, -3, -15, -99, 2, 40, 6]));


/* Remove the spaces found in a string */
function removeWhiteSpace(targetStr) {

    let nonWhiteSpaceChar = (/^\s+|\s+$/g);
    let newTargetStr = targetStr.replace(nonWhiteSpaceChar, '');

    return newTargetStr;
    // let newTargetStr = targetStr.trim();
}
console.log(removeWhiteSpace("   Salut!, Bienvenue    "));



/* Return a Boolean if a number is divisible by 10 */

function numDivisibleByTen(num) {
    if (num % 10 == 0) {
        return true;
    }
    return false;
}
console.log(numDivisibleByTen(4000));


/* Return the number of vowels in a string */
function checkNumofVowels(checkStr) {
    let Regex = /[aeiou]/gi;
    let numOfVowels = checkStr.match(Regex).length;
    return numOfVowels;
    /* let charRegex = /\w/gi
  numOfChar = checkStr.match(charRegex).length;
  return numOfChar; */

}

console.log(checkNumofVowels("what is the name of the woman who is sitting there"));



/* Find the longest string in an array of strings and return it*/
// ES 5 solution
function longestArray(stringArray) {
    let longestString = "";
    for (let i = 0; i < stringArray.length; i++) {
        let testString = stringArray[i].length;
        if (testString > longestString.length) {
            longestString = stringArray[i];
        }
    }
    return longestString;
}
console.log(longestArray(["a", "boy", "girl", "bandage"]));


// ES6 solution
/* const longestString2 = (arr) => {
    let longest = ''; // Step 0
    arr.forEach((item) => { // Step 1
        if(item.length > longest.length) {
            longest = item;
        }
    });
    return longest; // Step 5
}; */


/*  write a function to capitalize a word */
function capitalize(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
console.log(capitalize("breakpoINT"));