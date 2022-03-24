// //JavaScript Conditional Challenges

//Challenge #1

var item = 99

if (item <= 100) {
    console.log("In Budget")

//Challenge #2

let hungry = true

if (hungry == true) {
    console.log("Eat Food!")
} else {
    console.log("Keep Coding")
}

//Challenge #3 (Not Working Properly)

var trafficLight = "green"

if (trafficLight === "green") {
    console.log("Go!")
} else if (trafficLight === "yellow") {
    console.log("Slow Down!")
} else (trafficLight === "red") ;
    console.log("Stop!")

//Challenge #4

var largeNumber = 1000
var smallNumber = 1 

if (largeNumber >= smallNumber) {
    console.log(largeNumber)
} else (largeNumber === smallNumber) ;
    console.log("The numbers are the same")
}
//Challenge #5

var randomNumber = Math.random()
if (randomNumber % 2 == 0) {
    console.log("The number is even")
} else {
    console.log("The number is odd")
}

//Challenge #6

var myGrade = 80
if (myGrade == 100){
    console.log("Perfect Score!")
} else { console.log("No Grade Available")}

//Challenge #7

console.log(typeof true)

//Challenge #8

let userPassword = "Testpassword!"

if (userPassword.length == 12 && "!"){
    console.log("Thats a mighty fine password!")
} else if (userPassword.length = 8 || "!") {
    console.log("The password is strong enough")
} else { 
    console.log("That is not a valid password")
}