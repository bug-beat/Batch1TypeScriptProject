// I am a truck a driver and if my load is more than 2100 pounds
// I am getting pulled over
// there is no else

// myLoad -> number
// comparison operator <, >, <=, >=
// 'You got pulled over!'

let myLoad: number = 2000

if (myLoad > 2100) {
    console.log('You got pulled over!')
}

// I am a restaurant owner 

// if I have the profit more than 2500
// I will survive!
// There  is NO ELSE

let myProfit: number = 2600;
if (myProfit > 2500) {
    console.log('i will survive!')
}





// what if I have situation for going outside

// if the temperature is more than 80F it's hot
// if the temperature is less than 67F it's cold
// if the temperature is between 80F, 67F it's PERFECT

let temperature: number = -16;

if (temperature > 80) {
    console.log("it's hot")
}

if (temperature < 67) {
    console.log("it's cold")
}
// if temperature less than 80 AND at the same time temperature more than 67
// then it's perfect
if ((temperature < 80) && (temperature > 67)) {
    console.log("it's PERFECT")
}

// I am a cop
// speed limit is 45
// if you drive over 55 mph you will get a ticket
// if you drive between 45 and 55, you will get a warning
// if you drive less than 45 mph then you will not be pulled over

let mySpeed: number = 47


if (mySpeed > 55) {
    console.log("I will get a ticket")
}

if ((mySpeed > 45) && (mySpeed < 55)) {
    console.log("I will get a warning")
}

if (mySpeed < 45) {
    console.log('I not be pulled over')
}


// I am going to party
// and if I am older than 21 I can drink and have driver's license
//if I am older than 18 AND at the same time younger than 21,
//     I can have drivers license but I can't drink
//if I am younger than 18, I can have nothing.
// put age in a variable


let age: number = 26
if (age > 21) {
    console.log("I can drink and have driver's license")
}
if ((age > 18) && (age < 21)) {
    console.log("I can have drivers license but I can't drink")
}
if (age < 18) {
    console.log("I can have nothing")
}



// if you are checking the SAME variable with the same way
// if it's a number and you are checking bigger or smaller
// 

// you gotta understand how many outcomes you have
// 3 outcomes as below
// I can drink and have driver's license
// I can have drivers license but I can't drink
// I can have nothing.

if (age > 21) {
    // I can be only 22 or above here
    console.log("I can drink and have driver's license")
} else if (age > 18) {
    // I can be only 21 or younger
     console.log("I can have drivers license but I can't drink")
} else {
    // I can be only 18 or younger
    console.log("I can have nothing")
}


// I am a cop
// speed limit is 45
// outcomes 3 -> means I need 3 code blocks 3 statements
// 
// if you drive over 55 mph you will get a ticket
// if you drive between 45 and 55, you will get a warning
// if you drive less than 45 mph then you will not be pulled over

// 0 ------ 232
// 55 - 232 -> you will get a ticket + 
// 45 - 55 -> you will get a warning 
// 0 - 45 -> you will not be pulled over

let myCurrentSpeed: number = 120
if(myCurrentSpeed > 55){
    // EVERY speed more than 55
    // 56, 74, etc. every single ticket number
    console.log('you will get a ticket')
} else if(myCurrentSpeed > 45){
    // 45 - 55, 
    console.log('you will get a warning')
} else{
    // 0 - 45
    console.log('you will not be pulled over')
}



// what if I have situation for going outside

// if the temperature is more than 80F it's hot
// if the temperature is less than 67F it's cold
// if the temperature is between 80F, 67F it's PERFECT

// if (check and get conditions)
// else if (get the rest and check it again)
// else (just get everything else)

let myTemperatureCurrent: number = 95
// -70F to 95F
if(myTemperatureCurrent > 80){
    //81 to everything else, forever, infinity.
    // Message
} else if(myTemperatureCurrent < 67){
    // MY GOAL IS 80-67
    // less than 80 
    // can 83 come here? NO
    // can 94 come here? NO
    // can -16 come here? YES but I don't want it here
}else { 
    // less 67 EVERYTHING 
    //
}








