// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".

const marco = () => {
    return "polo"
}

console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

const greeting = (person) => {
    return `Welcome, ${person}!`
}

console.log(greeting("Johnny"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// const oddOrEven = (num) => {
//     if (num % 2 === 0){
//         return "Even"
//     } else if (num % 2 !== 0){
//         return "Odd"
//     }
// }

// console.log(oddOrEven(37))
// console.log(oddOrEven(20))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// const triple = (num) => {
//    return num * 3
// }

// console.log(triple(3))


// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

// const multiply = (numOne, numTwo) => {
//    return numOne * numTwo
// }

// console.log(multiply(2, 2))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Function called divisibleBy
// Input two numbers: numOne, numTwo
// numOne divided by numTwo has no remainder ??

// const divisibleBy = (numOne, numTwo) => {
//     if (numOne % numTwo === 0){
//         return `${numOne} is evenly divisible by ${numTwo}`
//     } else {
//         return `${numOne} is NOT evenly divisible by ${numTwo}`
//     }
// }

// console.log(divisibleBy(8892735, 10))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// const assignGrade = (score) => {
//     if (score >= 90){
//         return "A"
//     } else if (score >= 80){
//         return "B"
//     } else if (score >= 70){
//         return "C"
//     } else if (score >= 60){
//         return "D"
//     } else {
//         return "F"
//     }
// }

// console.log(assignGrade(37))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// const isLonger = (str1, str2) => {
//     if (str1.length > str2.length){
//         return str1
//     } else {
//         return str2
//     }
// }

// console.log(isLonger("hello there", "go away peasant"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// const greaterNum = (num1, num2) => {
//     if (num1 > num2){
//         return num1
//     } else {
//         return num2
//     }
// }

// console.log(greaterNum(902853, 23528))

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

const yelling = (talkLoud) => {
    return talkLoud.toUpperCase()
}

console.log(yelling("caffeine keeps you going"))

// STRETCH Challenges


// The World Translator

// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.

const helloWorld = (langCode) => {
    if (langCode === "es"){
        return "Hola Mundo"
    } else if (langCode === "de"){
        return "Hallo Welt"
    } else if (langCode === "en"){
        return "Hello World"
    } else if (langCode === "ja"){
        return "こんにちは世界"
    } else if (langCode === "mi"){
        return "kia ora te ao"
    }
}

console.log(helloWorld("ja"))

// (b) Have your function default to returning English.

// const helloWorld = (langCode) => {
//     if (langCode === "es"){
//         return "Hola Mundo"
//     } else if (langCode === "de"){
//         return "Hallo Welt"
//     } else if (langCode === "en"){
//         return "Hello World"
//     } else if (langCode === "ja"){
//         return "こんにちは世界"
//     } else if (langCode === "mi"){
//         return "kia ora te ao"
//     } else {
//         return "Hello World"
//     }
// }

//console.log(helloWorld("po"))




// The Pluralizer


// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.

// pluralizer(5, "cat")
// // expected output: "5 cats"

// pluralizer(1, "dog")
// // expected output: "1 dog"

const pluralizer = (number, noun) => {
    if (number === 1){
        return `${number} ${noun}`
    } else if (number > 1){
        return `${number} ${noun.concat("s")}`
    } else {
        return "What are you talking about?"
    }
}

console.log(pluralizer(0, "cat"))



// (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".


