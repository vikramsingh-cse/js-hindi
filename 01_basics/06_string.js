const name ="vikram"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('vikram')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,5)
console.log(anotherString);

const newStringOne = "     vikram   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vikram.com/vikramsingh"
console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));