
// STEP 5: Convert the rating part to a number and check if it's >= minimum school rating
// STEP 6: Check the crime level priority: 
// if maximum crime level is "high" accept all, 
// if "medium" accept only "low" and "medium", 
// if "low" accept only "low"
// STEP 7: If BOTH the school rating meets requirement AND the crime level is acceptable,
//  add the neighborhood name to your matching array
// STEP 8: After the loop finishes, give back the array of matching neighborhood names

class ZillowPage {
    findNeighborhoodsBySchoolRatingAndCrimeLevel(minimumSchoolRating: number, maximumCrimeLevel: string): string[] {
        let neighborhood = ["8-Downtown-medium", "9-Westside-low", "6-Eastpark-high", "9-Northhill-low", "7-Southbay-medium", "8-Riverside-low", "5-Industrial-high", "9-Greenwood-low"]
        let filteredCities: string[] = []

        for (let i = 0; i < neighborhood.length; i++) {
            let currentCityArray = neighborhood[i].split('-')
            let exampleString = 'my example'
            'my example'.startsWith('s')

            if (minimumSchoolRating >= parseFloat(currentCityArray[0])) {
                if (maximumCrimeLevel === 'high') {
                    filteredCities.push(currentCityArray[1])
                } else if (maximumCrimeLevel === 'medium' &&
                    ['medium', 'low'].includes(currentCityArray[2])) {
                    filteredCities.push(currentCityArray[1])
                } else if (maximumCrimeLevel === 'low' && 'low' === currentCityArray[2]) {
                    filteredCities.push(currentCityArray[1])
                }

            }
        }
        return filteredCities;
    }
}
