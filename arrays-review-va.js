// ### Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Consider the variable:
// javascript
var groceryList = ["chips", "dip", "cookies"]
// 1. Write the code that will add "soda" to the end of the original array.
// groceryList is an array so I can use a mutator .push to add to the end of the array the value soda
//I will utilize console.log to show the expected outcome of ["chips", "dip", "cookies", "soda"]
groceryList.push("soda")
console.log(groceryList)
// result was [ 'chips', 'dip', 'cookies', 'soda' ] a quotation mark must be used up in the console log process. moving on
// 2. Write the code that will add "granola" to the end of array without altering the original array.
//In order to add onto the array without altering it I will need to use something other than a mutator.
//I see as options the following: .concat() or to make thing difficult I can .join to make a string then use a + "granola" before .spliting it together
//I'll end with a console.log to have a visual of what the output is.
var groceryList2 = groceryList.concat(["granola"])
console.log(groceryList2)
console.log(groceryList)
//option with .concat() gives the following result 
//[ 'chips', 'dip', 'cookies', 'soda', 'granola' ]
//[ 'chips', 'dip', 'cookies', 'soda' ]
//the origional grocerylist is not changed so moving on the the second form.
var groceryList4 = ["chips", "dip", "cookies"]

var groceryList3 = groceryList4.join(", ") + ", granola".split(",")
console.log(groceryList3)
console.log(groceryList4)

//result is as requested 
// chips, dip, cookies, granola
// [ 'chips', 'dip', 'cookies' ]


// 3. Write the code that will return a subset of the array containing only "chips" and "dip".
// "chips" and "dip" are both in the array given so I can slice(0,1) as the easiest option. 
console.log(groceryList4.slice(0, 2))
//had to change it to (0,2) I had forgotten how it worked but no problem, result desired given [ 'chips', 'dip' ]
console.log("Question 4 follows:")
// 4. Write the code that will add "beans" to the "chips" and "dip" array.
//I'll take the console.log from line 37 and have it instead be declaring a variable with the slice
//with that I can concat an array holding beans or I can push it or even unshift it
var groceryList5 = groceryList4.slice(0, 2)
console.log(groceryList5 + ",beans")
console.log(groceryList5.concat(["beans"]))
console.log(groceryList5.unshift("beans"))
//I could also pop cookies and add beans
console.log(groceryList4)
var groceryList6 = groceryList4
groceryList6.unshift("beans")
groceryList6.pop()
console.log(groceryList6)



// Consider the variable:
// ```javascript
// var numbers = [2, 4, 6, 8, 10]
// ```
// 5. Write the code that will add the number 0 to the beginning of the array.

// 6. Write the code that will add the number 12 to the end of the array.

// 7. Write the code that will remove the first number from the array.

// 8. Write the code that will add the number 0 to the beginning of the array without altering the original array. **HINT**: it's not `.unshift` You'll have to get creative! ;)

// Consider the variable:

var numSet = [2, 13, 6, 8, 4, 2]
console.log("Question 9 follows.")
// 9. Write the code that finds the index of the first appearance of the number 2.
console.log(numSet.indexOf(2))// 0
// 10. Write the code that finds the index of the last appearance of the number 2.
console.log(numSet.lastIndexOf(2))// 5
// 11. Write the code that returns the number at the third index.
console.log(numSet[3])// 8
// Consider the variable:


var characters = ["y", "a", "r", "r", "a"]
console.log("Question 12 follows.")

// 12. Write the code that brings all the letters in the characters array together into a string.
console.log(characters.join(""))
console.log("Question 13 follows.")
// 13. Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
var charsReversed = characters.reverse()
console.log(charsReversed)
console.log("Question 14 follows.")
// 14. Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
console.log(charsReversed.join("*"))
// 15. Write the code that brings all the letters in the charsReversed array together into a string without separators.
console.log(charsReversed.join(""))

// Create two arrays consisting of three first names of your cohort members in each.
const array1 = ["victor", "andrew", "beau"]
const array2 = ["darwin", "dustin", "elyse"]
// 16. Write the code that sorts the names in alphabetical order.
const joinArray1 = array1.concat(array2)
console.log(joinArray1.sort())
console.log("Question 17 follows.")
// 17. Write the code that sorts the names in reverse alphabetical order.
console.log(joinArray1.sort().reverse())
// 18. Write the code that sorts all the names in alphabetical order in a single array.
console.log(joinArray1.sort())

// Consider the variables:

// ```javascript
// var numbers = [42, 221, 71, 7, 18, 87]
// var oddIndexes = []
// ```
// 19. Write the code that logs the values from the numbers array that are at odd indexes.

// 20. Write the code that adds the values from odd indexes into the oddIndexes array.