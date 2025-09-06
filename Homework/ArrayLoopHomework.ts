

// Your mission:
// 1. Split the items string into an array
// 2. Create a new empty array: let healthyFound = []
// 3. Use a fori loop to go through each item
// 4. If item is in healthyItems → add it to healthyFound
// 5. After loop, display the healthyFound array

// Think about:
// - How do you add items to a new array?
// - How do you check if an item is healthy?
// - How do you display the final array?

let items = 'apple,chips,carrot,ice cream,spinach';
let healthyItems = ['apple', 'carrot', 'spinach'];
let healthyFound: string[] = []
let itemsArray = items.split(',')

for (let i = 0; i < itemsArray.length; i++) {
    // go through each item 
    // If itemsArray is in healthyItems → add it to healthyFound
    // 0 -> apple
    // 1 -> chips
    // 2 -> carrot
    // 3 -> ice cream
    // 4 -> spinach
    if (healthyItems.includes(itemsArray[i])) {
        // true -> it is healthy, health found
        // add ui
        healthyFound.push(itemsArray[i])
    }
}
console.log("healthyFound = " + healthyFound) //















