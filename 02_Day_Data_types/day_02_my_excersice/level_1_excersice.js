var chanlleage = "30 Days Of JavaScript";
let builtInFunction = "Build in Function :";

// output value and length
console.log(chanlleage);
console.log("length", builtInFunction,chanlleage.length);


// uppercase and lowercase
console.log("toUpperCase", builtInFunction ,chanlleage.toUpperCase());
console.log("toLowerCase", builtInFunction ,chanlleage.toLowerCase());

// cut the string and diffirent between substr and substring
// substr(start, length)
// substring(start, end)
console.log("substr", builtInFunction, chanlleage.substr(1));
console.log("substring", builtInFunction, chanlleage.substring(2));
console.log("Diffirent substr and substring", builtInFunction, chanlleage.substr(3, 7)); // Days Of [7 characters]
console.log("Diffirent substr and substring", builtInFunction, chanlleage.substring(3, 7)); // Days [4 characters. Start = D, End of index = s]

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log("split", builtInFunction, chanlleage.split(' ').slice(1, 4).join(' ')); // Days Of JavaScript

// Check if the string contains a word Script using includes() method
console.log("includes", builtInFunction, chanlleage.includes("Script")); // true

// Split the string into an array using split() method
console.log("split", builtInFunction, chanlleage.split(' ')); // ["30", "Days", "Of", "JavaScript"]

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log("split", builtInFunction, companies.split(', ')); // ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log("replace", builtInFunction, chanlleage.replace('JavaScript', 'Python')) // 30 Days Of Python

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log("charAt", builtInFunction, chanlleage.charAt(15)) // S

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log("charCodeAt", builtInFunction, chanlleage.charCodeAt('J')) // J ASCII number is 51

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log("indexOf", builtInFunction, chanlleage.indexOf('a')) // first index a in chanlleage string is 4

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log("lastIndexOf", builtInFunction, chanlleage.lastIndexOf('a')) // last index a in chanlleage string is 14

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
var becauseString = "You cannot end a sentence with because because because is a conjunction"
console.log("indexOf", builtInFunction, becauseString.indexOf("because")) // first index of because in becauseString is 31

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("lastIndexOf", builtInFunction, becauseString.lastIndexOf("because")) // last index of because in becauseString is 47

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("search", builtInFunction, becauseString.search("because")) // first index of because in becauseString is 31

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
var error_chanlleage = " 30 Days Of JavaScript "
console.log("trim", builtInFunction, error_chanlleage.trim()) // 30 Days Of JavaScript

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log("startsWith", builtInFunction, chanlleage.startsWith("30")) // true
console.log("startsWith", builtInFunction, chanlleage.startsWith("20")) // false

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log("endsWith", builtInFunction, chanlleage.endsWith("JavaScript")) // true
console.log("endsWith", builtInFunction, chanlleage.endsWith("Python")) // false

// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log("match", builtInFunction, chanlleage.match("JavaScript")) // ['JavaScript', index: 11, input: '30 Days Of JavaScript', groups: undefined]
console.log("match", builtInFunction, chanlleage.match("Of")) // ['Of', index: 8, input: '30 Days Of JavaScript', groups: undefined]
console.log("match", builtInFunction, chanlleage.match("Python")) // null

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
var days = '30 Days of'
var js = 'Javascript'
console.log("concat", builtInFunction, days.concat(" ", js)) // 30 Days of Javascript

// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log("repeat", builtInFunction, chanlleage.repeat(2)) // 30 Days Of JavaScript30 Days Of JavaScript
