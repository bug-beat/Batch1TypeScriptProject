let logEntry: string = '[INFO] Test started [ERROR] Login failed [INFO] Retrying [ERROR] Timeout';

// Your tasks:
// 1. Find the position of the first '[ERROR]' entry
// 2. Find the position of the last '[ERROR]' entry
// 3. Find the position of the first '[INFO]' entry
// 4. Print all positions with descriptive messages
// 5. Calculate how many characters are between first and last error


// find the position of the last one and subtract the first one's position from it.
// '[INFO] Test started [ERROR] Login failed [INFO] Retrying [ERROR] Timeout'
//  012345678                 *27-index                      *57-index
//  

// 1. From which variable you will call method.
// 2. what method you will call.
// 3. what to put inside or leave empty.

let firstErrorPositionEnd: number = logEntry.indexOf('[ERROR]') + 7 //-> 27
let lastErrorPosition: number = logEntry.lastIndexOf('[ERROR]') // -> 57
let charBetweenErrors: number = lastErrorPosition - firstErrorPositionEnd


















let productCode: string = 'PROD-ELEC-2024-SMART-XL';

// Your tasks:
// 1. Find the position of the first '-' character
// 2. Find the position of the last '-' character
// 3. Extract the category (between first and last '-')
// 4. Extract the size (after the last '-')
// 5. Print the extracted information

let firstDashPosition: number = productCode.indexOf('-')
let lastDashPosition: number = productCode.lastIndexOf('-')

// 1. From which variable you will call method.
// 2. what method you will call.
// 3. what to put inside or leave empty.

// ELEC-2024-SMART
// slice()
let betweenDash: string = productCode.slice(firstDashPosition + 1, lastDashPosition)

// ELEC-2024-SMART 
// 15
let sizeBetweenLastAndFirstDash: number = productCode.lastIndexOf('-')






// 'My product is = |Purple Mattress|'

// 1. Purple Mattress
// 2. 15

let myProductString: string = 'My product is = |Purple Mattress|'

// slice() => return a piece of string
// first index of |
// last index of |
// and these 2 indexes will go into my slice method.


// 1. From which variable you will call method.
// 2. what method you will call.
// 3. what to put inside or leave empty.
let firstIndexOfSpecial: number = myProductString.indexOf('|')
let lastIndexOfSpecial: number = myProductString.lastIndexOf('|')

let myProduct: string = myProductString.slice(firstIndexOfSpecial + 1, lastIndexOfSpecial) // mattress with only one s
console.log(myProduct)




// extract the 'Purple Mattress' from
// myMattressString = 'My dream mattress is &Purple Mattress&'
// slice(), indexOf(), lastIndexOf()



// let myMattress: string = 'Purple Mattress';
let myMattressString: string = 'My dream mattress is &Purple Mattress&';
//
// indexOf(), lastIndexOf()
// 
let firstIndexOfAndSign: number = myMattressString.indexOf('&')
let lastIndexOfAndSign: number = myMattressString.lastIndexOf('&')

// first sign is included because slice is including the first number character
// last sign is not included because slice method is not including the last index
let purpleMattressString1: string = myMattressString.slice(21, 36)
let purpleMattressString2: string = myMattressString.slice(firstIndexOfAndSign + 1, lastIndexOfAndSign)
// 
console.log(purpleMattressString1);
console.log(purpleMattressString2);




let myCity: string = 'Welcome to [New York City]!'

// FIRST TASK
// slice() => return a piece of string
// first index of [
// last index of ]
// and these 2 indexes will go into my slice method.

// SECOND TASK
// Get the size of the New York City

let myCityString: string = 'Welcome to [New York City]!'
let firstBraket: number = myCityString.indexOf("[")
let lastBraket: number = myCityString.indexOf("]")
// let myCity: string = myCityString.slice(12, 25)
let myCity1: string = myCityString.slice(firstBraket + 1, lastBraket)

let myCityLength: number = myCity1.length



let myEmail: string = 'Contact me at <hello@example.com>'

// slice() => return a piece of string
// first index of <
// last index of >
// and these 2 indexes will go into my slice method.

//





// dealer
// we are on car.com
// and we see messages just like the example -> 'This car is (Mercedes)'
// if the car is 'Mercedes' then 'we are going to dealer' 
// otherwise 'we keep browsing'
// websiteMessage => 'This car is Mercedes'
// extract -> Mercedes
// check the car if it is Mercedes.

let myCar: string = 'This car is (Mercedes)'
let myFirstQuat = myCar.indexOf('(')
let myLastQuat = myCar.lastIndexOf(')')
let myCarString = myCar.slice(myFirstQuat + 1, myLastQuat)
if (myCarString === 'Mercedes') {
    console.log('we are going to dealer')
} else {
    console.log('we keep browsing')
}









// vacation
// we are on expedia.com
// and we see messages just like the example -> 'This vacation is at -Jamaica-'
// if the location spot is 'Jamaica' OR 'Singapore' then 'we are going to travel' 
// otherwise 'we keep browsing'
// websiteMessage => 'This vacation is at -Jamaica-'
// extract -> Jamaica OR Singapore
// check if the vacation location is either Jamaica OR Singapore





// let expediaMessage: string = 'This vacation is at -Jamaica-'
// let firstQuoteMark: number = expediaMessage.indexOf("-")
// let lastQuoteMArk: number = expediaMessage.lastIndexOf("-")
// let myExtractedMessage: string = expediaMessage.slice(firstQuoteMark + 1, lastQuoteMArk)
// console.log(myExtractedMessage)
// if ((myExtractedMessage === "Jamaica") || (myExtractedMessage === "Singapore")) {
//     // Jamaica OR Singapore
//     console.log('we are going to travel')
// } else {
//     console.log('we keep browsing')
// }







// // grocery
// // we are on a grocery website
// // message: 'Fresh apples at |$3.49| per lb'
// // if the price is lower or equal to $5 then 'buy the item'
// // otherwise 'skip it'

// let websiteMessage: string = 'Fresh apples at |$3.49| per lb'

// // Tasks for the student:
// // 1. Find the first and last index of |
// // 2. Extract the price using slice() 
// // 3. Remove the $ sign and convert the string to a number 'parseFloat()'
// // 4. Check if the price is <= 5
// // 5. Print 'buy the item' if true
// // 6. Print 'skip it' if false




// let webMessage: string = "Fresh apples at |$3.49| per lb"
// let startSign: number = websiteMessage.indexOf("$")
// let endSign: number = websiteMessage.lastIndexOf("|")
// let myGroceryMessage: string = webMessage.slice(startSign + 1, endSign)
// console.log (myGroceryMessage) // $3.49
// let price: number = parseFloat(myGroceryMessage)
// if(price <= 5 ){
//     console.log ('buy the item')
// }else{
//     console.log ('skip it')
// }





let websiteMessage: string = 'Fresh apples at |$3.49| per lb'
let firstDash = websiteMessage.indexOf('|')
let lastDash = websiteMessage.lastIndexOf('|')
let websiteMessageString = websiteMessage.slice(firstDash +2,lastDash)
console.log(websiteMessageString)
// let applePrice: string = '$3.49'
let applePrice: number = parseFloat(websiteMessageString)
if(applePrice <= 5){
    console.log('buy the item')
}else{
    console.log('skip it')
}















