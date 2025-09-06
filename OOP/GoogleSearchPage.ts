// create a class with a good name (don't forget about uppercase start)
// create a method for searching a text
// method should TAKE argument 'searchText'
// and it should print 'Searching searchText'

class GoogleSearchPage {
    // my variables, methods etc. goes here

    // void means returns NOTHING 
    // when you put an argument you are forcing someone to give you data
    // 
    // reusable action
    // searchText hardcoded is not DYNAMIC, it is not reusable
    searchForText(searchText: string): void {
        // my method code goes here
        console.log('Searching ' + searchText)
    }

}

let myFirstGooglePageVisit = new GoogleSearchPage()

myFirstGooglePageVisit.searchForText('Porsche')
myFirstGooglePageVisit.searchForText('Aston Martin')
