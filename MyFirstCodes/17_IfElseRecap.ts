// I will go out for a nice a day at the beach
// First I need to decide if I want to go out depending on the weather.
// Then After deciding that if I will go out or not. I need to see if it will 
// be windy so that way I can take my jacket.

// first checking myWeather === 'nice' -> then 'we are going out'
// second check isWindy -> true then 'I am taking my jacket.'
// otherwise -> 'I am going out without jacket'
// otherwise -> 'we are not going out.'

let myWeather: string = 'nice'
let isWindy: boolean = true


if (myWeather === 'nice') {
    console.log('we are going out')

    if (isWindy) {
        console.log('I am taking my jacket.')
    } else {
        console.log('I am going out without jacket')
    }

} else {
    console.log('we are not going out.')
}

// I am a developer at facebook 
// I am coding the login page validations
// 
// first check -> when a user gives their userName
// and if it equals to - 'good user name' then 
// 'You are having a good user name, now let's check your password...'
// second check -> when the password is equal to 'good password' 
//          'You have a good password.'
// otherwise    -> 'You don't have a good password'
// otherwise -> 'You don't have a good user name'

// userName -> 'good user name'
// password -> 'good password'




// first checking carAvailable === true -> then 'Great! We have that car in stock.'
// second check creditScore >= 650 -> true then 'Your credit is approved! You can finance the car.'
// otherwise -> 'Unfortunately, your credit score is too low for financing.'
// otherwise -> 'Sorry, that car is not available.'

// whenever you are done you add more credit check values 550-650
// 2ND VERSION
// first checking carAvailable === true -> then 'Great! We have that car in stock.'
//     second check creditScore >= 650 -> true then 'Your credit is approved! You can finance the car.'
//     else if creditScore >= 550 -> true then 'You qualify but need a co-signer or higher down payment.'
//     else if creditScore >= 400 -> true then 'We can offer a high-interest loan with 50% down payment.'
//     otherwise -> 'Unfortunately, we cannot approve financing at this time.'
// otherwise -> 'Sorry, that car is not available.'


let carAvailable: boolean = true;
let creditScore: number = 830;

if (carAvailable) {
    // in here second checks
    // creditScore checks here

    console.log('Great! We have that car in stock.')
    // creditScore = 650, 649
    if (creditScore >= 650) {
        // 654, 650
        console.log('Your credit is approved! You can finance the car.')
    } else if ((creditScore < 650) && (creditScore >= 550)) {
        // 649, 648, 647, ......0
        console.log('You qualify but need a co-signer or higher down payment.')
    } else if ((creditScore < 550) && (creditScore >= 400)) {
        // 549-400
        console.log('We can offer a high-interest loan with 50% down payment.')
    } else {
        console.log('Unfortunately, your credit score is too low for financing.')
    }

} else {
    console.log('Sorry, that car is not available.')
}


// first checking restaurantOpen === true -> then 'Welcome! We are open for business.'
//     second check money >= 25 -> true then 'You can order our premium meals!'
//     else if money >= 15 -> true then 'You can get our regular combo meals.'
//     else if money >= 8 -> true then 'You can afford our budget menu items.'
//     otherwise -> 'Sorry, you need at least $8 for our cheapest item.'
// otherwise -> 'Sorry, we are currently closed.'
// $0 ────────── $8 ────────── $15 ────────── $25 ────────── $INFINITE+
// |             |             |              |              |
// |     ❌      |     🍔     |      🍕     |      🥩      |
// |  Too Poor   |   Budget    |    Regular   |   Premium    |
// |             |   Items     |    Combos    |    Meals     |


let isRestaurantOpen: boolean = true;
let money: number = 1
if (isRestaurantOpen) {
    // checking the restaurant
    console.log('Welcome! We are open for business.')
    if (money >= 25) {
        console.log('You can order our premium meals!')
        // 25, 26, 27, .... etc.
    } else if (money >= 15) {
        // 24, 23, .... 0
        // less than 25 is ALREADY automatic
        // less than 25 AND above or equal to 15 
        console.log('You can get our regular combo meals.')
    } else if (money >= 8) {
        // 14, 13, .... 0
        console.log('You can get our regular combo meals.')
    } else {
        console.log('You can afford our budget menu items.')
    }

} else {
    // if it's not open
    console.log('Sorry, we are currently closed.')
}



let restaurantOpen: boolean = true;
// let money12: number = 97;

if (restaurantOpen) {
    console.log('Welcome! We are open for business');

    // 100 - INFINITE
    // 50 - 99
    // 49-25

    if (money >= 100) {
        // 100, 101, 102, ..... INFINITE

    } else if (money >= 50) {
        // 50, 51, 52, 53, 54, ...... 99
        console.log('Sorry! Not enough money for premium selection');
    } else if (money >= 25) {
        console.log('Enjoy our premium variety!');
    } else if (money >= 15) {
        console.log('You can get our regular combo meals.');
    } else if (money >= 8) {
        console.log('You can afford our budget menu items');
    } else {
        console.log('Sorry, you need at least $8 for our cheapest item');
    }

} else {
    console.log('Sorry, we are currently closed.');
}



// first checking vacationDaysAvailable >= 7 -> then 'Perfect! You have enough time for a luxury trip.'
//      ------one more here----
//     second check budget >= 15000 -> true then 'Ultimate luxury package with private jet!'
//     else if budget >= 8000 -> true then 'Premium luxury with first-class flights!'
//     else if budget >= 5000 -> true then 'Standard luxury with business-class flights!'
//      ------one more here----
//     otherwise -> 'Basic luxury package with economy plus flights.'
// otherwise -> 'You need at least 7 days for our luxury vacation packages.'



















