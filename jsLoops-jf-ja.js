// Create a for loop that logs each number from 1 - 20.

// for(let i = 1; i <= 20; i++){
//     console.log(i)
// }


// Create a for loop that logs every other number from 1 - 20.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// for(let i = 0; i <= 20; i++){
//         if(arr[i] % 2 !== 0){
//          console.log(arr[i])}
//     }
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i] * 3)
// }

// Create a for loop that logs the result of each number from 1 - 20 tripled.
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc

for(let i = 0; i < 20; i++){
    if(arr[i] % 2 !== 0){
     console.log("Odd")}
else {
    console.log(arr[i])
}
}