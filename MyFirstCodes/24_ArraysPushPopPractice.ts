// create an array of pets and you can put their name for example: Knopa, Escobar, etc.
// Create it empty first
// Then add your first pet name
// Print the new length
// Then add the second pet name
// Print the new length
// Print the array itself
// Remove the last pet 
// Print the removed pet
// Print the array itself
// Print the length of the new array
let pets: string[] = [];
console.log(pets.push('knopa'));//1 
console.log(pets.push('escobar')) // 2
console.log(pets);//[ 'knopa', 'escobar' ]
console.log(pets.pop());///escobar
console.log(pets);//[ 'knopa' ]
console.log(pets.length) // 


// 1. Create an empty array called mixedData that can hold any data type
// 2. Add your name (string) using push()
// 3. Add your age (number) using push()
// 4. Add true or false if you like coding (boolean) using push()
// 5. Add the text "student" using push()
// 6. Add the number 100 using push()
// 7. Print the array itself
// 8. Print "My name is [name]" using index 0
// 9. Print "I am [age] years old" using index 1
// 10. Print "Do I like coding? [true/false]" using index 2
// 11. Print "My role is [role]" using index 3
// 12. Print "My score is [score]" using index 4
// 13. Print the first item (index 0) and the last item (calculate using .length)
// 14. Print "Array has [number] different pieces of information"
// 15. Remove the last item using pop() and print what was removed



let mixedData: (string | number | boolean)[] = []
mixedData.push("Tania")
mixedData.push(25)
mixedData.push(true)
mixedData.push("student")
mixedData.push(100)
console.log(mixedData)
console.log("My name is " + mixedData[0])
console.log(" I am " + mixedData[1] + "years old")
console.log("Do I like coding? " + mixedData[2])
console.log("My role is " + mixedData[3])
console.log("My score is " + mixedData[4])
console.log("The first item ", mixedData[0])

// last item in an array
// length is one step ahead 
// is length always giving the current size?
// yes %100
// 

// length -> 1, 2, 3, 4, ..... 100
// index -> 0, 1, 2, 3, ..... 99
console.log(mixedData[mixedData.length - 1]) // knowing this is useful








// // includes() -> 
// let fruits2 = ["apple", "banana", "orange"];

// // Check if items exist
// console.log(fruits.includes("banana")); // true


// splice() -> removing at any index
//          -> adding on at any index
//          -> replace at any index

// REMOVING AT ANY INDEX
// Our student array
let students = ["Alice", "Bob", "Charlie", "David"];
console.log("Original:", students); // ["Alice", "Bob", "Charlie", "David"]

// Remove 1 student starting at index 1 (remove "Bob")
let removed = students.splice(2, 2); // "Charlie" Index 2, "David" Index 3
students.splice(0); // 
console.log(students) // 

// create students and add your classmates.
// and remove first 3
// and remove everyone else 
// print the array and make sure it is empty


// create a player list and add 6 people -> soccer, etc. anything (ronaldo, messi)
// first half of the game 2 people from index 3 got injured
// print injured people's name
// then one person from the first index left
// then print the one left person
// then print the whole original array

let playersNumbers: (number)[] = [1, 2, 3, 4, 5, 6]
playersNumbers.splice(3, 2)
console.log(playersNumbers.splice(3, 2))
playersNumbers.splice(0, 1)
console.log(playersNumbers)








// Create a browser array and add "Chrome", "Firefox", "Safari", "Edge"
// Remove Safari from  browser array
// you can print here 
// Remove Firefox from  browser array
// Remove Chrome from  browser array
// I want to see an array which only has 'Edge'

// 🗑️Remove Only
// array.splice(index, count)
// Example: splice(1, 2) - Remove 2 items starting at index 1



// ➕Add Only
// array.splice(index, 0, items...)
// Example: splice(1, 0, "new") - Add "new" at index 1

// Our color array
let colors = ["red", "blue"];
console.log("Original:", colors);

colors.splice(1, 0, "green");
console.log("After:", colors);

// if I want to add 'black at the beginning'
colors.splice(0, 0, 'black')
// 'white' -> 2
colors.splice(2, 0, 'white')
// pink -> 1
colors.splice(1, 0, 'pink')
// 'purple', 'blue' at index 4
colors.splice(4, 0, 'purple', 'blue')



// // Movie playlist
// let movies = ["Action Movie", "Old Comedy", "Drama"];

// TODO: Add "New Comedy" after "Old Comedy"
// TODO: Add "Horror Movie" at the beginning (index 0)
// TODO: Add "Documentary" at the end using splice()
// TODO: Remove the middle movie





let movies = ["Action Movie", "Old Comedy", "Drama"];

// I want to replace "Old Comedy" with "New Comedy"
movies.splice(1, 1, 'New Comedy')

// 1ST TASK
// I want you guys to replace the "Drama" with "No Drama Lama"
// let movies = ["Action Movie", "Old Comedy", "Drama"];

// 2ND TASK
// Replace 'Action Movie' with your favorite genre
// 3RD TASK
// Remove everything and add 'Homework'


