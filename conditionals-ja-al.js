// //Conditionals challenge
//
// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
const price = 75
if (price <= 100){
  console.log("in budget")
}
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
const status = "hungry"
if (status === "happy"){
  console.log("eat food")
}else {
  console.log("keep coding")
}
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "green"
if(trafficLight === "green"){
  console.log("go")
}else if (trafficLight === "yellow"){
  console.log("slow down")
}else if (trafficLight === "red"){
  console.log("stop")
}
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
const num1 = 70
const num2 = 25
if (num1 === num2){
  console.log("the numbers are the same")
}else {
  console.log(num1)
}
// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
const givenNumber = 6
if(givenNumber === 0){
  console.log("zero")
}else if(givenNumber % 1== 0){
  console.log("odd")
}else if(givenNumber % 2 == 0){
  console.log("even")
}
