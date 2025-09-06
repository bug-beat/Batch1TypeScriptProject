

// Task: Create a comprehensive test environment management system using all array methods learned.

// Requirements:

// Insert "Monitor Active" at the beginning of activeEnvironments.splice(0, 0, "Monitor Active")
// Print both arrays and their lengths after each major operation

let environments: string[] = ["dev", "staging"]
let activeEnvironments: string[] = []

environments.splice(1, 0, 'production')
if (environments.includes("dev")) {
    // yes/true
    // delete
    environments.splice(0, 1) // only removing dev
    activeEnvironments.push("dev") // goes to the end
    // activeEnvironments.splice(0, 0, 'dev')
}

// if environments NOT includes "testing" 
// true -> false
// false -> true
//
if (!environments.includes('testing')) {
    environments.splice(0, 0, 'testing')
}

//  Replace "staging" with "pre-production" in environments using splice()
environments.splice(environments.indexOf("staging"), 1, 'pre-production')

// Remove the last environment using pop() and insert it at position 1 in activeEnvironments using splice()
let removedEnvironmentVariable = environments.pop()

activeEnvironments.splice(1, 0, removedEnvironmentVariable ?? toString())
// protector for not having undefined or null, it gets rid of them.



// 📤 Example Output:
// Initial environments: ['dev', 'staging']
// After inserting production: ['dev', 'production', 'staging']
// Dev environment found! Moving to active
// Environments: ['production', 'staging'], Active: ['dev']
// Testing environment not found! Inserting at beginning
// Environments: ['testing', 'production', 'staging']
// After replacing staging with pre-production: ['testing', 'production', 'pre-production']
// Removed pre-production, inserted at position 1 in active: ['dev', 'pre-production']
// Environments: ['testing', 'production']
// Active environments count is 2! All systems go
// Active: ['dev', 'pre-production', 'All Systems Go']
// After inserting monitor: ['Monitor Active', 'dev', 'pre-production', 'All Systems Go']
// Final environments: ['testing', 'production'] (length: 2)
// Final active environments: ['Monitor Active', 'dev', 'pre-production', 'All Systems Go'] (length: 4)






