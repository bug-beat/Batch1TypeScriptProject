

// let myHeadlightsAreOff2: boolean = true;
// let iSpeeded2: boolean = false;
// console.log('will i get the ticket? ' + (myHeadlightsAreOff2 || iSpeeded2))

// anything giving true or false as a result is expression
// 'I am going to prison'

// 'Yey I am not paying for ticket'

if (false) {
    // if the expression is true
    // this will be executed
    console.log('I am going to prison')
} else {
    // if the anything else this will be executed
    console.log('Yey I am not paying for ticket')
}


// write a code which print out 'your expression was true' when the expression is true
// and it should print out 'your expression was false' when the expression was false

if (false) {
    console.log('your expression was true')
} else {
    console.log('your expression was false')
    console.log('your expression was false')
    console.log('your expression was false')

}

//{} code block
// without copy pasting write an if else statement
// and your code has to print out when the expression is true 'You did a good job!'
// any other time when it's not true it has to print out 'Try again.' 



//  if wendy's is open -> create a variable a single variable
// true => we are eating dave's double.
// false => we are going to eat nothing.

let isWendysOpen: boolean = false

if (isWendysOpen) {
    console.log("we are eating dave's double.")
} else {
    console.log('we are going to eat nothing.')
}


// if the dealer is open 
// true -> we are buying a car
// false -> we are not buying a car



// if I am tired I am skipping gym today otherwise I am going to gym



// if I am hungry OR if wendys is open then I am eating, otherwise I am not eating.
// 
let hungry: boolean = true;
let wendysOpen: boolean = true;

if (hungry || wendysOpen) {
    // true will go here
    console.log('I am eating')
} else {
    // false will go here
    console.log(' I am not eating')
}

// I am going to a car dealer
// and I like to buy either a BMW or Porsche
// if the dealer has BMW OR
// Porsche then I am buying
// true -> 'I have a cool car now!'
// false -> 'I am still riding a honda civic'

// && -> AND at the same
// || -> OR is one of them okay

// If the dealer is open AND I have money




// I like burgers it's 2 am

// if the dennies is open OR
// Wendys is open 
// I am going to eat burger
// I am eating the yogurt from the fridge


// I am at bar and I want a drink.

// olderThan21 -> true/false
// hasID -> true/false
// put the && or || operator (ONLY one of them is true)
// 'I will have a drink'
// 'I will drink milk in the corner'


// I am going to a car dealer
// and I like to buy either a BMW or Porsche
// BMW
// Porsche
// hasMoney
// true -> 'I have a cool car now!'
// false -> 'I am still riding a honda civic'


let BMWExists: boolean = false;
// ||
let porscheExists: boolean = false;
// &&
let hasMoney: boolean = true;
// && -> AND at the same
// || -> OR either one of them okay
// if either one of the cars are existing AND at the same time I have money
// then action 

if ((BMWExists || porscheExists) && hasMoney) {
    console.log('I am buying a car like a rich person.')
} else {
    console.log('I got kicked or my cars are not existing')
}




// if I will solve this practice OR do the homework And at the same time
// I will be present at class
// then I am taking a lunch break
// otherwise
// I am coding at the lunch break


// if I am older or equal to 21 
// 'I will drink a beer'
// otherwise 
// 'I am drinking milk'

// number variable age
// myAge compare to 21 (<, >, <=, >=)
// 

let myAge: number = 18
if (myAge >= 21) {
    console.log('I will drink a beer')
    // true here
} else {
    // false here
    console.log('I am drinking milk')
}


// number comparison
// boolean expression
// if I am older or equal to 21 OR I have fake ID
// 
// 'I will drink a beer'
// otherwise 
// 'I am drinking milk'

// myAge
// hasFakeID

// Don't forget the parenthesis

let myAge11: number = 28;
let isIHaveFakeId: boolean = false;
if ((myAge11 > 21) || isIHaveFakeId) {
    console.log('i will drink the beer')
} else {
    console.log('i will drink the milk')
}

