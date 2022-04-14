// Write a function named marco that returns "polo".
const marco = () => {
  return "polo"
}
console.log(marco())
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
  return `Welcome, ${name}!`
}
console.log(greeting("Jack"))
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (number) => {
  if(number % 2 !== 0){
    return "The number is odd"
  } else {
    return "The number is even"
  }
}
console.log(oddOrEven(88))
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (number) => {
  return number * 3
}
console.log(triple(20))
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (num1, num2) => {
  return num1 * num2
}
console.log(multiply(5, 9))
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (num3, num4) => {
  if(num3 % num4 == 0){
    return `${num3} is evenly divisible by ${num4}`
  }else {
    return `${num3} is not evenly divisible by ${num4}`
  }
}
console.log(divisibleBy(6, 3))
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (grade) => {
  if(grade <= 100 && grade >= 90){
    return "A"
  }else if(grade <= 89 && grade >= 80){
    return "B"
  }else if(grade <= 79 && grade >= 70){
    return "C"
  }else if(grade <= 69 && grade >= 60){
    return "D"
  }else if(grade <= 59){
    return "F"
  }else {
    return ""
  }
}
console.log(assignGrade(100))
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (string1, string2) => {
  if(string1.length > string2.length){
    return string1
  }else if(string1.length = string2.length){
    return ""
  }else {
    return string2
  }
}
console.log(isLonger("Hello", "Jack"))
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
const greaterNum = (num5, num6) => {
  if(num5 > num6){
    return num5
  }else if (num5 < num6){
    return num6
  }else {
    return ""
  }
}
console.log(greaterNum(10, 12))
// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
const yelling = (string3) => {
  return string3.toUpperCase()
}
console.log(yelling("hi my name is jack"))
// STRETCH Challenges
// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// (b) Have your function default to returning English.
const helloWorld = (language) => {
  if(language =="de"){
    return "Hallo Welt!"
  }else if(language == "es"){
    return "Hola Mundo!"
  }else if(language == "fr"){
    return "Bonjour Le Monde!"
  }else if(language == "ru"){
    return "Privet Mir!"
  }else {
    return "Hello World!"
  }
}
console.log(helloWorld("en"))
// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
//
// pluralizer(5, "cat")
// // expected output: "5 cats"
//
// pluralizer(1, "dog")
// // expected output: "1 dog"
const pluralizer = (number1, noun) => {
  if(number1 > 1 && noun == "sheep"){
    return number1 + " sheep"
  }else if(number1 > 1 && noun == "person"){
    return number1 + " people"
  }else if(number1 > 1 && noun == "goose"){
    return number1 + " geese"
  }else if(number1 > 1){
      return number1 + " " + noun + "s"
  }else {
    return number1 + " " + noun
  }
}
console.log(pluralizer(1, "dog"))
// (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
