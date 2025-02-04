/*
* Premitive Datatypes

                  Type                                   typeof

i)            Number                                   number
ii)           String                                   string
iii)          Boolean                                  boolean
iv)           Bigint                                   bigint
v)            Symbol                                   symbol
vi)           Null                                     object
vii)          Undefined                                undefined
 

* Non-Premitive OR Referance OR Object datatype

                  Type                                   typeof

i)               Object                                 object
ii)              Array                                  object
iii)             Function                            function(object)

JavaScript is a dynamically typed language. 
This means that variable types are determined at runtime, 
and you do not need to explicitly declare the type of a variable 
before using it. You can assign different types of
values to a variable during its lifetime.

*/

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3