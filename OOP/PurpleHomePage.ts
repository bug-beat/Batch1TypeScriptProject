// https://purple.com/

// class creation -> PurpleHomePage is our name
// variable -> Less pain. Better sleep.
// method -> click on shop mattresses and it should print 'clicking on button'

class PurpleHomePage {
    expectedHomePageMessage: string = 'Less pain. Better sleep'

    // constructor is a special method
    constructor(){

    }

    clickingButtonShopMattress(): void {
        console.log('Clicking on button: Shop Mattresses')
    }

}


let purpleHomePageCopy = new PurpleHomePage()