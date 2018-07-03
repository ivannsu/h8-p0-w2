// 1. Let's Form a Sentence

var word1 = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word1 + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + ' ' + sixth + ' ' + seventh);
console.log('-------------------------------------------------');

// 2. Index Accessing - 1 by 1

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
var thirdWord = word[15] + word[16];
var fourthWord = word[18] + word[19];
var fifthWord = word[21] + word[22] + word[23] + word[24];

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
console.log('-------------------------------------------------');

// 3. Breaking Sentence (Again) using Substring

var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substr(4, 10);
var thirdWord3 = word3.substr(15, 2);
var fourthWord3 = word3.substr(18, 2);
var fifthWord3 = word3.substr(21, 4);

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);
console.log('-------------------------------------------------');
