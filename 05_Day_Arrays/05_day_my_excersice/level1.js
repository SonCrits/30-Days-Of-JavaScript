empty_array = []
numbers_array = [1, 2, 3, 4, 5]

console.log(empty_array)
console.log(numbers_array)


// Get first item, last item, middle item of the array
console.log("First element is " + numbers_array[0])
console.log("Last element is " + numbers_array[numbers_array.length - 1])

let middleIndex = Math.floor(numbers_array.length   / 2);
console.log("Middle element is " + numbers_array[middleIndex])

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
mixedDataTypes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(mixedDataTypes.length)

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itCompanies)

// Print the first company, middle and last company
console.log("First company is " + itCompanies[0])
console.log("Last company is " + itCompanies[itCompanies.length - 1])
middleCompaniesIndex = Math.floor(itCompanies.length / 2)
console.log("Middle company is " + itCompanies[middleCompaniesIndex])

itCompanies.forEach(function (company) {
    console.log("Foreach Company " + company)
})

for (i = 0; i < itCompanies.length; i++) {
    console.log("Common For Company " + itCompanies[i])
}

toUpperCaseCompanies = []
// Change each company name to uppercase one by one and print them out
for (i = 0; i < itCompanies.length; i++) {
    toUpperCaseCompanies.push(itCompanies[i].toUpperCase())
}
console.log(toUpperCaseCompanies)

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
companiesString = itCompanies.join(', ')
console.log(companiesString + "are big IT companies")

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// user function
function checkCompany(company) {
    for (i = 0; i < itCompanies.length; i++) {
        if (itCompanies[i] === company) {
            return company
        }
    }
    return "Company is not found"
}
console.log(checkCompany("Facebook"))
console.log(checkCompany("Viindoo"))

// use includes
if (itCompanies.includes("Facebook")) {
    console.log("Includes Facebook")
} else {
    console.log("Company is not found")
}
// use indexOf
if (itCompanies.indexOf("Facebook") !== -1) {
    console.log("Index Of Facebook")
} else {
    console.log("Company is not found")
}
// use find
const foundElement = itCompanies.find(item => item === "Facebook");
if (foundElement !== undefined) {
    console.log("Find Facebook")
} else {
    console.log("Company is not found")
}
// use some
const someElement = itCompanies.some(item => item === "Facebook");
if (someElement) {
    console.log("Some Facebook")
} else {
    console.log("Company is not found")
}

// Filter out companies which have more than one 'o' without the filter method
let companiesWithO = []
for (i = 0; i < itCompanies.length; i++) {
    let companyName = itCompanies[i].toLocaleLowerCase()
    if (companyName.includes("o")) {
        companiesWithO.push(itCompanies[i])
    }
}
console.log(companiesWithO)

const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => {
    console.log("acc: " + acc, "cur: " + cur);
    return acc + cur
}, 2)
console.log(sum)


const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr)
