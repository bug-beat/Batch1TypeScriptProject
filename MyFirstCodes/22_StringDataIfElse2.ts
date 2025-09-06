// 21. Comment Sentiment Analyzer

// 1. Extract comment (between [ and ])
// 2. Use trim() to remove extra spaces
// 3. If cleanComment includes "!!!" → 
//       if commentData includes "praise" → "Excited Praise"
//       else → "Excited Comment"
//    Else if commentData includes "good" → 
//       if cleanComment includes "work" → "Positive Work Comment"
//       else → "Positive Comment"
//    Else → "Neutral Comment"
let commentData: string = 'Comment: [   Amazing work!!!   ] includes praise';
let commentStart: number = commentData.indexOf('[')
let commentEnd: number = commentData.lastIndexOf(']')
let extractedComment = commentData.slice(commentStart + 1, commentEnd)
let commendTrimmed = commentData.trim()

//  
if (commendTrimmed.includes('!!!')) {
    if (commentData.includes('praise')) {
        // "Excited Praise"
    } else {
        // "Excited Comment"
    }
} else if (commentData.includes('good')) {
    if (commentData.includes('work')) {
        //"Positive Work Comment"
    } else {
        //"Positive Comment"
    }
} else {
    //"Neutral Comment"
}


// 1.first level ifs first
// 2.second level ifs second
// 3.fill expressions which means inside ifs
// 4.put messages

// 22. File Size Analyzer (with Number conversion)
let fileData: string = 'File: [document.pdf] size: [2.5MB] includes backup';

// 1. Extract file size (between second [ and ])
// 2. Use replace() to remove "MB" and convert to Number
// 3. If size > 1.0 → 
//       if size > 5.0 → "Large File with Backup"
//       else → "Medium File with Backup"
//    Else if size > 0.5 → 
//       if fileData includes "backup" → "Small File with Backup"
//       else → "Small File"
//    Else → "Tiny File"



// let fileData: string = 'File: [document.pdf] size: [2.5MB] includes backup'
let firstBracket: number = fileData.lastIndexOf('[')
let secondBracket: number = fileData.lastIndexOf(']')
let sizeString: string = fileData.slice(firstBracket + 1, secondBracket)
console.log(sizeString)
let sizeNumber: number = parseFloat(sizeString.replace("MB", ""))
console.log(sizeNumber)

if (sizeNumber > 1.0) {
    if (sizeNumber > 5.0) {
        console.log("Large File with Backup")
    } else {
        console.log("Medium File with Backup")
    }
} else if (sizeNumber > 0.5) {
    if (fileData.includes("backup")) {
        console.log("Small File with Backup")
    } else {
        console.log("Small File")
    }
} else {
    console.log("Tiny File")
}


// 24. Error Count Analyzer (with parseFloat)
let errorData: string = 'Errors: [15] critical: [3] includes urgent';
// 1. Extract total errors (between first [ and ])
// 2. Extract critical errors (between second [ and ]) and convert both to parseFloat
// 3. If totalErrors > 10 → 
//       if criticalErrors > 5 → "High Critical Error Count"
//       else → "High Error Count"
//    Else if totalErrors > 5 → 
//       if errorData includes "urgent" → "Moderate Urgent Errors"
//       else → "Moderate Errors"
//    Else → "Low Error Count"

// you store variables when you are reusing them

// error coount data extraction
let errorCount: string = errorData.slice(errorData.indexOf('[') + 1, errorData.indexOf(']'))
console.log('error count = ' + errorCount)
let errorCountNumber: number = parseFloat(errorCount)

// critical error data extraction
let criticalCount: string = errorData.slice(errorData.lastIndexOf('[') + 1, errorData.lastIndexOf(']'))
console.log('critical count = ' + criticalCount)
let criticalCountNumber: number = parseFloat(criticalCount)

if (errorCountNumber > 10) {
    if (criticalCountNumber > 5) {
        //"High Critical Error Count"
    } else {
        // "High Error Count"
    }
} else if (errorCountNumber > 5) {
    if (errorData.includes('urgent')) {
        //"Moderate Urgent Errors"
    } else {
        //"Moderate Errors"
    }
} else {
    //"Low Error Count"
}




// 26. User Rating Analyzer (with parseFloat)
let ratingData: string = 'Rating: [4.8] reviews: [127] includes verified';

// 1. Extract rating (between first [ and ])
// 2. Extract review count (between second [ and ]) and convert both to parseFloat
// 3. If rating > 4.5 → 
//       if reviews > 100 → "Excellent High-Volume Rating"
//       else → "Excellent Rating"
//    Else if rating > 4.0 → 
//       if ratingData includes "verified" → "Good Verified Rating"
//       else → "Good Rating"
//    Else → "Average Rating"











