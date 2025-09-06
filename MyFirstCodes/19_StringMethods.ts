// methods/functions/actions are useful reusable pieces of codes.
// 
//string has couple really useful methods
//


// toUpperCase() 
// toLowerCase()

// let myLowerCaseString: string = 'hello this is a lower case sentence!'
// let myUpperCaseString: string = myLowerCaseString.toUpperCase()

// console.log(myLowerCaseString)
// console.log(myUpperCaseString)


// let trimNeededString: string = ' grace    '
// let cleanedString: string = trimNeededString.trim()

// how about if need check if some string contains something 

let longSentence: string = 'Hello I am learning string methods today';
let myWord: string = 'earning'

console.log(longSentence.includes(myWord))
console.log(longSentence.endsWith('Hello'))
// 


// biggerString.startWith(smallerString) -> checking if your string is starting with the given other string
// biggerString.endsWith(smallerString) -> checking if your string is ending with the given other string





let food: string = 'I really love apples';
let dessert: string = 'In my favourite restraunt I always have apple pie'
console.log(dessert.startsWith('In'));  /// false
console.log(dessert.endsWith('In my favourite restraunt I always have apple pi'))





// I am working at the facebook.
// if the user name is starting with 'admin-user-facebook' then 'You have full access'
// otherwise 'You need to have more access'
// userName -> admin-user-facebook-123123 -> 'You have full access'
//              user-facebook-123123 -> 'You need to have more access'

// startsWith()
let userName: string = 'admin-user-facebook-123123'
if (userName.startsWith('admin-user-facebook')) {
    console.log('You have full access')
} else {
    console.log('You need to have more access')
}







// As an engineer at Phillips
// we are creating a search engine
// if the customer will search 'TV'
// and the product will include the 'TV' inside the name.
// then we should print 'We have a match'
// otherwise 'There was no match'

let tvName = 'Phillips TV'

//

// At the airport system
// we are checking flights
// if the flight number starts with "UA"
// that then "This is a United Airlines flight "
// otherwise it's another airline "This is a different airline"

let flightNumber: string = "UA345";
let airlineCode: string = "UA";


// we are creating an automation framework
// and we need to upload different documents to our web application

// if my document ends with '.pdf' then 'this is a PDF file'
// else if my document ends with '.docx' OR '.doc' then 'this is a Word document'
// else if my document ends with '.xlsx' OR '.xls' then 'this is an Excel file'
// else if my document ends with '.txt' then 'this is a Text file'
// else if my document ends with '.csv' then 'this is a CSV file'
// else if my document ends with '.json' then 'this is a JSON file'
// otherwise 'unsupported file type'



// length -> returning you the length of the string
// 'abc' -> length -> 3
// "Knopa" -> length -> 5


let nameWithLength: string = 'Tania' // length -> 5
console.log(nameWithLength.length)

// we are working for facebook and we are taking password variable
// if the password variable has the length more than or equal to 8 -> then 'Strong password'
// otherwise 'Weak password'

// length
// >= 
// if, else


let password: string = 'KnopaIsAChicken'

if (password.length >= 8) {
    console.log('Good password!')
} else {
    console.log('Weak password')
}


// slice -> extremely useful for slicing a string
// when you have a big string you can take a smaller part of it with this method.

let myFirstAndLastName = 'Salih Aydin'
let myFirstName = myFirstAndLastName.slice(0, 5) // first number is INCLUDED, last number is NOT INCLUDED
console.log(myFirstName)

// charAt() -> returning a character from a string

console.log(myFirstAndLastName.charAt(6))





let myString: string = 'Hello World Hello'
//
console.log('--------------------------------')
console.log(myString.indexOf('Hello')) // returning the word is starting at as INDEX
console.log(myString.lastIndexOf('Hello'))  // 12 +4, 16 +1, idk, I am not sure
console.log(myString.replace('Hello', 'Bye')) // 'Bye World Hello' +5, Same 
console.log(myString.replaceAll('Hello', 'Bye'))















