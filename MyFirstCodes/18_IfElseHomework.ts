// syntax for structure first
// create the variables.
// add the expressions
// add the actions.
// format every single 1 minute

// first checking vacationDaysAvailable >= 10 -> then 'Excellent! Perfect duration for a luxury multi-destination experience.'
//     second check budget >= 20000 AND isFirstClassTraveler === true -> then 'Ultimate world tour: Private jets, Michelin star dining, and presidential suites!'
//     else if budget >= 15000 AND preferredDestination === 'maldives' -> then 'Maldives VIP: Private island resort with butler and yacht!'
//     else if budget >= 12000 AND preferredDestination === 'switzerland' AND travelExperience === 'expert' -> then 'Swiss Alps adventure: Luxury ski resort with helicopter transfers and alpine spa!'
//     else if budget >= 10000 AND preferredDestination === 'dubai' -> then 'Dubai luxury: Seven-star hotel with desert safari and shopping spree!'
//     else if budget >= 8000 AND travelExperience !== 'beginner' -> then 'Premium cultural tour with luxury accommodations and guided experiences!'
//     else if budget >= 5000 -> then 'Deluxe vacation package with high-end hotels and curated activities!'
//     otherwise -> 'Standard luxury package available within your budget range.'
// else if vacationDaysAvailable >= 7 -> then 'Good duration for a focused luxury experience, but consider extending for full packages.'
// otherwise -> 'Minimum 7 days required for our luxury vacation experiences.'


let vacationDaysAvailable: number = 14;
let budget: number = 12000;
let preferredDestination: string = 'switzerland'; // 'maldives', 'switzerland', 'dubai', 'japan'

let isFirstClassTraveler: boolean = true;
let travelExperience: string = 'expert'; // 'beginner', 'intermediate', 'expert'
if (vacationDaysAvailable >= 10) {
    console.log('Excellent! Perfect duration for a luxury multi-destination experience.');
    if (budget >= 20000 && isFirstClassTraveler) {
        console.log('Ultimate world tour: Private jets, Michelin star dining, and presidential suites!')
    } else if (budget >= 15000 && preferredDestination === 'maldives') {
        console.log('Maldives VIP: Private island resort with butler and yacht!')
    } else if ((budget >= 12000) && (preferredDestination === 'switzerland') && (travelExperience === 'expert')) {
        console.log('Swiss Alps adventure: Luxury ski resort with helicopter transfers and alpine spa!')
    } else if (budget >= 10000 && preferredDestination === 'dubai') {
        console.log('Dubai luxury: Seven-star hotel with desert safari and shopping spree!')
    } else if (budget >= 8000 && travelExperience !== 'beginner') {
        console.log('Premium cultural tour with luxury accommodations and guided experiences!')
    } else if (budget >= 5000) {
        console.log('Deluxe vacation package with high-end hotels and curated activities!')
    } else {
        console.log('Standard luxury package available within your budget range.')
    }
} else if (vacationDaysAvailable >= 7) {
    console.log('Good duration for a focused luxury experience, but consider extending for full packages.');
} else {
    console.log('Minimum 7 days required for our luxury vacation experiences.');
}