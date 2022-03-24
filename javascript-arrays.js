// <<<<<<< arrays-vs-vd
// accsing specific values inside an array

// let learnStaff = ["Sarah", "Chelsea", "Beau", "Elyse"]
// console.log(learnStaff);

// console.log(learnStaff [0]);
// Sarah

// console.log(learnStaff [2]);
// Beau

// console.log(learnStaff [9]);
// undefined


// Changing elements

// learnStaff = ["Sarah", "Chelsea", "Beau", "Else"]
// console.log(learnStaff)

// reassinging a typo per index
// learnStaff[3] = "Elyse"
// console.log(learnStaff);


// Lenght Property

// Length tells how many elements are in an array

// let learnStaff = ["Sarah", "Chelsea", "Beau", "Elyse"]
// console.log(learnStaff.length)
// 4 which trhe number of arrrays because of the brackets

// built in methods
// pieces of functionality to perform common task
// will need an arugment inside () parethesis oftenly

// mutators - setter methods and will change the array in some way
//  output is not always going to be an arrrays

// .push() is going to add a value at the END of array
// Value is passes as an arugment
// output of this method lenght of new array

// let learnStaff = ["Sarah", "Chelsea", "Beau", "Elyse"]
// console.log(learnStaff.push("Austin"));
// 5

// console.log(learnStaff.length);
// counts the length of both!!!

// .pop()
// removes the last value in an array! only the last
// Returns the value that was removed
// nothing needs to be passed as an argument


// let learnStaff = ["Sarah", "Chelsea", "Beau", "Elyse"]
// console.log(learnStaff.pop());
// "Elyse"
// console.log(learnStaff);
// shows everyone but Elyse in the arrrays

// .reverse()
// does not need argument

// let learnStaff = ["Sarah", "Chelsea", "Beau", "Elyse"]
// console.log(learnStaff)
// console.log(learnStaff.reverse())
// console.log(learnStaff)

// .sort()
// Alaphetize strings
// numbers are sorted based on addtiona info (will expand later)

// let learnStaff = ["Sarah", "Chelsea", "Beau", "Elyse"]
//   console.log(learnStaff.sort());
//
// let numbers = [58, 93, 405, 20]
// console.log(numbers.sort());
// only sorts the first number wont need until next week


// Accessors - GETTER methods retrivew a portion of data - DOES not get mutated

// .index(value) passing a value
// return the index number of the FIRST instance of the value
// Return will be -1 does not exisit in the array

// let learnStaff = ["Sarah", "Chelsea", "Beau", "Elyse"]
// console.log(learnStaff.indexOf("Sarah"));
//
// console.log(learnStaff.indexOf("sarah"));
// it's case sensitive!!!

// .slice(index)
// creates a subest of the arrrays
// takes the argument of index and starets the subset
    // optional arugment to end subst


// let learnStaff = ["Sarah", "Chelsea", "Beau", "Elyse", "Charlean", "Austin"]
// console.log(learnStaff.slice(2))

// .concat()
// merges two arrays together
// can also add values to array without mutating

// let alphaTeam = ["Sarah", "Austin", "Charlean"]
// let bravoTeam = ["Sarah", "Beau", "Elyse"]
// let instructionTeam = alphaTeam.concat(bravoTeam)
//
// console.log(instructionTeam)

// Strings to Arrays

// .split()
// Take an argument of where to split the string
// "" quotes make every single letter its own elment!!!
// console.log(hello.split(""));
// " " with space seperates each by a word!!
// console.log(hello.split(" "));

// let hello = "Hello Bravo class"
// console.log(hello.split(" "));

// Array to string
// .join()
// Takes an argument that determines what is in between each charater in the string
// console.log(hello.join(" ")); spaces between sentcies
// console.log(hello.join()); includes commas
 // console.log(hello.join("") all words together

// let hello = ["Hello", "bravo", "class"]
// console.log(hello.join(" "));

// Array Destructuring
// Allows for indiviual assigments values to variables

// let [firstName, lastName] = ["Bruce", "Wayne"]
// console.log(firstName);
// // Bruce
// console.log(lastName);
// // Wayne
// =======
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

// let hello = "Hello Bravo Team"
// console.log(hello.split())
// console.log(hello.split(" "))
// >>>>>>> main
