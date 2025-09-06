
/**
 * // Recap: 


// class -> storing methods, variables, ????
    // method -> when want an action, it has to be reusable
        arguments -> the variables you put in your method parenthesis
        returning -> boolean, string, number, string[], void
    // property/variable -> data storing

    access variables -> const, let, var 
//
 */

class AmazonHomePage {
    amazonTitleMessage: string = 'Shop more, spend less, be happy more'

    // if the searchText is 'computer' then return ['mac', 'lenovo book', 'hp']
    // else if the searchText is 'protein' then return ['protein bar', 'quest chips', 'protein powder']

    searchString(searchText: string): string[] {
        // push() -> will add and not clear to old data
        // splice()
        // = -> clean and get rid of everything then add the new values

        // you need to use 
        let searchResult: string[] = ['garbage bag']
        if (searchText === 'computer') {
            searchResult = ['mac', 'lenovo book', 'hp']
        } else if (searchText === 'protein') {
            searchResult = ['protein bar', 'quest chips', 'protein powder']
        }

        return searchResult
    }

    // 


}


// create a class for wayfairHomePage
// add a variable = anything worth to store for later, can be a message, title, etc.
// add a method for searching
    // it will take one argument searchText
    // it will return the search results as string[]
    // if the searchText is 'chair' then return something making sense
    // else if the searchText is 'couch' then return something making sense

// add another method for login
    // it will take 2 arguments username and password
    // it will return nothing
    // if the username length is less then 3 print 'Bad username!'
    // else 'Good username!'
    
    // if the password length is less then 8 'Bad password!'
    // else 'Good password!'
   
