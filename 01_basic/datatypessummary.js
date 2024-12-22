
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive /reference  Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object
// const id =Symbol('123')
// const anotherID = Symbol('123')
// console.log(id === anotherID); // false


const heros=["shaktiman","doga","gangadhar"]

let myObj={
    name:"sonu",
    age:34
}

// const myFunc = function() {
//     console.log("inside function");
// }
// myFunc()

// console.log(typeof(null));

//memory
//stack(primitive) and heap (non-primitive)

let myYoutubename = "sonupachauri";
let anotherName = myYoutubename;
anotherName = "newsonupachauri";
// console.log(myYoutubename);
// console.log(anotherName);


let userOne = {name:"sonu",email:"sonu@gmail.com"}

let userTwo = userOne;

userTwo.email  = "newsonu@gmail.com";

console.log(userOne);
console.log(userTwo);

