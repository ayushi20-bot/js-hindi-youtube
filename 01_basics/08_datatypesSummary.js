// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const BigNumber = 643763563868398787n

// Reference (non primitive)

// array, objects, functions

const heros =["shaktiman", "naagraj", "doga"]
let myObj = {
    name : "ayushi",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof id);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack ( primitive ), heap( non primitive )

let myYoutuberName = "ayushijhadotcom"
let anotherName = myYoutuberName

anotherName = "hateyouayushi"

console.log(myYoutuberName)
console.log(anotherName)


let userOne = {
    email :" ayushijha518gmail.com"
}
let userTwo = userOne

userTwo.email = "ayushigmail.com"

console.log(userOne)
console.log(userTwo)

