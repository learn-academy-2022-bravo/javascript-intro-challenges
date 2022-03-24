// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// 
// Make sure you try different options and change the variables to ensure properly working code.

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 50 ;

if(item < 100){
console.log("in budget")
}
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = false;

if(hungry ){
 console.log("eat food")
}else{
    console.log("keep coding")
}
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

var trafficLight = "yellow"

if(trafficLight === "green"){
    console.log("go")
}else if(trafficLight === "yellow"){
    console.log("slow down")
}else if(trafficLight === "red"){
    console.log("stop")
}

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

var numberOne = 123
var numberTwo = 1321

if(numberOne === numberTwo){
    console.log("the numbers are the same")
}else if(numberOne > numberTwo){
    console.log(numberOne)
}else if(numberOne < numberTwo){
    console.log(numberTwo)
}
// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

var numberThree = 0

if(numberThree === 0){
    console.log("The number is ZERO")
}else if(numberThree %2 === 1){
    console.log("The number is ODD")
}else if (numberThree%2 === 0){
    console.log("The number is EVEN")
}


// STRETCH Challenges
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

var gradePercentage = 0;

if(gradePercentage === 0){
    console.log("no grade available")
}else if(gradePercentage === 100){
    console.log("perfect score")
}else {
    console.log(gradePercentage + "%")
}
// The typeof Operator
// The typeof operator returns the type of a variable, object, function or expression:

// Example
// typeof "John"                 // Returns string
// typeof 3.14                   // Returns number
// typeof NaN                    // Returns number
// typeof false                  // Returns boolean
// typeof [1, 2, 3, 4]           // Returns object
// typeof {name:'John', age:34}  // Returns object
// typeof new Date()             // Returns object
// typeof function () {}         // Returns function
// typeof myCar                  // Returns undefined (if myCar is not declared)
// typeof null                   // Returns object
// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

var stretchChallenge = false

if(typeof (stretchChallenge) === 'number'){
    console.log("It is Number")
}else if(typeof(stretchChallenge) === 'boolean'){
    console.log("It is Boolean")
}else if (typeof(stretchChallenge) === 'string'){
    console.log("It is String")
}
// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

var passwordChecker = "12903ui!ojk"
console.log(passwordChecker.length)
if(passwordChecker.length >= 12 && passwordChecker.includes("!") ){
    console.log("That is a mighty strong password!")
}else if(passwordChecker.length >= 8 && passwordChecker.includes("!")){
    console.log("That password is strong enough.")
}else{
    console.log("That is not a valid password.")
}




// 