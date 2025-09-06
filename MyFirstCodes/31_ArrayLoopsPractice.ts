// we will have 3 arrays.
// 1 array for current students
// 1 array for showing the online students
// 1 array for checking who is online today

// today at the class we have currentStudents online and in person mixed
// we do also have onlineStudentsBatch1 who are in the batch for online

// What I want you guys to do is give me from online students who is at
// currently class today.

// who we currently have currentOnlineStudents -> 'Anna', 'Art', 'Katya', 'Arty'
// 1. create a loop
// 2. check every single currentStudents and if they are in the 
// onlineStudentsBatch1 then 

// 3. put them in the currentOnlineStudents

let currentStudents = ['Vova', 'Dima', 'Anna', 'Tania', 'Art', 'Katya', 'Arty']
let onlineStudentsBatch1 = ['Anna', 'Art', 'Katya', 'Arty', 'Alina']
let currentOnlineStudents: string[] = []

// for(let i = 0; i < currentStudents.length; i++){
//     if(onlineStudentsBatch1.includes(currentStudents[i])){
//         // 
//         currentOnlineStudents.push(currentStudents[i])
//     }
// }

currentStudents.push('Knopa')
// currentStudents = ['Vova', 'Dima', 'Anna', 'Tania', 'Art', 'Katya', 'Arty', 'Knopa']






// we are starting a trucking company
// we have truckInventory
// we have reliable trucks
// we have saved trucks

let truckInventory = ['RAM', 'Chevy', 'Ford', 'Suzuki', 'Freightliner', 'International']
let reliableTruck = ['RAM', 'Ford', 'Freightliner']

// if it is a reliable truck then we are saving
let savedTrucks: string[] = []


// pop() -> removing the last item and it returns the last item


while (truckInventory.length > 0) {
    // !, ??, ? -> filtering out undefined and null
    let currentTruck = truckInventory.pop()!
    if (reliableTruck.includes(currentTruck)) {
        // reliable truck found
        savedTrucks.push(currentTruck)
    }
}








// Your mission:
// Use a fori loop to go through each item
// If item is in weapons → display "WEAPON: [item name]"
// Else if item is in defenseItems → display "DEFENSE: [item name]"
// Else → display "OTHER: [item name]"

// Think about:
// - How do you check multiple conditions?
// - What order should you check the conditions?
// - How do you display the category for each item?

let gameItems = ['sword', 'shield', 'potion', 'armor', 'bow'];
let weapons = ['sword', 'bow'];
let defenseItems = ['shield', 'armor'];

for (let i = 0; i < gameItems.length; i++) {
    if (weapons.includes(gameItems[i])) {
        console.log('weapons: ' + gameItems[i])
    } else if (defenseItems.includes(gameItems[i])) {
        console.log('defence: ' + gameItems[i])
    } else {
        console.log('other: ' + gameItems[i])
    }
}





// We are cleaning our toy box
// We have toyBox
// We want to REMOVE toys that do NOT include the letter "a"

let toyBox = ['Car', 'Doll', 'Ball', 'Robot', 'Truck']
// Task: Loop through toyBox
// If the toy does NOT include 'a', remove it using splice
for (let i = 0; i < toyBox.length; i++) {
    // ! -> here is NOT

    // i = 1
    // i = 1 // it will be again 1 IF we remove it
    console.log('current toy = ' + toyBox[i])
    if (!toyBox[i].includes('a')) {
        // splice() -> adding, removing, replacing
        // splice(indexOfWhatYouWantToRemove, howManyVariablesYouWantToRemove) -> removing 
        toyBox.splice(i, 1) // this will make the length 1 less
        i-- // you removed something for not skipping the the next one just go one step 
    }

}
console.log(toyBox) // 'Car', 'Ball',





// while loop only

// We are managing a guest list
// We want to COUNT guests whose name starts with "S"

let guestList = ['Sam', 'John', 'Sophie', 'Mike', 'Steve', 'Emma']

// Task: Loop through guestList
// If name starts with 'S', increase guestCount
let guestCount = 0

while (guestList.length > 0) {
    let currentGuest = guestList.pop()!
    if (currentGuest.startsWith('S')) {
        guestCount++
    }
}

console.log('guestCount = ' + guestCount)













// while loop only

// We are analyzing a list of words
// We want to COUNT words that start with 'a' OR 'A'

let words = ['Apple', 'banana', 'Apricot', 'orange', 'avocado']
let aWordsCount = 0

// Task: Loop through words
// If word starts with 'a' or 'A', increase aWordsCount









// while and fori loop

// We are reviewing customer emails
// We want to COUNT emails that end with "gmail.com"

let emails = ['alex@gmail.com', 'sara@yahoo.com', 'mike@gmail.com', 'emma@hotmail.com']
let gmailCount = 0

// Task: Loop through emails
// If email ends with "gmail.com", increase gmailCount





