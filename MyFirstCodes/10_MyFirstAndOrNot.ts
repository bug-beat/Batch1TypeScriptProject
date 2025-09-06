// logical operators

// if this button is visible AND at the same time 
// it is containing 'Hello' inside then I should click

let isButtonVisible: boolean = true // button is visible
let isButtonContainingHello: boolean = true // button contains 'Hello'

// AND at the same time = &&, OR = ||, NOT = !

// if this button is visible AND at the same time 
// it is containing 'Hello' inside then I should click
console.log(isButtonVisible && isButtonContainingHello)


// if I have email input AND at the same time 
// I have password input then it should be true

let isEmailExisting: boolean = true
let isPasswordExisting: boolean = true;

console.log(isEmailExisting && isPasswordExisting)

// if I have a car AND at the same time 
// I have gas then it should be true
// 

// if you money on the car AND at the same time 
// card is activated then you can buy something 
//

// if outside is warm AND at the same time
// it is not raining then we can go out have fun

// let isOutsideWarm: boolean = false
// let isNotRaining: boolean = false

// console.log('we can go out have fun = ' + (isOutsideWarm && isNotRaining))


// if outside is warm OR
// it is not raining then we can go out have fun

let isOutsideWarm: boolean = true
let isNotRaining: boolean = true

console.log('we can go out have fun = ' + (isOutsideWarm || isNotRaining))


// I am going to a car dealer
// and I like to buy either a BMW or Porsche
// if the dealer has BMW OR
// Porsche then I am buying

// I like burgers it's 2 am
// if the dennies is open OR
// Wendys is open I am going to eat burger




