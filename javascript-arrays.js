// Arrays

// Accessing Specific values inside an array 

// let learnStaff = [
//     "Sarah", "Chelsea" , "Beau", "Elyse"
// ]

// console.log(learnStaff[0])
// sarah

// Length Properties
// console.log(learnStaff.length)
// 4


// Bulit-in Methods
// pieces of functionality to perform commom tasks
// oftentimes will need an argument inside parenthesis

// Mutators - setter methods that change the array in some way 
// output is not always going to be an array 


// .push(value)
//adds a value onto the end of an array 
// value passes as an argument 
// output of this method is the length of the new array 

// console.log(learnStaff.push("Austin"))
// console.log(learnStaff)

// .pop()
// Removes the last value of an Array 

// .reverse
// Does not need an argument 

// console.log(learnStaff.pop())
// console.log(learnStaff)
// console.log(learnStaff.reverse())

//.sort()
// Alphabetizes stings
// Numbers are sorted depending on present data

// console.log(learnStaff.sort())
 
// Accessors getter methods retrieve a portion of the data, does not modify data
// To keep output it will need to be stored seperately as a variable

// .indexOf()
// Return the index fo the first instance of the value
// Return will be -1 if the element does not exist

// console.log (learnStaff.indexOf("Sarah" ))

//.slice(index)
// Creates a subset of the array 
// takes the argument of index and starts the subset and takes an optional argument to end subset

// let learnStaff = ["Sarah", "Chelsea", "Beau", "Elyse", "Charlene", "Austin"]

// console.log(learnStaff.slice(2))

// console.log(learnStaff.slice(2,4))

// .concat()
// Merges two strings together
// Can also add values to an array wihtough mutating it

// let alphaTeam = ["Sarah", "Austin", "Charlene"]

// let bravoTeam = ["Sarah", "Beau", "Elyse"]

// let instructionTeam = alphaTeam.concat(bravoTeam)
// console.log(instructionTeam)

let hello = "Hello Bravo Team"
console.log(hello.split())
console.log(hello.split(" "))