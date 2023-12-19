// Exercise: Level 3

var loveStr = "Love is the best thing in this world. Some found their love and some are still looking for their love.";

// Chia chuỗi thành mảng các từ
var wordsArray = loveStr.split(" ");
loveStr = loveStr.replace(/\./g, '');

// Đếm số lượng từ "love"
var loveCount = 0;
for (var i = 0; i < wordsArray.length; i++) {
    // Chuyển đổi từ về chữ thường để so sánh không phân biệt chữ hoa chữ thường
    if (wordsArray[i].toLowerCase() === "love") {
        loveCount++;
    }
}

console.log("Số lượng từ 'love' trong chuỗi là: " + loveCount);

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
var becauseStr = "You cannot end a sentence with because because because is a conjunction";
var becauseCount = becauseStr.match(/because/g).length;
console.log("Số lượng từ 'because' trong chuỗi là: " + becauseCount);

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

// Remove special characters and convert to lowercase
const cleanText = sentence.replace(/[^a-zA-Z ]/g, '').toLowerCase();

// Split the text into an array of words
// split(/\s+/) to split at any whitespace character
const wordsArray1 = cleanText.split(/\s+/);

// Create an object to keep track of word frequency
const wordFrequencies = {};

// Iterate through the array
for (const word of wordsArray1) {
    // If the word is not yet present in the object, initialize it to 0
    if (!wordFrequencies[word]) {
        wordFrequencies[word] = 0;
    }
    // Increment the word count
    wordFrequencies[word]++;
}

// Find the most frequent word
let maxCount = 0;
let mostFrequentWord = '';

for (const word in wordFrequencies) {
    if (wordFrequencies[word] > maxCount) {
        maxCount = wordFrequencies[word];
        mostFrequentWord = word;
    }
}

console.log("Chuỗi sau khi xử lý: " + cleanText);
console.log("Từ xuất hiện nhiều nhất là: " + mostFrequentWord + " với số lần xuất hiện là: " + maxCount);


// Calculate the total annual income of the person by extracting the numbers from the following text.
// 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const numbers = text.match(/\d+/g).map(Number);
const annualIncome = numbers.reduce((acc, num) => acc + num) * 12;
console.log("Tổng thu nhập hàng năm là: " + annualIncome + " euro");
