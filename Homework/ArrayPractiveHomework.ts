// Question 4: Mobile Device Testing Setup

// Task: Create devices: ["iphone-12", "android-samsung", "ipad-pro"] and 
// connectedDevices: empty. Check if devices includes "iphone-12" - if yes, 
// move it to connectedDevices and add "CONNECTED-" prefix. Replace "android-samsung" 
// with "android-pixel". Add "tablet-surface" to devices. Insert "emulator" 
// at the beginning of connectedDevices. Remove the last device and store it 
// in a variable. Print all arrays and the stored device.

// Skills practiced: Device management, conditional operations, item storage


let devices = ["iphone-12", "android-samsung", "ipad-pro"]
let connectedDevices: string[] = []

if (devices.includes("iphone-12")) {
    /// yes/true

    // array - devices.splice(0, 1)
    // string - devices.splice(0, 1)[0]
    // boolean - devices.splice(0, 1)[0].startsWith('a')
    connectedDevices.push('CONNECTED-' + devices.splice(0, 1)[0]) // 'CONNECTED-iphone-12
}
// Replace "android-samsung" with "android-pixel"
devices.splice(devices.indexOf('android-samsung'), 1, 'android-pixel')
// Add "tablet-surface" to devices
devices.push("tablet-surface")
// Insert "emulator" at the beginning of connectedDevices.
connectedDevices.splice(0, 0, 'emulator')
//Remove the last device and store it in a variable

// let removedDevice = connectedDevices.pop()??toString()
let removedDevice = connectedDevices.pop()!


// Task: Create connections: ["mysql-prod", "redis-cache", "mongo-dev"]
// and activeConnections: empty. Check the first connection (index 0) - 
// if it includes "mysql", move it to activeConnections and add "SECURED-" 
// prefix. Check the second connection (index 1) - if it includes "redis", 
// replace it with "redis-cluster". Add "postgres-test" to connections. 
// Insert "monitor-connection" at the beginning of activeConnections. 
// Remove the last connection from activeConnections and add "BACKUP-" 
// prefix to it. Calculate total connections.

let connections: string[] = ["mysql-prod", "redis-cache", "mongo-dev"]
let activeConnections: string[] = []
if (connections[0].includes("mysql")) {
    activeConnections.push("SECURED-" + connections.splice(0, 1)[0])
}
console.log(connections)

if (connections[1].includes("redis")) {
    connections.splice(0, 1, "redis-cluster")
}
console.log(activeConnections)
connections.push("postgres-test")
activeConnections.splice(0, 0, "monitor-connection")
console.log(activeConnections)

let lastActiveConnection = "BACKUP-" + activeConnections.splice(activeConnections.length - 1, 1)

console.log(activeConnections.length)
console.log(connections.length)
console.log(activeConnections.length + connections.length)

// Question 7: Test Data Validation Pipeline
// Difficulty: ⭐⭐☆☆☆

// Create rawData: ["valid-email", "invalid-phone", "valid-address", "corrupt-data"] 
// and cleanData: empty. For each item in rawData, check if it includes "valid" - 
// if yes, move it to cleanData and replace "valid" with "verified". Insert "data-header"
//  at the beginning of cleanData. Remove the last item from rawData and add "processed-" 
// prefix before adding to cleanData. Print the processing results.

// Skills practiced: String manipulation with arrays, conditional moving, prefix operations

let rawData = ["valid-email", "invalid-phone", "valid-address", "corrupt-data"]
let cleanData: string[] = []

// valid-email
if (rawData[0].includes('valid')) {
    cleanData.push(rawData.splice(0, 1)[0].replace('valid', 'verified'))
}

// invalid-phone
if (rawData[0].includes('valid')) {
    // this will not be true so it will not remove
    cleanData.push(rawData.splice(0, 1)[0].replace('valid', 'verified'))
}

//"valid-address"
if (rawData[1].includes('valid')) {
    cleanData.push(rawData.splice(1, 1)[0].replace('valid', 'verified'))
}

// corrupt-data
if (rawData[1].includes('valid')) {
    // this will not be true so it will not remove
    cleanData.push(rawData.splice(1, 1)[0].replace('valid', 'verified'))
}

