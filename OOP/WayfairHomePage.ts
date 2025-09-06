class WayfairHomePage {

    cartCheckingButton: string = 'Cart is empty';

    searching(searchText: string): string[] {
        let searchResults: string[] = []
        if (searchText === "chair") {
            searchResults.push("kitchen chair", "living room chair", "outdoor chair")
        } else if (searchText === 'couch') {
            searchResults.push("fabric couch, leather couch")
        }
        console.log(searchResults)
        return searchResults
    }

    loginPage(username: string, password: string): void {
        if (username.length < 3) {
            console.log('Bad username!')
        } else {
            console.log('Good username!')
        }
        if (password.length < 8) {
            console.log('Bad password!')
        } else {
            console.log('Good password!')
        }
    }

    printHello(): void {
        console.log('Hello!')
    }
}


// methods don't have arguments values because we want argument to be different 
// always

// create a copy of the class and storing it
// call it from that class copy

let wayFairHomePageCopy = new WayfairHomePage()

wayFairHomePageCopy.loginPage("To", "BadPass")
console.log('-------------------------------------')
wayFairHomePageCopy.loginPage("Tom", "GoodPass1234!")
console.log('-------------------------------------')
// let chairSearchResults = wayFairHomePageCopy.searching('chair')
// console.log(chairSearchResults)
wayFairHomePageCopy.searching('potato') // [] +3, NOTHING +
wayFairHomePageCopy.cartCheckingButton

// Create a class called CarsLoginTestPage
// Add three properties for validation:
// - yourNameHere : string = 'Sign In to Cars.com'
// - yourNameHere : string = 'Invalid username or password'
// - yourNameHere : string = 'Welcome to Cars.com!'

// 1. navigateToLoginPage(): void - prints 'Navigating to Cars.com login page...'
// 2. enterCredentials(username: string, password: string): void
//    - prints 'Entering username: ' + username
//    - prints 'Entering password: ' + password

// create a copy of the class and store it
// call methods and print the variables





// Create a class for testing the Chick-fil-A mobile order login page

// Add three properties for validation:
// - The expected title text that should appear on the login screen
// - The message shown when login fails
// - The message shown when login succeeds

// 1. A method to navigate to the Chick-fil-A login screen
//    - It should print a message showing that the app is moving to the login page
// 2. A method to input the username and password
//    - It should print both the username and password being typed

// create a copy of your class 
// and print class variables
// and call the 2 methods