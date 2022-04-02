let countingLog = 1
let countingLogSentence = "Below is the answer to question #"
const qaz = () => {
    console.log(countingLogSentence + countingLog++)
}



// 1. Write a function named `marco` that returns "polo".
//I'lll use a const marco and console.log polo
qaz()
const marco = console.log("polo")
// 2. Write a function named `greeting` that takes a name as an argument and returns "Welcome, <person's name here>!"
//ill use a const greeting 
//argument will be used within ` and ${}
qaz()
const greeting = (personName) => {
    return `Welcome, ${personName}!`
}
console.log(greeting("Victor"))
// 3. Write a function named `oddOrEven` that takes a number as an argument and returns whether the number is odd or even.
//very similar to above ill use const to establish the function oddOrEven
//If statement will utilize the % 2 === 0 to determin if its an even number
//else will be suficient will not need to write else if
//console.log the result
const oddOrEven = (ooE1) => {
    if(ooE1 % 2 === 0){
        return (ooE1 + " is even.")
    }else {
        return (ooE1 + " is odd.")
    }
}
qaz()
console.log(oddOrEven(31123))
// 4. Write a function named `triple` that takes a number as an argument and returns the result of that number multiplied by 3.

// 5. Write a function named `multiply` that takes two numbers as arguments and returns the result of the numbers multiplied together.

// 6. Write a function named `divisibleBy` that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// 7. Write a function named `assignGrade` that takes a number score as an argument and returns the letter grade for the score.

// 8. Write a function named `isLonger` that takes two strings as arguments and returns the string that contains the most characters.

// 9. Write a function named `greaterNum` that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// 10. Write a function named `yelling` that takes a string as an argument and return the string in all uppercase case letters.


// ### STRETCH Challenges

// 1. The World Translator   
//   (a) Write a function named `helloWorld` that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.  
//   (b) Have your function [default](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) to returning English.

// 2. The Pluralizer  
//   (a) Write a function named `pluralizer` that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.

//   ```javascript
//   pluralizer(5, "cat")
//   // expected output: "5 cats"

//   pluralizer(1, "dog")
//   // expected output: "1 dog"
//   ```

//   (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".