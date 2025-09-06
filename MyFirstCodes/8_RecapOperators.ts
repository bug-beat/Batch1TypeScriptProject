	// creating variables
	let dailyIncome: number = 123.23;
	let daysInMonth: number = 30;
	
	//1st way
	let monthlyIncome: number = dailyIncome * daysInMonth;
	console.log('My monthly income is $' + monthlyIncome)

    //2nd way 
    console.log('My monthly income is $' + (dailyIncome * daysInMonth))

    // calculate the yearly income from the given values from below.
    // monthly income is 2345.2
    // month in a year is 12
    // 'My yearly income is $1231231.123'

   // calculate the yearly income from the given values from below.
    // daily income is 123.2
    // days in a month is 30
    // month in a year is 12
    // 'My yearly income is $1231231.123'

    // calculate the yearly income from the given values from below.
    // daily income is 1231231.123
    // days in a month is 30
    // month in a year is 12
    // 'My daily income is $123.12'

// we are going to army and there is an acceptable amount of pull ups 
// acceptablePullUp => 25
// actualPullUp =>  ???
// 'I passed the army test = (true/false)'
// isPassed, isRaining

// let acceptablePullUp: number = 25
// let actualPullUp: number = 20

// let isPassed: boolean = acceptablePullUp <= actualPullUp
// console.log('I passed the army test: ' + isPassed)
// console.log('I passed the army test: ' + (acceptablePullUp <= actualPullUp))

console.log((20 > 12))
console.log((20 > 20))
console.log((20 >= 20))



let acceptableHeat: number = 80 //80F
let midDayHeat: number = 84 // 84F
let morningHeat: number = 70 // 70F
let nightHeat: number = 60 // 60F

//
console.log('is outside cool enough? = ' + (acceptableHeat > midDayHeat)) // true
// morningHeat, nightHeat
console.log('is outside cool enough? = ' + (acceptableHeat > morningHeat)) // 
console.log('is outside cool enough? = ' + (acceptableHeat > nightHeat)) // 

// 