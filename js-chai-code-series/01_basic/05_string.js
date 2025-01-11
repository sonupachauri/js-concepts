const name = "sonu";
const repoCount= 50

console.log(name + repoCount);

// console.log(`my name is ${name} and my repo count is ${repoCount}`);
// console.log(typeof(name));

// let gameName = new String("sonu pachauri");
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));

//The at() method is a new addition to JavaScript. 
// It allows the use of negative indexes while charAt() do not. 
// Now you can use myString.at(-2) instead of charAt(myString.length-2) .
//anchor
// console.log(gameName.anchor());
// console.log(gameName.at(2));

// console.log(gameName.charAt(2));
//  console.log(gameName.indexOf('u'));


// let gameName = new String("sonu pachauri");

// const newGameName = gameName.substring(0,6);
// console.log(newGameName);
// const anotherStr = gameName.slice(0,4);
// slice can take negative value but substring not
// let anotherStr = gameName.slice(4,-2)
// let anotherStr = gameName.slice(-4,15)
// console.log(anotherStr);

// const url ="https://sonu.pachauri/%20sahil";
// console.log(url.includes("sahil"));
// console.log(gameName.split(' '));

// let gameName = new String("sonu pachauri");
// // console.log(gameName.big());
// console.log(gameName.charCodeAt());


// const str1 = 'Hello';
// const str2 = 'World';

// console.log(str1.concat(' ', str2));

// const str1 = 'Cats are the best!';

// console.log(str1.endsWith('best!'));
// // Expected output: true

// console.log(str1.endsWith('best', 17));
// // Expected output: true

// const str2 = 'Is this a question?';

// console.log(str2.endsWith('question'));
// // Expected output: false

// const contentString = "MDN Web Docs";

document.body.innerHTML = contentString.link("https://developer.mozilla.org/");



const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const regexp = /[A-E]/gi;
const matches = str.match(regexp);

console.log(matches);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']






