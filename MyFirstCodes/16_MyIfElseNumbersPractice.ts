
// I am real estate investor
// I am looking for areas and prices
// if the areas are 'schaumburg', 'wheeling', 'Hoffman' AND at the same time
// if the price is lower or equal to 300000
//         Then 'WE HAVE A DEAL'
// else 
//          'We are walking away, bye'

// if rooms, bathrooms,
// if areas  are 'schaumburg', 'wheeling', 'Hoffman'
// then I am printing 'I am considering it'
// after considering it I check it again 
// and if the price is lower or equal to 300000 
// else I don't care about the deal

// schaumburg
//  400000
// I am considering it
// I don't care about the deal

// NESTED IF ELSE

let area: string = 'schaumburg'
let price: number = 450_000
if (area === 'schaumburg') {
    console.log('I am considering it!')


    if (price <= 300_000) {
        console.log('We take it!!!')
    } else {
        console.log('Good location but price is too high!')
    }

} else {
    console.log("I don't care about the deal because of the location")
}



// We are going out and we are looking for a place to eat.
// 
// kitchen -> if the kitchen is ukrainian then 'we are considering it'
// hasBorsch -> if it has borsch then 'we are going'
// otherwise -> 'good kitchen but there is no borsch'
// otherwise -> 'we are not going there because there is no borsch'

let kitchen: string = 'Ukrainian'
let hasBorsch: boolean = true
if (kitchen === 'Ukrainian') {
    console.log('we are considering it')

    if (hasBorsch) {
        console.log('we are going')
    } else {
        console.log('good kitchen but there is no borsch')
    }

} else {
    console.log('kitchen is not Ukrainian, we are not going there.')
}







// We are searching for a luxury house.
//
// location -> if the location is Kyiv then 'we are considering it'
//     sqft & bathrooms -> if the house has at least 2000 sqft AND 3 or more bathrooms
//         then 'Perfect, we are buying it!'
//     otherwise -> 'Good location but the house is not big enough or lacks bathrooms'
// otherwise -> 'Not interested, wrong location'

// location
// sqft
// bathrooms 











