// Recap:
// let myArray: (string | number | boolean)[] = ['dima', 'tania']
//  splice() - if we want to add, replace or remove something in the middle or the beginning. 
// 	removing ->  myArray.splice(indexOfWhatYouWantToRemove, howManyVariablesToDelete)
// // 	example 1:remove 2 variables from index 1
// myArray.splice(1, 2)
// // 							example 2:remove 4 variables from the begginning
// // 		myArray.splice(0, 4)
// // 	example 3:remove a single element from the end
// myArray.pop()
// myArray.splice(myArray.length - 1, 1)

// // 	adding -> myArray.splice(indexOfWhatYouWantToRemove, 0, ...variables)
// // 	myArray.splice(5, 0, 'dima', 'tania', 'dima', 'tania', 'dima', 'tania', 'dima', 'tania')
// // // example 1: let's add vova to index 1
// //     myArray.splice(1, 0, 'vova')
// // 	replacing -> myArray.splice(indexOfWhatYouWantToRemove, howManyVariablesToDelete , ...variables)
// // example 1: replace dima with dimytro
// myArray.splice(0, 1, 'dimytro')
// // example 2: if I want to remove everything and add 'new batch'
// myArray.splice(0, myArray.length, 'ronaldo', 'messi')

// if the username 0 is ending with 123 then replace it without 123 version
// 'alice123' -> 'alice'
// if the username is starting with lowercase 'b' then replace it with uppercase
// "bob456" -> "Bob456"
// if the username is starting with 'c' and ending with '789' then replace as 
// below. 
//   "charlie789" -> "Charlie" 
// if the username array is containing 'ronaldo' 
// remove "diana012"

let usernames: (string | number)[] = ["alice123", "bob456", "charlie789", "diana012", "eve345"];

// usernames -> array
// usernames[2] -> string
// usernames[0].endsWith('123') -> boolean

// 1st one
if (('' + usernames[0]).endsWith('123')) {
    // 'alice123' -> 'alice'
    usernames.splice(0, 1, 'alice')
}

if (('' + usernames[0]).endsWith('123')) {
    console.log(usernames.splice(0, 1, 'Alice'))
}

// Create an array of test case names
let testCases1: string[] = ["login_test", "SEARCH_functionality", "checkout-process", "Payment_Gateway"];

// If test case at index 0 contains underscore then replace underscore with space
// "login_test" -> "login test"

// If test case at index 1 is all uppercase then convert to title case
// "SEARCH_functionality" -> "Search_functionality"

// If test case at index 2 contains hyphen then replace with underscore
// "checkout-process" -> "checkout_process"

// Print the formatted test cases array






// Create an array: [" 500 USD", " 20 ", "true", "junior", "150USD"]
// Trim the second element, convert to number, divide by 2




// Start with: ["100USD", "temporary", "false", "80"]
// Remove "temporary" from the array
// Insert "permanent" at index 1
// Convert "100USD" to number, subtract 40
// Replace "false" with "true"
// Add "bonus:20" at the end using splice
// Extract the number from "bonus:20" and multiply by 3

let myMixedValue = ["100USD", "temporary", "false", "80"];

myMixedValue.splice(myMixedValue.length - 1, 0, "bonus:20")
let bonus20 = myMixedValue[myMixedValue.length - 1] // "bonus:20"
let bonus20Extracted = bonus20.slice(7, 9)

// let extractedNumber = myInsertedValue[3].slice(0,7)
// console.log(extractedNumber)
// let extractedNumberNumber = parseFloat(extractedNumber) * 3






