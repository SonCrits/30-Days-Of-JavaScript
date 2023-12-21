const firstName = 'Tran';
const lastName = 'Son';
const country = 'Viet Nam';
const city = 'Hai Duong';
let age = 30;
let date = new Date();
let year = date.getFullYear();

console.log('Type of firstName: ', typeof firstName);
console.log('Type of lastName: ', typeof lastName);
console.log('Type of country: ', typeof country);
console.log('Type of city: ', typeof city);
console.log('Type of age: ', typeof age);
console.log('Type of year: ', typeof year);

// Check if type of '10' is equal to 10
console.log('Type of \'10\' is equal to 10: ', typeof '10' === typeof 10);

// Check if parseInt('9.8') is equal to 10
console.log('parseInt(\'9.8\') is equal to 10: ', parseInt('9.8') === 10);

// Boolean value is either true or false.
console.log('Boolean value is either true or false: ', true || false);
console.log('Boolean value is either true or false: ', false || true);

console.log(4 === '4')  // false

console.log(parseInt(date.getMonth() + 1))
console.log(date.getDate())
console.log(date.getHours())
console.log(date.getMinutes())
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(new Date().getTime() - new Date(1970, 0, 1).getTime())
