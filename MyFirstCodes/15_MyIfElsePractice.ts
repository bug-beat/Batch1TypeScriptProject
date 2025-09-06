
// 
//
// we are the QA automation engineers of Purple
// when we go to web app sometimes there is a pop up
// IF the popup is existing then dismiss it, 'popup dismissed'
// otherwise just say 'popup didn't appear'

let isPopupExisting: boolean = true;

if (isPopupExisting) {
    // true here
    console.log('Dismissed the popup')
} else {
    // false here
    console.log("Annoying popup wasn't there")
}



// we are checking our tissue types string
// if the tissue equals to lung, print 'You need to breath'
// if the tissue equals to heart, print 'You need to keep pumping'
// Everything else print 'Just chillax'
// tissueType = 'Lung'

// HOW TO
// create the syntax
// create the variable
// fill the expressions 
// print out everywhere

// if 

// else if

// else
// {} => code blocks -> having multiple lines of code together.
// () => if it's an expression and you want seperate things a bit
// you need to put at least one paranthesis for if
// if () {
//     console.log('message')
//     console.log('message')
//     console.log('message')
//     console.log('message')
//     console.log('message')
//     // thousands of lines in the code blocks
//     // and if it's true WHOLE CODE BLOCK will be executed
// } else if () {
//     console.log('message')
// }

// paranthesis always comes right after if

// let tissueType: string = 'Lung'
// if (tissueType === 'Lung') {
//     // lung stuff here
//     console.log('You need to breath')
// } else if (tissueType === 'Heart') {
//     // heart stuff here
//     console.log('You need to keep pumping')
// } else {
//     // EVERYTHING ELSE 
//     console.log('Just chillax')
// }





console.log('------------------------------------------------------')


// add checks for 'muscle', 'kidney', 'skin', 'gut'
// add 4 more else ifs 
// same single variable
// let tissueTypes: string = 'skin'
// // single if
// if (tissueTypes === 'lung') {
//     console.log('You need to breath')
// } else if (tissueTypes === 'heart') {
//     console.log('You need to keep pumping')
// } else {
//     console.log('Just chillax')
// }

// if you don't have any of these tissue types you not gonna be cancer
let tissue: string = "lung"
if (tissue === "lung") {
    console.log("You need to breath")
} else if (tissue === "heart") {
    console.log('You need to keep pumping')
} else if (tissue === "muscle") {
    console.log('You need to keep exercise')
} else if (tissue === "kidney") {
    console.log('You need to keep work')
} else if (tissue === "skin") {
    console.log('You need to get tanned')
} else if (tissue === "gut") {
    console.log('You need to be healthy')
} else {
    // EVERYTHING else which is not gut here
    console.log('You not gonna be cancer')
}




// create a variable my traffic sign color
// red => stop
// yellow => wait, about to be red
// green => GOOOO!

// myTrafficSignColor
// if(string check here)
// else if(string check here)
// else if()
//


// you are a restaurant owner
// there has 5 customers who allergies
// 'peanut', 'milk', 'chicken', 'shellfish', 'eggs'
// if any of these allergies will be in your myFood variable
// myFood = 'peanut' -> stop, this has peanut.
// if there are no allergy food, you should say 'eat with peace'

// if
// else if
// else if
// ...
// else 

let myFood: string = 'Burger'

// if there is ANY allergen in the food, then stop the customer
// otherwise (else) let them enjoy

// english sentence first, then code it.
// if my food is equal to 'chicken' OR etc.

// list -> 
if (myFood === 'chicken' || myFood === 'egg' || myFood == 'shellfish' ||
    myFood === 'peanut' || myFood === 'milk') {
    // if ANY allergen is true it will be here

} else {
    // eat with peace goes
}

// OR will give true if ANY expression is true
// AND will give true if EVERY expression is true





// if you don't have any of these tissue types you not gonna be cancer
// let tissue: string = "lung"
// if (tissue === "lung") {
//     console.log("You need to breath")
// } else if (tissue === "heart") {
//     console.log('You need to keep pumping')
// } else if (tissue === "muscle") {
//     console.log('You need to keep exercise')
// } else if (tissue === "kidney") {
//     console.log('You need to keep work')
// } else if (tissue === "skin") {
//     console.log('You need to get tanned')
// } else if (tissue === "gut") {
//     console.log('You need to be healthy')
// } else {
//     // EVERYTHING else which is not gut here
//     console.log('You not gonna be cancer')
// }

