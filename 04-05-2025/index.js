console.log("first");

let userName = "Muhammad Fareed";

// for (let i = 0; i < userName.length; i++) {
//   console.log(userName);
// }

// console.log(userName.toUpperCase());

// console.log(userName.toLowerCase());

// console.log(userName.toLocaleUpperCase());

// toLocaleLowerCase
// const dotted = "İstanbul";

// console.log(`EN-US: ${dotted.toLocaleLowerCase("en-US")}`);

//charAt
// console.log(userName.charAt(9));

//charCodeAt
// console.log(userName.charCodeAt(10));

// includes
// console.log(userName.includes("Fareed", 8));

// concat
// console.log(userName.concat());

// indexOf
// const paragraph = "I think Ruth's dog is cuter than your dog!";

// const searchTerm = "dog";
// const indexOfFirst = paragraph.indexOf(searchTerm);
// console.log(indexOfFirst, "indexOfFirst");

//split
// const str = "The quick brown fox jumps over the lazy dog.";

// const words = str.split("");

// console.log(words);

//slice

// const str = "The quick brown fox jumps over the lazy dog.";

// console.log(str.slice(15, 22));

// match
// const paragraph = "The quick brown fox jumps over the lazy dog. It Barked.";
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);

// console.log(found, "found");

// replace
// const paragraph = "I think Ruth's dog is cuter than your dog! Ruth's";

// console.log(paragraph.replace("Ruth's", "my"));

// search
// const paragraph = "I think Ruth's dog is cuter than your dog!";
// console.log(paragraph.length);
// // Anything not a word character, whitespace or apostrophe
// const regex = /[^\w\s']/g;

// console.log(paragraph.search(regex));

// startsWith
// const str1 = "Saturday night plans";

// console.log(str1.startsWith("Sat"));

//trim
// const greeting = "   Hello world!   ";

// console.log(greeting.trim());

// repeat

// const mood = "Happy! ";

// console.log(`I feel ${mood.repeat(3)}`);

//padStart
// const str1 = "0.5";

// console.log(str1.padStart(5, "0"));
// Expected output: "05"

// const fullNumber = "2034399002125581";
// const last4Digits = fullNumber.slice(-4);
// console.log(last4Digits, "last4Digits");
// const maskedNumber = last4Digits.padStart(fullNumber.length, "*");

// console.log(maskedNumber);

// padEnd
// const str1 = "Breaded Mushrooms";

// console.log(str1.padEnd(25));

// ------------------ Numbers

// toFixed

// let numbers = 34434.5645634535;

// console.log(numbers.toFixed(3));

// toExponential
// let numbers = 0.5;

// console.log(numbers.toExponential(), "numbers");

// let numbers = 34534511;

// console.log(numbers.toLocaleString("ur-PK"), "numbers");

//toPrecision
// let numbers = 34545;

// console.log(numbers.toPrecision(4), "numbers");
