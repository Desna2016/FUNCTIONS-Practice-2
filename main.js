/*
=======================================================

** Week 3 - Project 2 **
*** More Functioning ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-9
ADVANCED TRACK: 10-13
=======================================================
*/

document.getElementById("q0").innerHTML = "<p>Connected properly.</p>";
document.getElementById("q0").classList.add("status-good");

// 1. Without using Math.min(), write a function called minimum(),
//    that takes two numbers from a user,
//    and outputs the smaller number into the HTML page.

function minimum(num1, num2) {
  if (num1<num2) {
    document.getElementById("q1").innerHTML = "<p>The smaller number is " + num1 + ".</p>";
  }
  else if (num2<num1) {
    document.getElementById("q1").innerHTML = "<p>The smaller number is " + num2 + ".</p>";
  }
  else {
    document.getElementById("q1").innerHTML = "<p>The numbers are equal.</p>"
  }
};

minimum(3,5);


// 2. Create a new function called minimum3(),
//    to find the smallest of three numbers,
//    input by a user,
//    and the smallest displayed within the HTML page.

function minimum3(num1, num2, num3) {
  document.getElementById("q2").innerHTML = Math.min(num1, num2, num3);
};

minimum3(12,6,8);


// 3. Declare a function called sum() that takes an array of numbers as an argument
 // adds them together and displays the result within the HTML page.
//    i.e. sum([1, 2, 3, 4]) should return 10.

function sum(array) {
    var result = 0;
    for(i=0; i<array.length; i++) {
      result += array[i];
    }
    return result + " is the total.";
};

document.getElementById("q3").innerHTML = sum([12, 15, 17]);


// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.

function multiply(numbers) {
  var total = 1;
  for (i=0; i<numbers.length; i++){
    total *= numbers[i];
  }
  return "All numbers multiplied give a total of " + total + ".";
}

document.getElementById("q4").innerHTML = multiply([5,6,7,8,9]);


// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];

function filterSixPlus(word) {
  var array=[];
  for(var i=0; i<word.length; i++){
    if (word[i].length < 6){
      array.push(word[i]);
    }
  }
  return array;
}

document.getElementById("q5").innerHTML = filterSixPlus(words);



// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.

function c2f(temp) {
  return (temp * 1.8) + 32;
}

function f2c(temp) {
  return (temp - 32) / 1.8;
}

document.getElementById("c2f-button").addEventListener("click", function() {
  var initialTemp = document.getElementById("tempInput").value;
  document.getElementById("q6a").innerHTML = c2f(initialTemp).toFixed();

})


document.getElementById("f2c-button").addEventListener("click", function() {
  var initialTemp2 = document.getElementById("tempInput2").value;
  document.getElementById("q6b").innerHTML = f2c(initialTemp2).toFixed();
})


// 7. Adding to the code in #6, ask the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Display an error if they do not follow the rules.



// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()

function countBs(string) {
  var result = 0;
  for(i=0; i<string.length; i++) {
    if (string.charAt(i)==="B")
  result += 1;
  }
  return result;
}

var sentence = "Buffalo Bill was a brave and bold cowboy."
document.getElementById("q8").innerHTML = "<p>There are " + countBs(sentence) + " B's in the sentence.</p>"


// 9. http://games.usvsth3m.com/javascript-under-pressure/
//    Have fun with these!
//    Get as far as you can and record your progress and time.
//    We'll try this again in a few weeks!







// ADVANCED TRACK
// A. Write a function called countChars() that behaves like countBs(), except it takes a
//     second argument that indicates what character is to be counted.

function countChars(string, character) {
    var result = 0;
    for (i=0; i<string.length; i++) {
      if(string.charAt(i) === character){
        result += 1;
      }
    }
    return result;
}

document.getElementById("qa").innerHTML = countChars("Zab, zupa zebowa.", "z");


// B. Declare a function called ohZero that replaces all of the o's in a string with 0's.




// C. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.

// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.




// D. Create a 'Guessing Game'. The game starts by picking a random number.
//     It then prompts the user to guess the number. If the user's number is lower/higher,
//     it will prompt the user to enter another guess and tell the user if the guess was
//     too high or too low. This continues until the correct guess is entered.
//     When the correct guess is entered the user is given a success message with the correct number.
