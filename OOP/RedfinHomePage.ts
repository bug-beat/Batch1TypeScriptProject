// Create a class for RedfinHomePage
// This class will help us test Redfin's real estate search functionality

// Add 3 variables to store important testing data:
// Variable 1: Store the expected homepage title as text (like "Redfin - Real Estate, Homes for Sale, MLS Listings, Agents")
// Variable 2: Store the maximum search radius in miles as a whole number (like 25 or 50)
// Variable 3: Store the minimum property photos required for listing quality as a whole number (like 10 or 15)

// Add 3 methods that perform different Redfin testing actions:

// Method 1: Navigate to property search
// This method takes no arguments (nothing gets passed into it)
// This method doesn't give anything back when it finishes
// When called, it should print a message saying it's loading Redfin property search
// Then print a message confirming the real estate marketplace loaded successfully

// Method 2: Calculate monthly mortgage payment
// This method takes two arguments: home price as a decimal number, and interest rate percentage as a decimal number
// This method gives back estimated monthly payment as a decimal number
// Calculate payment: (home price × interest rate ÷ 100 ÷ 12) + (home price ÷ 360)
// Give back the calculated monthly payment (use Math.round to get whole dollars)

// Method 3: Filter properties by type and price range
// This method takes two arguments: desired property type as text (like "house" or "condo"), and maximum budget as a whole number
// This method gives back a list of matching property addresses (multiple pieces of text)
// STEP 1: Inside the method, create an array with at least 8 different property listings with type, address, and price
//         Examples: "house-123 Oak Street-450000", "condo-456 Pine Ave-320000", "house-789 Elm Drive-520000", "townhouse-321 Maple Lane-380000", "condo-654 Cedar Way-290000", "house-987 Birch Road-475000", "condo-147 Willow Court-350000", "house-258 Cherry Lane-510000"
// STEP 2: Create an empty array to store properties that match both criteria
// STEP 3: Write a for loop that goes through each property listing in the array
// STEP 4: Inside the loop, split the current property by "-" to get parts: [type, address, price]
// STEP 5: Check if the type part equals the desired property type
// STEP 6: Convert the price part to a number and check if it's <= maximum budget (properties you can afford)
// STEP 7: If BOTH the property type matches AND the price is within budget, add the address part to your matching array
// STEP 8: After the loop finishes, give back the array of matching property addresses

// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call all 3 methods from your class copy
// For methods that give something back, print what they return
// For the method that doesn't give anything back, just call it

class RedfinTestHomePage {
    redfinMainMessage = "Redfin - Real Estate, Homes for Sale, MLS Listings, Agents"
    searchRadius = 30


    // Method 2: Calculate monthly mortgage payment
    // This method takes two arguments: home price as a decimal number, and interest rate percentage as a decimal number
    // This method gives back estimated monthly payment as a decimal number
    // Calculate payment: (home price × interest rate ÷ 100 ÷ 12) + (home price ÷ 360)
    // Give back the calculated monthly payment (use Math.round to get whole dollars)
    calculateMonthlyMortgagePayment(homePrice: number, interestRate: number): number {
        return (homePrice * interestRate / 100 / 12) + (homePrice / 360)
    }

    // Method 3: Filter properties by type and price range
    // This method takes two arguments: desired property type as text (like "house" or "condo"), and maximum budget as a whole number
    // This method gives back a list of matching property addresses (multiple pieces of text)
    // STEP 1: Inside the method, create an array with at least 8 different property listings with type, address, and price
    //         Examples: "house-123 Oak Street-450000", "condo-456 Pine Ave-320000", "house-789 Elm Drive-520000", "townhouse-321 Maple Lane-380000", "condo-654 Cedar Way-290000", "house-987 Birch Road-475000", "condo-147 Willow Court-350000", "house-258 Cherry Lane-510000"
    // STEP 2: Create an empty array to store properties that match both criteria
    // STEP 3: Write a for loop that goes through each property listing in the array
    // STEP 4: Inside the loop, split the current property by "-" to get parts: [type, address, price]
    // STEP 5: Check if the type part equals the desired property type
    // STEP 6: Convert the price part to a number and check if it's <= maximum budget (properties you can afford)
    // STEP 7: If BOTH the property type matches AND the price is within budget, add the address part to your matching array
    // STEP 8: After the loop finishes, give back the array of matching property addresses
    filterPropertiesByTypeAndPriceRange(desiredPropertyType: string, maximumBudget: number): string[] {
        let propertyListings = [
            "house-123 Oak Street-450000",  // YES
            "condo-456 Pine Ave-320000",  // NO
            "house-789 Elm Drive-520000",  // NO
            "townhouse-321 Maple Lane-380000",  // NO
            "condo-654 Cedar Way-290000",  // NO
            "house-987 Birch Road-475000",  // NO
            "condo-147 Willow Court-350000",  // NO
            "house-258 Cherry Lane-510000"  // NO
        ]
        let matchedProperties: string[] = []

        for (let i = 0; i < propertyListings.length; i++) {
            let currentProperty = propertyListings[i].split('-')

            if (currentProperty[0] === desiredPropertyType &&
                parseFloat(currentProperty[2]) <= maximumBudget) {
                matchedProperties.push(currentProperty[1])
            }

        }

        return matchedProperties;
    }
}

let newRedfinTestHomePage = new RedfinTestHomePage()
console.log(newRedfinTestHomePage.filterPropertiesByTypeAndPriceRange('house', 470_000))
console.log(newRedfinTestHomePage.filterPropertiesByTypeAndPriceRange('house', 470_000))
console.log(newRedfinTestHomePage.filterPropertiesByTypeAndPriceRange('house', 470_000))
console.log(newRedfinTestHomePage.filterPropertiesByTypeAndPriceRange('house', 470_000))