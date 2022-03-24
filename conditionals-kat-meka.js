// Make sure you try different options and change the variables to ensure properly working code.

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

var item = 90
if (item <= 100){
    console.log("in budget")
}

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

var hungry = true
if (hungry === true){
    console.log("eat food")
} else {
    console.log("keep coding")
}

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

var trafficLight = "yellow"
if (trafficLight === "green"){
    console.log("go")
} else if (trafficLight === "yellow"){
    console.log("slow down")
} else if (trafficLight === "red"){
    console.log("stop")
} 


// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

var firstNum = 100
var secondNum = 100

if (firstNum > secondNum){
    console.log(firstNum)
} else if (secondNum > firstNum){
    console.log(secondNum)
} else if (firstNum === secondNum){
    console.log("the numbers are the same")
}


// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

var favNum = 4

if (favNum === 0){
    console.log("Your favNum is zero")
} else if (favNum % 2 != 0){
    console.log("This number is odd")
} else if (favNum % 2 == 0){
    console.log("This number is even")
}

// STRETCH Challenges
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

var grade = 43
if (grade === 100){
    console.log("Perfect score")
} else if (grade === 0){
    console.log("no grade available")
} else if (grade >= 90){
    console.log("A")
} else if (grade >= 80 && grade < 90){
    console.log("B")
} else if (grade >= 70 && grade < 80){
    console.log("C")
} else if (grade >= 60 && grade < 70){
    console.log("D")
} else if (grade < 60){
    console.log("F")
} 

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.