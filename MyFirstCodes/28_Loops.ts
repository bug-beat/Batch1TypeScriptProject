



// start, end, what is the increment 
//   start      end   increment
// for (let i = 0; i < 6; i + 1) {
//     // i + 1 same as i++ nearly same as ++i
//     // i++ increment it by one - +1
//     // i = 0 -> first loop execution
//     // i = 1 -> second loop execution
//     //.
//     //.
//     //.
//     // i = 5 -> last loop execution
//     // 
// }




// I want to create a loop which will start from 0 it will end at 9
// I want it to increment one by one  ( i + 1)


// start -> 0
// end -> 9  (it should execute 8)
// increment -> +1, ++
// start; end; increment
for (let i: number = 0; i < 9; i++) {
    // whatever you are repeating goes here
    // console.log('Hello we are nearly done with TypeScript!')
    console.log('i = ' + i) // 1-8 +2, 0-8 +3, 0-9 +2
    // 0 is included that my start
    // 9 is not because  i < 9 (9 < 9) -> false
    // as soon as middle is false loop is bye bye
}

// 3-7 YES
// 7-8 YES
// 9-2 NO
// Play with the message print whatever you like.



// 7 executions
// i = 0 -> start
// i < 7 -> end
// i++
// i = 0, 1, 2, 3, 4, 5, 6 

// day number = 0
// day number = 1
//..
//...
// day number = 6

for (let myCurrentExecution = 0; myCurrentExecution < 8; myCurrentExecution++) {
    console.log(myCurrentExecution)
}


// current day of the month
// name your loop variable which 'i' before to something meaningful (day)
// start number = 1
// end number = 30 included (day < 31)
// day++


let cars = ['Porsche', 'GTR', 'Camry', 'Genesis', 'GT3 RS', 'Audi']

// print every car 
// whenever you will see repetation
// give it a try
// search or put it in a prompt can I do this with loops

console.log(cars[0]) // porsche
console.log(cars[1])
console.log(cars[2])
console.log(cars[3])
console.log(cars[4])
console.log(cars[5])

// if () {

// }


// 6 executions, how many items I have 6
for (let a = 0; a < cars.length; a++) {
    console.log(cars[a])
}



// days of the week
// days = ['Monday', ''.... 'Sunday]
// I want you to print every day with a loop
//
// if I would do this manually where would I start and end
// 

let daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

// check every value of the array and if it startsWith 's' print it otherwise do nothing
console.log('---------------')
for (let i = 0; i < daysOfTheWeek.length; i++) {
    // daysOfTheWeek[i] -> first time monday
    // daysOfTheWeek[i] -> second time tuesday
    // etc.
    // 0 -> monday -> false
    // ..
    // 5 -> saturday -> true -> saturday
    // 6 -> sunday -> true -> sunday
    let isStartingWithS = daysOfTheWeek[i].startsWith('s')
    console.log('i = ' + i) // 7 times
    // console.log(isStartingWithS)
    if (daysOfTheWeek[i].startsWith('s')) {
        // only when above is true then it executes the below
        console.log(daysOfTheWeek[i]) // 2 times
    }

}





// check every day of the array and if it's equal to "tuesday"
// then print that day ("tuesday")
// otherwise print 'sorry it's not tuesday'



// we are going to the dealer
// inventory = ['Porsche Taycan', 'GTR', 'Camry', 'Genesis', 'GT3 RS', 'Audi', 'Porsche Carrera']
// if the current car is starting with 'Porsche'
// then print 'This is what I am looking for Porsche Taycan'
// 

// we are a bouncer in front of a club
// we do not let people who are younger than 21
// age = [15, 16, 77, 99, 29, 18, 21]

// when there is someone older or equal to 21 
// we should say 'WELCOME'
// otherwise 'Bugger off, get out!' 

// 2nd level 
// check if they are between 21 and 18 also and if yes say 'you can come, but can't drink!'




// I have fruits string = 'cherry,orange,mango,banana'
// check every fruit and if it's including letter 'a' 
// we are eating that fruit
// otherwise we are throwing it to trash






