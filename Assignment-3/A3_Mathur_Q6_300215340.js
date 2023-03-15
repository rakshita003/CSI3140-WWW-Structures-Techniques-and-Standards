/*author:Rakshita Mathur
Student ID:300215340
Date: 2023-03-06
Couse: CSI3140
Description: Assignment 3 Question 6-JavaScript
*/

// Function to convert a single English word to pig Latin
function toPigLatin(word) {
    // Split the word into its first letter and the rest of the word
    const firstLetter = word[0];
    const restOfWord = word.slice(1);
  
    // Return the pig Latin version of the word
    return restOfWord + firstLetter + "ay";
  }
  
  // Function to convert a sentence to pig Latin and display each word
  function convertToPigLatin(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(" ");
  
    // Convert each word to pig Latin and print it out
    const pigLatinWords = words.map(toPigLatin);
    for (let i = 0; i < pigLatinWords.length; i++) {
      printLatinWord(pigLatinWords[i]);
    }
  
    // Add a newline after the sentence is printed
    const output = document.getElementById("output");
    output.value += "\n";
  }
  
  // Function to print a pig Latin word to the output textarea
  function printLatinWord(word) {
    const output = document.getElementById("output");
    output.value += word + " ";
  }
  
  // Get the form and add a submit event listener to it
  const form = document.getElementById("input-form");
  form.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Get the input value from the form and convert it to pig Latin
    const input = document.getElementById("input");
    const sentence = input.value.trim();
    convertToPigLatin(sentence);
  
    // Clear the input field after the conversion is complete
    input.value = "";
  });
  