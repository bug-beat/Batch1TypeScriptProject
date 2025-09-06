// left to right from top to bottom
console.log(12 + 12 + '12') // 2412, 121212
console.log('12' + 12 + 12) // 121212 -> 3,  1224, 
console.log(12 + '12' + 12 + 12) // 12121212 -> 2, 121224 -> 1
console.log(12 + 12 + '12' + 12) // 241212 -> 5, 

// typescript as soon as it sees a string everything else is concatenation.

// total number test cases executed.
// total number of test cases passed.
let totalNumberOfTests: number = 50 // ; semi colon means line ended
let totalNumberOfPassedTestCases: number = 49 // 
console.log('-------------------------------------------------')
console.log(totalNumberOfTests - totalNumberOfPassedTestCases) // 3

// First way of printing the failed tests
// if I want an output message like below:
// Number of failed test cases is = 3
let totalNumberOfFailedTestCases: number = totalNumberOfTests - totalNumberOfPassedTestCases
console.log('Number of failed test cases is = ' + totalNumberOfFailedTestCases)

// monthly paycheck             Try to use decimal numbers 3214.21
// montlhy expense
// ?? free money monthly ??
// create 2 variables and put them together just like the first way of printing.
// OUTPUT: 'Free monthly money = $512.42' > 512.42 has to be dynamic
console.log('------------------------------------------------------')
let monthlyPaycheck: number = 3214.23
let monthlyExpenses: number = 1234.21
let monthlyFreeMoney: number = monthlyPaycheck - monthlyExpenses
console.log(monthlyFreeMoney)
console.log('Free monthly money = $' + monthlyFreeMoney)

// total number of gasoline my car can hold when it's full
// what I have left in the tank 
// how much gas I used

// fullTankGas -> 13.7 
// leftTankGas -> 4.2
// usedGas -> ????
// 'Used gas = 9.5'

let fullTankGas: number = 13.7
let leftTankGas: number = 4.2
let usedGas: number = fullTankGas - leftTankGas

console.log('Used gas = ' + usedGas) // 1st way
console.log('Used gas = ' + (fullTankGas - leftTankGas)) // 2nd way
// 


