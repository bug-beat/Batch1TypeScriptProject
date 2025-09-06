// Create a class for LinkedInNetworkPage
// This class will help us test LinkedIn's professional networking platform functionality

// Add 3 variables to store important testing data:
// Variable 1: Store the expected homepage title as text (like "LinkedIn - Professional Networking Platform")
// Variable 2: Store the maximum connection requests per day as a whole number (like 100 or 200)
// Variable 3: Store the minimum profile completion percentage for visibility as a decimal number (like 85.5 or 92.3)

// Add 1 method that performs LinkedIn networking testing:

// Method 1: Find profiles with names starting with a specific letter
// This method takes two arguments: profile names array like ["Alice Johnson", "Bob Smith", "Charlie Brown"], and starting letter as text (like "A")
// This method gives back a list of matching profile names like ["Alice Johnson"]
// STEP 1: Create an empty array to store matching profiles
// STEP 2: Use a for loop to go through each profile name in the provided array
// STEP 3: Inside the loop, use the charAt(0) string method to get the first letter 
// of the current profile name
// STEP 4: Use the toUpperCase() string method on this first letter
// STEP 5: Check if this first letter equals the starting letter parameter 
// (also convert starting letter to uppercase)
// STEP 6: If they match, add the original profile name to your matching array
// STEP 7: After the loop, give back the array of matching profile names

// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call the method from your class copy with this specific test case:
// Call findProfilesWithStartingLetter(["Alice Johnson", "Bob Smith", "Charlie Brown", "Anna Davis", "Edward Norton"], "A") and print the result
// Expected output: ["Alice Johnson", "Anna Davis"]


class LinkedInNetworkPage {
    expectedHomepageTitle = 'LinkedIn - Professional Networking Platform';
    maximumConnectionRequestsPerDay: number = 200;
    minimumProfileCompletionPercentageForVisibility: number = 85.5;
    findProfilesWithNamesStartsWithASpecificLetter(
        profileNames: string[],
        startingLetter: string
    ): string[] {
        let matchinhProfiles: string[] = [];
        for (let i = 0; i < profileNames.length; i++) {
            let firstLetter = profileNames[i].charAt(0).toUpperCase();
            if (firstLetter === startingLetter.toUpperCase()) {
                matchinhProfiles.push(profileNames[i]);
            }
        }
        return matchinhProfiles;
    }
}
let linkedIn = new LinkedInNetworkPage();
console.log('Home page title is ', linkedIn.expectedHomepageTitle);
console.log('Max connection per day ', linkedIn.maximumConnectionRequestsPerDay);
console.log(linkedIn.minimumProfileCompletionPercentageForVisibility);
linkedIn.findProfilesWithNamesStartsWithASpecificLetter(['Alice Johnson', 'Bob Smith', 'Charlie Brown', 'Anna Davis', 'Edward Norton'], 'A');
// console.log('Profiles starting with lette ‘A’ ', linkedIn.findProfilesWithNamesStartsWithASpecificLetter());