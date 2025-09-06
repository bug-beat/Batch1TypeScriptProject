
// If I would have a number 24 and I just need to convert this to string 

let myAge: number = 99

// method 1
let myAgeString: string = myAge.toString()
// method 2 -> thing it as you are filling and EMPTY string with a number
let myAgeString2: string = '' + myAge
// method 3 
let myAgeString3: string = String(myAge)

console.log(myAgeString)
console.log(myAgeString2)
console.log(myAgeString3)


// choose a number and convert the number with the given 3 ways

//  String to Number 
// 'Purple Mattress price = 499'
// 'Bed Sheet price = 45'
// 'Total = 999'


let stringNumber: string = '499';

// Method 1
let numberVersion: number = Number(stringNumber)
// Method 2 parseInt() and parseFloat()
// parseInt() is a method converting string to number
// parseFloat() is a method and converting decimal string to number

// 14 whole number AND this is 14.2 a decimal number
let numberVersion2: number = parseInt(stringNumber)
let numberVersion3: number = parseFloat(stringNumber)

console.log(numberVersion)
console.log(numberVersion2)
console.log(numberVersion3)


// For the decimal string number


let decimalStringNumber: string = '499.123';

// Method 1
let decimalVersion: number = Number(decimalStringNumber)
// Method 2 parseInt() and parseFloat()
// parseInt() is a method converting string to number
// parseFloat() is a method and converting decimal string to number

// 14 whole number AND this is 14.2 a decimal number
let decimalVersion2: number = parseInt(decimalStringNumber)
let decimalVersion3: number = parseFloat(decimalStringNumber)
console.log('-----------------------------------------------')
console.log(decimalVersion)
console.log(decimalVersion2)
console.log(decimalVersion3)



// we are an automation engineer at purple.com
// we do have 3 decimal string prices
// one is purpleMattress -> '499'
// another one is purplePillow -> '59'
// and the web application says the total is -> '999'
// we need to check if the total of purpleMattress AND purplePillow EQUALS to 558
// if the total matches then 'Total calculation is RIGHT.'
// otherwise 'Total calculation FAILED'

// 1. convert it to number
// 2. do math operation addition with the items
// 3. create an true or false expression with comparison === 
// 4. put your expression in the if else

// let purpleMattress: string = '499'
// let purplePillow: string = '59'
// let webAppTotal: string = '999'

// console.log(purpleMattress + purplePillow) // '49959'

// let numberPurpleMattress: number = parseFloat(purpleMattress)
// let numberPurplePillow: number = parseFloat(purplePillow)
// let numberWebAppTotal: number = parseFloat(webAppTotal)

// let expectedTotalNumber: number = numberPurpleMattress + numberPurplePillow

// if(expectedTotalNumber === numberWebAppTotal){ // 558 === 999
//     console.log('Total calculation is RIGHT.')
// }else {
//     console.log('Total calculation is FALSE.')
// }



// we are an automation engineer at purple.com
// we do have 3 decimal string prices
// one is purpleMattress -> '499.99'
// another one is purplePillow -> '59.99'
// and the web application says the total is -> '559.98'
// we need to check if the total of purpleMattress AND purplePillow EQUALS to 559.98
// if the total matches then 'Total calculation is RIGHT.'
// otherwise 'Total calculation FAILED'

let purpleMattress: string = '499.99'
let purplePillow: string = '59.99'
let webAppTotal: string = '559.98'

if ((parseFloat(purpleMattress) + parseFloat(purplePillow)) === parseFloat(webAppTotal)) {
    console.log('Total calculation is RIGHT.')
} else {
    console.log('Total calculation FAILED')
}



// we are on budget and we are saving money
// streaming services has to go
// we get rid of all the services which is more than 15 dollars
// if the streaming service is more than 15 dollars then say 'We are canceling you.'
// otherwise say 'We will keep it.'

let netflixCost: string = '13.99'
let disneyCost: string = '17.99'
let youtubePremium: string = '22.99'


// 3 separate if else

// we are going to the dealer and we do have 2 different porsche taycans
//  we will buy all the porsche taycans which is less than 55000.00
// if the price is good then say 'we are buying you'
// otherwise say 'deal is off'
let porsche1: string = '53999.99'
let porsche2: string = '52999.99'


