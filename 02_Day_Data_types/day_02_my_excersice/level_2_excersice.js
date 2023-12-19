// Exercise: Level 2

// Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"")

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log("typeof", builtInFunction, (typeof('10') == typeof(10))) // false
console.log("toString", builtInFunction, (typeof('10') == typeof(toString(10)))) // true

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log("parseFloat", builtInFunction, parseFloat(9,8) == 10) // false
console.log("parseFloat", builtInFunction, parseFloat(9,8) == 9) // true

// Check if 'on' is found in both python and jargon
var python = "Python"
var jargon = "Jargon"
console.log("includes", builtInFunction, python.includes("on") && jargon.includes("on")) // true

// I hope this course is not full of jargon. Check if jargon is in the sentence.
var jargon_str = "I hope this course is not full of jargon"
console.log("includes", builtInFunction, jargon_str.includes("jargon")) // true

// Generate a random number between 0 and 100 inclusively.
console.log("random", builtInFunction, Math.random() * 100)

// Generate a random number between 50 and 100 inclusively.
console.log("random", builtInFunction, Math.random() * (100 - 50) + 50)

// Generate a random number between 0 and 255 inclusively.
console.log("random", builtInFunction, Math.random() * 255)