// combine them in one if condition 
// before doing that try to put it in english sentence
// have a single variable
// put whatever message you think is right

// if
// else




// You are a movie theater owner
// There are 4 age restrictions for movies:
// 'G' -> All ages
// 'PG' -> Under 13 need parental guidance
// 'PG-13' -> Must be 13 or older
// 'R' -> Must be 17 or older
//
// JUST string check no number check 
// myRating -> string
// Check your variable movieRating
// If the rating is 'G', say: "Enjoy the movie!"
// If the rating is 'PG', say: "Kids under 13 need parental guidance."
// If the rating is 'PG-13', say: "Only 13 and older can watch this."
// If the rating is 'R', say: "Only 17 and older can watch this."
// If the rating is something else, say: "Invalid rating."
//
// Example:
// movieRating = 'PG-13' -> Only 13 and older can watch this.

// 2nd task combine them into one if, if ANY rating exists, then 'Rating is valid!'
// otherwise 'Rating not found!'



// We are going to a drive thru
// restaurant -> string
// car -> string

// If we are going to 'wendys' and if we do have 'Nissan GTR' if both are existing
//      You are too cool to be in drive thru
// if you are going to wendys any if you have any other car 
//      You can order whatever you want from Wendys
// if you are going to dennies with any car
//      You can dine in and have fun
// For every other situation 
//      Slava ukraini

let restaurant: string = 'Dennies'
let car: string = 'Porsche Taycan'

// most specific check ALWAYS at the beginning
if ((restaurant === 'wendys') && (car === 'Nissan GTR')) {
    console.log('You are too cool to be in drive thru')
} else if (restaurant === 'wendys') {
    console.log('You can order whatever you want from Wendys')
} else if (restaurant === 'dennies') {
    console.log('You can dine in and have fun')
} else {
    console.log('Slava ukraini')
}



// two string checks
// 
//  I am going to a dealer.
//  if my name is 'Zelensky' AND if I want at the same time "BMW"
//          I will have a %100 discount
//  if my name is 'Salih' and any car is fine
//          I will get %50 discount
//  if I want 'Tesla'
//          You can have government credit
//  Everything else 
//          You will have the full price
// if I am salih and if there is a porsche taycan 
//          You will get a free drink with your car

let myName = "Salih";
let carWanted = "porsche taycan";

if (myName === "Zelensky" && carWanted === "BMW") {
    console.log("i will have it for free");
} else if (myName === "Salih" && carWanted === 'porsche taycan') {
    console.log("You will get a free drink with your car");
} else if (carWanted === "Tesla") {
    console.log("You can have government credit");
} else if (myName === "Salih") {
    console.log("i will have a small discount");
} else {
    console.log("you will pay the full amount");
};



// Ukrainian Restaurant Specials (Level 2)
//

// name and dish and day variables:
// If the guest is "Anna" AND she orders "Borshch"
//        → It’s free, with extra pampushky
//
// If the guest is "Vova" AND (he orders "Varenyky" OR "Holubtsi")
//        → 50% discount, because he’s a VIP regular
//
// If the guest is "Alina" AND it is "Friday"
//        → Free kompot drink
//
// If the dish is "Varenyky" OR "Deruny"
//        → Free sour cream
//
// Everything else
//        → Normal price

// ------------------------------------------------------
// ADD THE BELOW IF YOU ARE DONE EARLY
// Note you need to create a new variable for below:
// If the guest is "Dima" AND he orders "Deruny" AND it is "Monday"
//        → He gets free deruny + sour cream (very specific rule)
//
// If the guest is "Tania" AND she orders ANY 'Baklava'
//        → Free coffee with the dessert


let guest: string = "Anna";
let dish: string = "Borshch";
let day: string = "Friday";
if (guest === "Anna" && dish === "Borshch") {
    console.log("It's free, with extra pampushky!");
} else if (guest === "Vova" && (dish === "Varenyky" || dish === "Holubtsi")) {
    console.log("50% discount, because you're a VIP regular!");
} else if (guest === "Alina" && day === "Friday") {
    console.log("Free kompot drink!");
} else if (dish === "Varenyky" || dish === "Deruny") {
    console.log("Free sour cream!");
} else {
    console.log("Normal price.");
}











