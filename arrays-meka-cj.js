// Consider the variable:

// var groceryList = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.

var groceryList = ["chips", "dip", "cookies"]
// console.log(groceryList.push("soda"))
// console.log(groceryList)

// Write the code that will add "granola" to the end of array without altering the original array.

// console.log(groceryList.concat("granola"))
// console.log(groceryList)

// Write the code that will return a subset of the array containing only "chips" and "dip".

// console.log(groceryList.slice(0, 2))

// Write the code that will add "beans" to the "chips" and "dip" array.

let partyDip = groceryList.slice(0, 2)
partyDip.push("beans")
console.log(partyDip)


// --------------------------------------------------------------------------------------------
// Consider the variable:

// var numbers = [2, 4, 6, 8, 10]

// Write the code that will add the number 0 to the beginning of the array.

let numberChallenge = [2, 4, 6, 8, 10]

console.log(numberChallenge.unshift(0))
console.log(numberChallenge)

// Write the code that will add the number 12 to the end of the array.

numberChallenge.push(12)
console.log(numberChallenge)

// Write the code that will remove the first number from the array.

let newNumberChallenge = numberChallenge.slice(1)
console.log(newNumberChallenge)

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)

let numberZero = [0]

console.log(numberZero.concat(numberChallenge))

// --------------------------------------------------------------------------------------------

// Consider the variable:

var numSet = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.

console.log(numSet.indexOf(2))

// Write the code that finds the index of the last appearance of the number 2.

console.log(numSet.lastIndexOf(2))

// Write the code that returns the number at the third index.

console.log(numSet.slice(3, 4))

// --------------------------------------------------------------------------------------------

// Consider the variable:

var characters = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the characters array together into a string.

console.log(characters.join(""))

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.

let charsReversed = characters.reverse()

console.log(charsReversed)

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.

console.log(charsReversed.join("*"))

// Write the code that brings all the letters in the charsReversed array together into a string without separators.

console.log(charsReversed.join(""))

// Create two arrays consisting of three first names of your cohort members in each.

let cohortGroupA = ["Dustin","Jimmy","LJ"]
let cohortGroupB = ["Tameka","Cj","Victor"]

// Write the code that sorts the names in alphabetical order.

console.log(cohortGroupA.sort())
console.log(cohortGroupB.sort())


// Write the code that sorts the names in reverse alphabetical order.

let reverseCohortGroupA = cohortGroupA.sort()
let reverseCohortGroupB = cohortGroupB.sort()

console.log(reverseCohortGroupA.reverse())
console.log(reverseCohortGroupB.reverse())


// Write the code that sorts all the names in alphabetical order in a single array.

let fullCohort = cohortGroupA.concat(cohortGroupB)

let sortedFullCohort = fullCohort.sort()

console.log(sortedFullCohort)

// --------------------------------------------------------------------------------------------

// Consider the variables:

var numbers = [42, 221, 71, 7, 18, 87]
//var oddIndexes = [numbers.slice(% 2 != 0)]

// Write the code that logs the values from the numbers array that are at odd indexes.
 let oddIndexes = [numbers % 2 != 0]

console.log(oddIndexes)

// Write the code that adds the values from odd indexes into the oddIndexes array.