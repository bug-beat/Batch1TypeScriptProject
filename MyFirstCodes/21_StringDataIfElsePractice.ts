let batteryInfo: string = 'Battery: [87%] Status: Charging';

// Extract/Take part of a string => slice()
// When you need to do some math or comparison with a number
// you also need to CONVERT the data type.
// Get the length/size of a string or part of it. => length

// 1. Extract battery percentage (between [ and %)
// 2. Convert to number
// 3. Check conditions:
//    - If battery >= 90 → "Battery is healthy"
//    - If battery >= 70 → "Battery is okay"
//    - Otherwise → "Battery needs attention"




let shippingBox: string = 'Weight: [12.5kg] includes fragile items';

// 1. Extract the weight (between [ and kg)
// 2. Convert to decimal number
// 3. If includes "fragile" AND weight <= 15 → "Handle with care"
// 4. If weight > 20 → "Heavy load, additional charges apply"
// 5. Otherwise → "Standard shipping"

let transactionLog: string = 'Transaction: [$1,250] Status: Completed';

// 1. Extract the amount (between [$ and ])
// 2. Remove comma using replace()
// 3. Convert to number
// 4. If amount >= 1000 AND amount <= 5000 → "High Value Transaction"
//    Else if amount < 1000 → "Standard Transaction"
//    Else → "Check Transaction"


let jobDescription: string = 'Role: [Senior QA Automation Engineer] Location: Remote';

// 1. Extract the role name (between [ and ])
// 2. If startsWith "Senior" AND includes "Automation" → "High-level Automation Role"
//    Else if includes "QA" → "QA Role"
//    Else → "Other Role"





let storageData: string = 'Storage: [92%] includes backups';

// 1. Extract percentage (between [ and %)
// 2. Convert to number
// 3. If usage >= 90 → 
//       if includes "backups" → "Critical: Backups consuming space"
//       else → "Critical: Free up space"
//    Else if usage >= 75 → "Warning: High usage"
//    Else → "Normal usage"




let labelData: string = 'Label: [  Express  -  Fragile  ] includes insurance';

// 1. Extract label (between [ and ])
// '  Express  -  Fragile  '
// 2. Use trim() to clean spaces
// 'Express  -  Fragile'
// 3. Use replace to normalize(instead of having multiple spaces, only one space) 
// replace all 2 spaces with one space
// 'Express - Fragile'
// 4. If startsWith "Express" → 
//       if includes "Fragile" → "Express Fragile Shipping"
//       else → "Express Shipping"
//    Else → 
//       if includes "insurance" → "Standard Shipping with Insurance"
//       else → "Standard Shipping"



























