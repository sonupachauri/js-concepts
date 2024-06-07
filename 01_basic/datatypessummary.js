
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

const myFunc = function() {
    console.log("inside function");
}
myFunc()
