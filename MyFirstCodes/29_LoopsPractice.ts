// Recap
// 
// why do we need this and when will we use it?
// - if we want to run a piece of code multiple times. 

// if you wanna make your code cleaner, readable loop is your guy
// 
// every loop has to have below:

// start, end, increment

// keyword -> for

// start ->  variable creation
// end  -> condition/boolean/expression, if possible for sure dynamic
// increment -> math equation
// ++ -> +1

// not repeated
for (let i = 0; i < 5; i++) {
    // getting repeated
    if (true) {
        // only true will executed
    }
}
// not repeated





// ★☆☆☆☆ (1/5)
// We have fruits stored as a comma-separated string
let fruits: string = 'apple,kiwi,mango,pear';

// Your mission:
// You need to examine each fruit individually
// For fruits that contain the letter 'a' → display "EATING: [fruit name]"
// For fruits that don't contain 'a' → display "THROWING AWAY: [fruit name]"

// Think about:
// - How can you work with each fruit separately?
// - How can you check every fruit one by one?
// - How can you determine if a fruit contains a specific letter?




// let fruits: string = 'apple,kiwi,mango,pear';
let fruitsSeparated = fruits.split(',');
for (let i = 0; i < fruitsSeparated.length; i++) {
    if (fruitsSeparated[i].includes('a')) {
        console.log('EATING:' + fruitsSeparated[i])
    } else {
        console.log('THROWING AWAY:' + fruitsSeparated[i])
    }
}


// ★★☆☆☆ (2/5)
// We have drinks stored as a comma-separated string
let drinks: string = 'cola,water,tea,juice,milk';

// Your mission:
// You need to examine each drink and categorize them with these priorities:
// - First priority: drinks that contain the letter 'a' → display "DRINKING: [drink name]"
// - Second priority: drinks that begin with the letter 't' → display "TASTING: [drink name]"
// - Everything else → display "SKIPPING: [drink name]"

// Think about:
// - How can you work with each drink separately?
// - How can you check multiple conditions in order of importance?
// - How can you determine what letter a word begins with?
// - What happens when a drink matches multiple conditions?



// let drinksArray = drinks.split(',')
// for (let i = 0; i < drinksArray.length; i++)
//     if (drinksArray[i].includes("a")) {
//         console.log("DRINKING:" + drinksArray[i])
//     } else if (drinksArray[i].startsWith("t")) {
//         console.log("TASTING:" + drinksArray[i])
//     } else {
//         console.log("SKIPPING:" + drinksArray[i])
//     }



// I am checking cars
// carsOnline = ['Porsche Taycan', 'GTR', 'Camry', 'Genesis', 'GT3 RS', 'Audi', 'Porsche Carrera']
// savedCars = []

// check every single car -> loop
// check the current car -=> dynamic if
// and if the current car is what I am looking for 'Porsche'-> if true
// then I save -> push, splice

// What I saved = []
// How many cars I saved

// Whenever you will do repetitive code you will use loops
// which one?

// while loop - when you are not sure when will it end
// do while loop - when you are not sure when will it end
// fori loop - star, end, increment


let carsOnline = ['Porsche Taycan', 'GTR', 'Camry', 'Genesis', 'GT3 RS', 'Audi', 'Porsche Carrera']
let savedCars: string[] = []
// instead of 3 things
// this will only take the end
// removing, and adding

while (true) {
    // you pop it 
    // store it
    // check it if it's undefined stop the loop
    // when there is nothing to pop
    let currentCar = carsOnline.pop()
    if (currentCar === undefined) {
        break; // means STOP the loop
    }

    console.log("currentCar = " + currentCar)



    if (currentCar.includes('Porsche')) {
        savedCars.push(currentCar)
    }

    //
    // as long as expression is true it will do it
    // adding/removing
}

console.log(savedCars)





let shoppingList = ['eggs', 'apples', 'protein bar', 'milk']
let myCart: string[] = []


// we are at costco, and we have a shopping list
// and if the shopping list current item includes letter 'a'
// then add to cart

// it will have only one expression/ true or false/ boolean
while (true) {
    // pop()
    // store it and we will see
    let currentItem = shoppingList.pop()
    if (currentItem === undefined) {
        break;
    }
    // just do your code below
    // 
    if (currentItem.includes('a')) {
        myCart.push(currentItem)
    }
}





