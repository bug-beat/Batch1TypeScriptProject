class FacebookLoginPage {
    // typingPassword(passwordTyping: string): void {
    //     console.log('typing the password...' + passwordTyping)
    // }

    // method for type userName AND password
    typeUserNameAndPassword(userName: string, password: string): void {
        console.log('typing username = ' + userName)
        console.log('typing password = ' + password)
    }

    validateMessage(expectedMessage: string): boolean {
        if (expectedMessage.includes('a')) {
            return true
        } else {
            return false
        }
    }

    validateSearchMessage(searchText: string): boolean {
        if (searchText.length > 8) {
            return true
        } else {
            return false
        }
    }

    // Create method which will take an argument
    // argument will be searchText
    // check if the searchText length more than 8
    // if yes return true
    // else return false

    // Create method which will take an argument
    // argument will be userName
    // check if the userName not containing '!' 
    // if yes return true
    // else return false
}

//create a variable and put new class there

let myFirstLoginPage = new FacebookLoginPage()

myFirstLoginPage.typeUserNameAndPassword('Vova', 'Password1234!')

// create class for amazon login page
// this is a void (returns NOTHING) method
// crete a type username and password method
// print both of them in your method




