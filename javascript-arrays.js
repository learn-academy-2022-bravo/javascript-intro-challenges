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

let [firstName, lastName] = ["Bruce", "Wayne"]
console.log(firstName);
// Bruce
console.log(lastName);
// Wayne
