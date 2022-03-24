// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 100
var dollar = "$"
var boughtItem = 200


if (item >= boughtItem) {
  console.log("The item is in budget and price is " + dollar + boughtItem + ".")
} else {
  console.log("The item is not in budget, price is " + dollar + boughtItem + "." + " Your budget is " + dollar + item + ".")
}



// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

var hungry = true

if (hungry === true){
  console.log("eat food")
} else {
  console.log("keep coding")
}

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

var trafficLight = "green"

if (trafficLight === "green"){
  console.log("go")
} else if (trafficLight === "yellow"){
  console.log("slow down")
} else if (trafficLight === "red"){
  console.log("stop")
} else {
  console.log("where am I :O")
}

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".


var number1 = 900
var number2 = 900

if (number1 > number2){
  console.log(number1)
} else if (number1 < number2){
  console.log(number2)
} else if (number1 === number2){
  console.log("the numbers are the same")
}


// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

var number3 = 8

if (number3 % 2 == 0){
  console.log("the number is even")
} else {
  console.log("the number is odd")
}

// STRETCH Challenges
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

var gradePercent = 0
var percent = "%"

if (gradePercent === 100){
  console.log(gradePercent + percent + " is a perfect score!")
} else if (gradePercent >= 1){
  console.log(gradePercent + percent + " is not a perfect score.")
} else if (gradePercent === 0){
  console.log("No grade available.")
}

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
