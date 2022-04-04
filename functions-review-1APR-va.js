let countingLog = 1
let countingLogSentence = "Below is the console.log for the question #"
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
// once again ill utilize the above answer as a template to adjust to this question
const triple = (triple1) => {
    return triple1 * 3
}
qaz()
console.log(triple(31123))

// 5. Write a function named `multiply` that takes two numbers as arguments and returns the result of the numbers multiplied together.
// once again ill utilize the above answer as a template to adjust to this question
const multiply = (multiply1, multiply2) => {
    return multiply1 * multiply2
}
qaz()
console.log(multiply(31123,3))
// 6. Write a function named `divisibleBy` that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (divisible1, divisibleBy1) => {
    if(divisible1 % divisibleBy1 === 0){
        return `${divisible1} is evenly divisible by ${divisibleBy1}`
    }else{
        return `${divisible1} is not evenly divisible by ${divisibleBy1}`
    }
}
qaz()
console.log(divisibleBy(30,3))
// 7. Write a function named `assignGrade` that takes a number score as an argument and returns the letter grade for the score.

// const assignGrade = (numberTake) => {
//         if(numberTake >= 90){
//             return(`You got an A!`)
//     }else if(numberTake >= 80){
//         return(`You got an B!`)
// }else if(numberTake <= 79){
//     return(`You got an F!`)
// }
// }

const letterGrade = ["A+","A","B","C","D","F"]
const letterGradeMinPercentage = [95,90,80,70,60,0]
const assignGrade = (assignGrade1) => {
    for(let i = 0; i < letterGrade.length; i++){
        if(assignGrade1 >= letterGradeMinPercentage[i])
        return letterGrade[i]
    }
}
qaz()
console.log(assignGrade(90))
// 8. Write a function named `isLonger` that takes two strings as arguments and returns the string that contains the most characters.
//function named isLonger will compare with a simple if statement and .length and output 12 or 21 depending on the result of the if statement
const isLonger = (isLonger1,isLonger2) => {
        if(isLonger1.length > isLonger2.length){
            return  isLonger1
        } else{
            return isLonger2
        }
}
qaz()
console.log(isLonger("Test of which sentence is longer", "Second sentence"))
console.log(isLonger("Second sentence", "Test of which sentence is longer")) //even with the sentences possition changed it gives the same result. moving on

// 9. Write a function named `greaterNum` that takes two numbers as arguments and returns whichever number is the greater (higher) number.
//A new name has been given and I'll have to change the values being taken but beyond that and removing .length I don't think anything else needs to change from above.
const greaterNum = (greaterNum1, greaterNum2) => {
    if(greaterNum1 > greaterNum2){
        return  greaterNum1
    } else{
        return greaterNum2
    }
}
qaz()
console.log(greaterNum(6512, 512))
console.log(greaterNum(512, 6512))//both return 6512 as that is the greater number regardless of where they are placed 
// 10. Write a function named `yelling` that takes a string as an argument and return the string in all uppercase case letters.
//nothing from question 9 will be taken. will use toUpperCase
const yelling = (yelling1) => {
    return yelling1.toUpperCase()
}
qaz()
console.log(yelling("this is a test of toUpperCase"))
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