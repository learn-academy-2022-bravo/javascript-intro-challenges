// Write a function named marco that returns "polo".

// const marco = () => {
//     return ("polo")
// }
// console.log(marco())



// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// const greeting = (personName) => {
//     return (`Welcome, ${personName}!`)
// }
// console.log(greeting("Victor"))



// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// const oddOrEven = (numberTake) => {
//         if(numberTake % 2 == 0){
//             return(`${numberTake} is even`)
//     }else{
//         return(`${numberTake} is odd`)
//     }
// }
// console.log(oddOrEven(66))
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// const triple = (numberTake) => {
//     return numberTake * 3
// }
// console.log(triple(2))
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// const multiply = (numberTake,numberTake2) => {
//     return numberTake * numberTake2
// }
// console.log(multiply(12312,5213))
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// const divisibleBy = (numberTake,numberTake2) => {
//         if(numberTake % numberTake2 == 0){
//             return(`${numberTake} is divisible by ${numberTake2}`)
//     }else ((`${numberTake} is not divisible by ${numberTake2}`)
//     )
// }
// console.log(divisibleBy(10,2))
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// const assignGrade = (numberTake) => {
//         if(numberTake >= 90){
//             return(`You got an A!`)
//     }else if(numberTake >= 80){
//         return(`You got an B!`)
// }else if(numberTake <= 79){
//     return(`You got an F!`)
// }
// }
// console.log(assignGrade(0))
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
// const isLonger = (numberTake,stringTake) => {
//     if(numberTake.length > stringTake.length){
//         return `${numberTake} contains more characters`
// }else {
//     return `${stringTake} contains more characters`
// }
// }
// console.log(isLonger("0123312323211212","12123123123121231221331231"))
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
// const greaterNum = (numberTake,stringTake) => {
//     if(numberTake > stringTake){
//         return `${numberTake} is the greater number`
// }else {
//     return `${stringTake} is the greater number`
// }
// }
// console.log(greaterNum(333,44))
// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
// const yelling = (numberTake) => {
//         return numberTake.toUpperCase()
// }

// console.log(yelling("ajkdshfkdjshfalskdjf"))




// STRETCH Challenges


// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.

// Dutch 	nl  Hallo Wereld!
// Croatian	hr  Pozdrav svijete!
// Czech	cs  Ahoj světe!
// Danish	da  Hej Verden!
//Spanish       sp  Hola Mundo!


//  let [nl, hr, cs, da, sp] = ["Hallo Wereld!", "Pozdrav svijete!", "Ahoj světe!", "Hej Verden!", "Hola Mundo!"]


// const languageCode = (languageCodeTwoLetters) => {
//         return languageCodeTwoLetters
// }

// console.log(languageCode(nl))
// console.log(languageCode(hr))
// console.log(languageCode(cs))
// console.log(languageCode(da))
// console.log(languageCode(sp))


// (b) Have your function default to returning English.

// const languageCode = (inputTwoLetters) => {
//         const twoLetterCodes = ["nl", "hr", "cs", "da", "sp"]
        
//         const languageOut = ["Hallo Wereld!", "Pozdrav svijete!", "Ahoj světe!", "Hej Verden!", "Hola Mundo!"]
        
//         if (twoLetterCodes.indexOf(inputTwoLetters) == -1 ){ 
//                 return "Hello World!"
//         }else {
//                 return languageOut[twoLetterCodes.indexOf(inputTwoLetters)]
//         }
// }

// console.log(languageCode("nl"))
// console.log(languageCode("hr"))
// console.log(languageCode("cs"))
// console.log(languageCode("da"))
// console.log(languageCode("sp"))
// console.log(languageCode("sdf"))
// console.log(twoLetterCodes.indexOf("sdf"))

// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.

//variable takes number
//condition statement that adds an s to the noun if above number is >1

// pluralizer(5, "cat")
// // expected output: "5 cats"

// const pluralizer = (takeNum,takeNoun) => {
//         if(takeNum !== 1){
//                 return (takeNum + " " + takeNoun + "s")
//         }else {
//                 return (takeNum + " " + takeNoun)
//         }
// }

// console.log(pluralizer(1,"cat"))
// console.log(pluralizer(-2,"cat"))
// console.log(pluralizer(0,"cat"))
// //expected output obtained moving on

// pluralizer(1, "dog")
// // expected output: "1 dog"

// const pluralizer = (takeNum,takeNoun) => {
//         if(takeNum !== 1){
//                 return (takeNum + " " + takeNoun + "s")
//         }else {
//                 return (takeNum + " " + takeNoun)
//         }
// }

// console.log(pluralizer(1,"dog"))
// console.log(pluralizer(-2,"dog"))
// console.log(pluralizer(0,"dog"))
// //expected output obtained moving on
// (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".

const collectiveNouns = ["sheep", "goose", "child", "person", "species"]
const collectiveNounsPlural = ["sheep", "goose", "children", "people", "species"]

const pluralizer = (takeNum,takeNoun) => {
        if(takeNum !== 1 && collectiveNouns.indexOf(takeNoun) == -1 ){
                return (takeNum + " " + takeNoun + "s")
        }else if(takeNum !== 1 && collectiveNouns.indexOf(takeNoun) !== -1 ) {
                return takeNum + " "+ collectiveNounsPlural[collectiveNouns.indexOf(takeNoun)]
        }else {
                return (takeNum + " " + takeNoun)
        }
}

console.log(pluralizer(1,"cat"))
console.log(pluralizer(2,"cat"))
console.log(pluralizer(1,"sheep"))
console.log(pluralizer(2,"sheep"))
console.log(pluralizer(1,"goose"))
console.log(pluralizer(2,"goose"))
console.log(pluralizer(1,"person"))
console.log(pluralizer(2,"person"))
console.log(pluralizer(1,"species"))
console.log(pluralizer(2,"species"))