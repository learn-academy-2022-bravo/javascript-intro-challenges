
// Create a for loop that logs each number from 1 - 20.
//for(let i=1; i < 21; i ++){
//  console.log(i)
//}
// Create a for loop that logs every other number from 1 - 20.
const numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for(let i=0; i < numArray.length; i++){
  if(numArray[i] % 2 == 0){
    console.log(`${numArray[i]}is the next number!`)
  }
}
// Create a for loop that logs the result of each number from 1 - 20 tripled.
//loop through and array of numbers and return each number multiplied by 3.

var numArray2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for(let i=0; i<numArray2.length; i++){
  console.log(numArray2[i] * 3)
}
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
for(let i = 0; i < numArray2.length; i++){
  if(numArray2[i] % 2 !== 0){
    console.log(`${numArray[i]} is an odd number!`)
  }else{
  console.log(`${numArray[i]})
}
// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc
// Consider this variable:
//
// const nums = [3, 57, -9, 20, 67]
// Create the code that will log the largest number from the array.
// Create the code that will log the smallest number from the array.
// Create the code that will log the remainder of each number when divided by 2.
// Expected output: 1, 1, -1, 0, 1
// Consider this variable:
//
// const myString = "learn student"
// Create the code that will log the number of times the letter "e" occurs in the string.
// Create the code that will log every other character in the string.