// if my current vacation place is 'Ukraine'
// add it to my saved place
let vacationPlaces = ['Hawaii', 'Porte rico', 'Ukraine', 'Poland']
let mySavedPlaces: string[] = []

console.log('while loop below')
while (vacationPlaces.length > 0) {
    console.log(vacationPlaces.pop())
}



// let vacationPlaces:string[] = ['Hawaii', 'Porte rico', 'Ukraine', 'Poland']
// let mySavedPlaces: string[] = []
while (vacationPlaces.length > 0) {
    let currentPlace = vacationPlaces.pop()!
    if (currentPlace.includes("Ukraine")) {
        mySavedPlaces.push(currentPlace)
        console.log(currentPlace)
    }
}




// we are checking clothes.
// if the current clothe is red add it to cart

// let clothes = ['red dress', 'blue shirt', 'white socks', 'black glasses']
// let myClothCart: string[] = []


// while (clothes.length > 0) {
//     // ?? or ! or ? filters out the 'undefined' or 'null'

//     let currentCloth = clothes.pop()!
//     if (currentCloth.includes('red')) {
//         myClothCart.push(currentCloth)
//     }
// }



// We have a box of items (last item is on top)
let box: string[] = ['notebook', 'pen', 'eraser', 'marker', 'stapler'];
// We'll keep unpacking until the box is empty
// if the item includes 'e' then print
// console.log("KEEPING: " + item);
// else 
// console.log("DISCARDING: " + item);


while (box.length > 0) {
    let currentItem = box.pop()!
    if (currentItem.includes("e")) {
        console.log(("KEEPING: " + currentItem))
    } else {
        console.log("DISCARDING: " + currentItem)
    }
}


// We have a pile of toys (last item is on top)
let toys: string[] = ['car', 'doll', 'puzzle', 'ball', 'robot'];
// We'll keep unpacking until the pile is empty
// If the toy starts with 'p' then print
// console.log("SAVING: " + toy);
// else
// console.log("GIVING AWAY: " + toy);


// ★★☆☆☆ (2/5)
// We have a stack of clothes (last item is on top)
let clothes: string[] = ['shirt', 'jeans', 'hat', 'scarf', 'jacket'];
// We'll keep unpacking until the stack is empty
// If the item length is more than 4 then print
// console.log("FOLDING: " + item);
// else
// console.log("DONATING: " + item);


// 2nd version
// create an empty array and add it there once the length is more than 4 


// let clothes: string[] = ['shirt', 'jeans', 'hat', 'scarf', 'jacket'];
let clothes1: string[] = ['shirt', 'jeans', 'hat', 'scarf', 'jacket'];
let clothes2: string[] = []
while (clothes1.length > 0) {
    let unpackedItems = clothes1.pop()!
    if (unpackedItems.length > 4) {
        clothes2.push(unpackedItems)
    }
    console.log(clothes2)
}



// Example 4: stationery
// let stationery: string[] = ['pencil', 'eraser', 'marker', 'notebook', 'ruler'];
// Unpack until empty
// If item ends with 'r' → console.log("KEEPING: " + item)
// else → console.log("THROWING: " + item);


let stationery: string[] = ['pencil', 'eraser', 'marker', 'notebook', 'ruler'];

while (stationery.length > 0) {
    let currentItem = stationery.pop()
    if (currentItem?.endsWith('r')) {
        console.log("KEEPING: " + currentItem)
    } else {
        console.log("THROWING: " + currentItem)
    }
}




let books: string[] = ['Math', 'History', 'Art', 'Science', 'Poetry'];
// Unpack until empty
// If item includes letter 'a' → console.log("READING: " + item)
// else → console.log("IGNORING: " + item);


let pets: string[] = ['cat', 'parrot', 'hamster', 'dog', 'turtle'];
// Unpack until empty
// If item starts with 'h' OR ends with 't' → console.log("CUDDLING: " + item)
// else → console.log("WATCHING: " + item);





// 2 arrays one contains data, the other one contains saved stuff .length


// you will count without saved array
let tools: string[] = ['hammer', 'wrench', 'screwdriver', 'drill', 'pliers'];
let count: number = 0;

for (let i = 0; i < 5; i++) {
    if (tools[i].endsWith('r')) {
        count++
    }
}
console.log(count)











// Example 1: snacks
let snacks: string[] = ['chips', 'cookie', 'nuts', 'candy', 'pretzel'];
// fori loop
// if the current snack is ending with 's' count it


















