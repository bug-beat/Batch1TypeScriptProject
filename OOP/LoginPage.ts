// 

class LoginPage {
    // access modifier -> 
    // most restrictive = const
    // medium restrictive= let, 
    // least restrictive = var
    // variable
    expectedLoginPageMessage: string = 'FacebookConnect with friends and the world around you on Facebook.'
    expectedUnderLoginFormMessage: string = 'Create a Page for a celebrity, brand or business.'
    // methods = actions (typing, clicking, scroll)
    // methodName() : void/boolean/ string[]/ any {
    // }

    // typingUsername(): void {
    //     // reusable action/typing code goes below
    //     // reality -> playwright code going to get the username field and type the username
    //     // demo mode -> simple print
    //     console.log('Typing username...')
    // }

    typingUsername(username: string): void {
        console.log('Typing ' + username)
    }

    typingPassword(): void {
        console.log('Typing password...')
    }

    clickingButton(): void {
        console.log('Clicking button...')
    }
}

// Object of your class
// take a copy of your class
// new -> create a NEW copy
let myLoginPage = new LoginPage()

// very simple login testcase
myLoginPage.typingUsername('Vova')
// myLoginPage.typingPassword()
// myLoginPage.clickingButton()

// let myString = 'my name is potato'

// myString.includes('a')




















// create a facebook login page class
// create a method for typing your password
    // method will take 1 argument
    // argument will be password
    // print 'typing the password myPassword'
















