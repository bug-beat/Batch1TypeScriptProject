// OLD WAY

let string1: string = 'myString'
let string2: string = 'myString'
let string3: string = 'myString'
let string4: string = 'myString'
let string5: string = 'myString'
let string6: string = 'myString'

// NEW ARRAY WAY
let fruits = ["apple", "banana", "orange"];

// Access individual elements using index
let firstFruit = fruits[0];  // "apple"
let secondFruit = fruits[1]; // "banana"
let thirdFruit = fruits[2];  // "orange"

console.log(firstFruit);   // Output: apple
console.log(secondFruit);  // Output: banana
console.log(thirdFruit);   // Output: orange

// what if I will have more fruits, what should I do?
fruits.push('mango')
console.log(fruits);

fruits.push('pineapple', 'plums')
console.log(fruits);


// what if one of my fruits went bad and I need to get rid of it.
let removedFruit = fruits.pop()
console.log(fruits);
console.log('Removed fruit = ' + removedFruit)


//create a simple string array of what you like cars, fashion, etc. and send it to me
// length is returning how many variables you have in an array
// let salih = ['Salih', 'Aydin', 99, true]

// typescript is a language which forcing the data type which javascript doesn't have
// 1. Create an empty shopping list array
// let shoppingList = []; // oh this just gonna empty data type forever

// let myString: number;
// myString = 4
// shoppingList.push("bread", "butter", "eggs", "apples", 4, true)
// console.log("shopping list:" + shoppingList)

// 2. Add 5 items to your list using push()
// Your code here...

// 3. Display the length of your list
// Your code here...

// 4. Remove the last item using pop()
// Your code here...

// 5. Display your final list
// Your code here...

let shoppingList: (string | number | boolean)[] = [];
let returnOfPushMethod = shoppingList.push("coffee", "bread", "butter", "eggs", "apples") // Appends = adds
console.log('Adding all the items ' + returnOfPushMethod) // new array + 2
// 5
console.log('Print the array length property = ' + shoppingList.length)

// every method does
// execution of a code (example: push-> adds)
// returns or not -> when it returns you can hover and see, and when it doesn't return(void)
// void means = empty/space


console.log("shopping list:" + shoppingList)
shoppingList.length
console.log("List length:" + shoppingList.length)

// when we need to remove the last variable and we don't want to see or reuse the removed variable
shoppingList.pop() // this removes apples

// when we need to remove the last variable and we want to see and we don't want to reuse the removed variable
console.log(shoppingList.pop()) // this removes eggs

// when we need to remove the last variable and we want to reuse the removed variable
let removedITem = shoppingList.pop() // this removes butter

console.log("Removed item:" + removedITem)
console.log("Final shopping list:" + shoppingList) // coffee bread, + 4
//"coffee", "bread", "butter", "eggs", "apples" + 1
//





// create an empty array arrayName : (somethingHere)[] = []

// after that push 4 new elements and don't store or print push().
// after that push 2 new elements and print push()
// after that push 3 new elements and store push() and print it with a message.

// store -> create a variable and save it.
// print -> console log it

// variableName : dataType(s)[] = []
// arrayName : (somethingHere)[] = []

// also send me your guess what's inside your array without running your code.



let theBurger: (string | number | boolean)[] = []

theBurger.push("bread", "tomato", "pickles", "meat")

let pushReturn = theBurger.push("ketchup", "lettuce")

console.log(pushReturn)
console.log(theBurger.push("ketchup", "lettuce"))

let theBurger3 = theBurger.push("oil", "olives", "bacon")

console.log(theBurger)

// good code = no repetition, understandable.

// I am buying protein bars and chips on amazon.
// if I will have 4 items at my cart I can't buy more. 

let myCart: string[] = ['Pure Protein']

let myCurrentCartSize = myCart.push('protein bar') // 2

// now I saw protein chips on sale
// when you call a variable without anything before the variable name
// it replaces the old
myCurrentCartSize = myCart.push('protein chips') // 3


// Simulating a real QA automation scenario: Managing test cases for Google.com
// create an empty array for storing your test cases.
// add 'Login Test' to that array. 
// add 'Search Test' to that array

// I want you to print all the amount of test cases you have after you add a new one.

let testCases: string[] = []
let testCaseNumber = testCases.push('Login Test')
console.log(testCaseNumber)

testCaseNumber = testCases.push('Search Test')
console.log(testCaseNumber)

// 'Checkout Test' and print the amount of the new test cases

// 'New User Test' and print amount of the new test cases with the with push method

// Print all the test cases and amount of it
// 'All the tests = Login Test, Search Test, Checkout Test, New User Test'
//  Amount/length of the test cases is 4

// testCaseNumber = testCases.push('check out test')

console.log(testCases)
console.log(testCases.length)